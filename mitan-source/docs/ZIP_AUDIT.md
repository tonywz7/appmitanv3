# ZIP_AUDIT.md

**Source:** `stitch_design_integrity_system.zip` (Google Stitch export)
**Audited:** 13 top-level folders, 11 `code.html` exports, 10 `screen.png` previews, 1 `DESIGN.md`

---

## 1. Current Structure (as exported)

```
stitch_design_integrity_system/
├── register_desktop/            code.html + screen.png
├── blog_insights_desktop/       code.html + screen.png
├── mitan_landing_page_animated_version/  code.html + screen.png
├── login_desktop/               code.html + screen.png
├── mitan_landing_page_1/        code.html only (no screen.png)
├── faq_desktop/                 code.html + screen.png
├── shader/                      code.html + screen.png
├── keamanan_privasi_desktop/    code.html + screen.png
├── mitan_landing_page_2/        code.html + screen.png
├── tentang_mitan_redesigned_about_page/  screen.png only (no code.html)
├── hubungi_kami_desktop/        code.html + screen.png
├── blog_insights_mobile/        code.html + screen.png
└── mitan_design_system/         DESIGN.md (design token source of truth)
```

Flat, per-screen export. No framework, no shared includes, no build system — every screen is a fully self-contained standalone HTML document.

---

## 2. Detected Problems

| # | Problem | Evidence | Severity |
|---|---|---|---|
| 1 | **Design tokens duplicated verbatim in 7 files** | Full ~44-key color palette + typography + spacing + radius re-declared inline inside a `<script id="tailwind-config">` block in every one of `login_desktop`, `register_desktop`, `faq_desktop`, `hubungi_kami_desktop`, `keamanan_privasi_desktop`, `blog_insights_desktop`, `blog_insights_mobile`. Verified byte-identical (order-independent hash match) across all 7 — this is pure duplication, not drift. | High |
| 2 | **Duplicate `<link>` tag** | The Material Symbols Google Font `<link>` is included **twice**, identically, in all 7 files above. Dead weight, doubles a network request. | Low |
| 3 | **Two design systems coexist** | `mitan_landing_page_1`, `mitan_landing_page_2`, and `mitan_landing_page_animated_version` use an **ad-hoc, hardcoded** token approach (`.text-mitan-teal { color: #10b981 }` / `#00b37e`, `Inter` font) that does not match `DESIGN.md`'s documented tokens (`primary: #006c4b`, Manrope + Plus Jakarta Sans). This is real design drift, not just duplication. | High |
| 4 | **Near-duplicate files** | `mitan_landing_page_1` and `mitan_landing_page_2` differ by only 2 lines (an `html class` attribute and the Google Fonts import — page 1 imports `Inter`, page 2 imports `Manrope`/`Plus Jakarta Sans`). Page 1 also has no `screen.png`, suggesting it's an abandoned earlier draft. | Medium |
| 5 | **Broken export: missing source** | `tentang_mitan_redesigned_about_page` has **only `screen.png`** — no `code.html` was exported. This screen cannot be recovered or migrated without a re-export from Stitch. | High (blocking) |
| 6 | **Missing preview** | `mitan_landing_page_1` has no `screen.png` (moot after dedup decision, but noted). | Low |
| 7 | **Desktop/mobile split as separate files, not responsive variants** | `blog_insights_desktop` (23 responsive-prefixed classes) and `blog_insights_mobile` (0 responsive-prefixed classes) are two entirely separate documents rather than one responsive component with breakpoints. All other screens are desktop-only exports with no mobile counterpart at all. | Medium |
| 8 | **Non-semantic / inconsistent structure** | Only 2 of 7 content pages (`faq_desktop`, `hubungi_kami_desktop`) use a semantic `<header>` tag for the site nav; others bury it in generic `<div>`s. Header/footer markup is repeated near-identically across every page (not shared). | Medium |
| 9 | **Broken/placeholder navigation** | 71 total `href="#"` placeholder anchors across all files (blog: 15, faq: 12, hubungi-kami: 17, keamanan-privasi: 9, login: 4, register: 6, landing×2: 8). Expected for a design export, but every one is a dead link. | Low (expected, not silently fixed) |
| 10 | **Non-production dependency: Tailwind Play CDN** | Every file loads `cdn.tailwindcss.com` — official Tailwind docs explicitly warn this is **not suitable for production** (large runtime bundle, console warning, no purge). Needs a real build step eventually. | High (build blocker, out of scope for this pass) |
| 11 | **Ephemeral, non-owned image assets** | All imagery (21 references) points to `https://lh3.googleusercontent.com/aida-public/...` — Google's internal Stitch/AIDA preview CDN. These are **not permanent, self-hosted assets**; they can expire or be revoked at any time and should never ship to production as-is. | High |
| 12 | **`shader/code.html` is not a page** | It's a 122-line isolated WebGL canvas snippet (animated background effect), exported as if it were a screen. It has no page chrome (nav/footer) — it's a reusable decorative component, mis-filed at the top level alongside real pages. | Low |
| 13 | **Naming inconsistent with any framework convention** | Folder names use `snake_case`/mixed (`mitan_landing_page_animated_version`, `tentang_mitan_redesigned_about_page`) — not kebab-case routes, not PascalCase components. | Low |

---

## 3. Cleanup Decisions

| Decision | Rationale |
|---|---|
| Centralize the 7 duplicated token blocks into one `src/styles/tailwind-config.js` + `src/styles/tokens.css`, referenced by `<script src>` | Verified byte-identical; safe, mechanical dedup with zero visual risk |
| Remove the duplicate Material Symbols `<link>` in all 7 affected files | Byte-identical duplicate, zero risk |
| Keep `mitan_landing_page_2`, discard `mitan_landing_page_1` | Page 2's fonts match `DESIGN.md`; Page 1 is off-brand (`Inter`) and has no preview image, indicating an abandoned draft |
| Keep `mitan_landing_page_animated_version` as a **separate, flagged** variant — do NOT merge or silently recolor it | Its hardcoded `#00b37e`/`Inter`-adjacent tokens conflict with `DESIGN.md`; reconciling requires a **design decision** by a human, not a mechanical cleanup rule |
| Extract header/footer from `faq_desktop` (most complete semantic markup) into `src/components/layout/header.html` / `footer.html` | Fulfills "extract reusable UI" — but NOT wired into other pages yet (static HTML has no include mechanism; wiring requires templating = framework migration, explicitly out of scope) |
| Move `shader/code.html` into `src/components/shared/shader-background.html` | It is a reusable decorative snippet, not a page |
| Move `tentang_mitan_redesigned_about_page/screen.png` only, log as blocked | Cannot fabricate missing `code.html` |
| Leave `href="#"` placeholders as-is | Expected in a design-only export; fabricating destination URLs would misrepresent the design |
| Leave `cdn.tailwindcss.com` and external image URLs as-is, flagged | Replacing them is build-tooling/asset-pipeline work, not structural normalization — explicitly out of scope per this task's Step boundaries |

---

## 4. Migration Readiness Score

| Category | Score (0-10) | Notes |
|---|---|---|
| Structure / routing clarity | 8 | Clean after reorg; one broken export (`about`) |
| Design token consistency | 6 | Core system (7 files) is solid and now centralized; 3 landing variants still drift from it |
| Component reusability | 4 | Header/footer extracted but not wired; no atomic UI components exist yet - everything is monolithic per-page markup |
| Asset production-readiness | 3 | All imagery is ephemeral Google-hosted URLs; none are owned/self-hosted |
| Build/runtime readiness | 3 | Tailwind Play CDN in every file; no bundler, no framework |
| Responsive coverage | 3 | Only 1 of 8 real pages has a true mobile variant; it's a separate file, not breakpoints |

**Overall Migration Readiness: 4.5 / 10** - Structurally cleanable (done, see below), but **not** yet buildable as a real product: needs (a) asset localization, (b) real Tailwind build pipeline, (c) responsive consolidation, (d) component decomposition, (e) re-export of the missing `about` page. None of this is done in this pass by design - this pass is structure-only.
