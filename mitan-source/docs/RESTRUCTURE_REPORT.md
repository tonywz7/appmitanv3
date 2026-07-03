# RESTRUCTURE_REPORT.md

## Moved Files

| Source | Destination | Transform applied |
|---|---|---|
| `login_desktop/code.html` | `src/app/login/index.html` | Dedup Material Symbols link, centralized token config |
| `login_desktop/screen.png` | `public/screens/login-desktop.png` | Renamed to kebab-case |
| `register_desktop/code.html` | `src/app/register/index.html` | Dedup Material Symbols link, centralized token config |
| `register_desktop/screen.png` | `public/screens/register-desktop.png` | Renamed to kebab-case |
| `faq_desktop/code.html` | `src/app/faq/index.html` | Dedup Material Symbols link, centralized token config |
| `faq_desktop/screen.png` | `public/screens/faq-desktop.png` | Renamed to kebab-case |
| `hubungi_kami_desktop/code.html` | `src/app/hubungi-kami/index.html` | Kebab-cased route, dedup link, centralized config |
| `hubungi_kami_desktop/screen.png` | `public/screens/hubungi-kami-desktop.png` | Renamed to kebab-case |
| `keamanan_privasi_desktop/code.html` | `src/app/keamanan-privasi/index.html` | Kebab-cased route, dedup link, centralized config |
| `keamanan_privasi_desktop/screen.png` | `public/screens/keamanan-privasi-desktop.png` | Renamed to kebab-case |
| `blog_insights_desktop/code.html` | `src/app/blog-insights/index.html` | Kebab-cased route, dedup link, centralized config |
| `blog_insights_desktop/screen.png` | `public/screens/blog-insights-desktop.png` | Renamed to kebab-case |
| `blog_insights_mobile/code.html` | `src/app/blog-insights/mobile.html` | Same route dir as desktop variant, dedup link, centralized config |
| `blog_insights_mobile/screen.png` | `public/screens/blog-insights-mobile.png` | Renamed to kebab-case |
| `mitan_landing_page_2/code.html` | `src/app/landing/index.html` | Chosen as canonical landing page (see Merged Files) |
| `mitan_landing_page_2/screen.png` | `public/screens/landing.png` | Renamed |
| `mitan_landing_page_animated_version/code.html` | `src/app/landing-animated/index.html` | Kebab-cased route; content untouched (flagged, see Remaining Risks) |
| `mitan_landing_page_animated_version/screen.png` | `public/screens/landing-animated.png` | Renamed |
| `shader/code.html` | `src/components/shared/shader-background.html` | Re-classified as reusable component, not a route |
| `shader/screen.png` | `public/screens/shader-background.png` | Renamed |
| `tentang_mitan_redesigned_about_page/screen.png` | `public/screens/about.png` | Renamed; no code to move (see Remaining Risks) |
| `mitan_design_system/DESIGN.md` | `docs/DESIGN.md` | Moved as-is (source of truth, unedited) |
| — (derived) | `src/styles/tokens.css` | New file generated from `DESIGN.md` |
| — (derived) | `src/constants/design-tokens.json` | New file generated from `DESIGN.md` |
| — (derived) | `src/styles/tailwind-config.js` | New file — canonical config extracted from the 7 duplicated blocks |
| — (extracted) | `src/components/layout/header.html` | New file — extracted from `faq_desktop` |
| — (extracted) | `src/components/layout/footer.html` | New file — extracted from `faq_desktop` |

## Files Removed

| File | Reason |
|---|---|
| `mitan_landing_page_1/code.html` | Near-duplicate of `mitan_landing_page_2` (2-line diff); off-brand `Inter` font not matching `DESIGN.md`; no preview image existed to verify visual intent |
| 7× duplicate `<link>` (Material Symbols Outlined) tags | Byte-identical duplicate within `login`, `register`, `faq`, `hubungi-kami`, `keamanan-privasi`, `blog-insights` (×2 files) |
| 7× inline `<script id="tailwind-config">` blocks (~90 lines each, ~630 lines total) | Replaced by a single shared `<script src="../../styles/tailwind-config.js">` reference per file |

## Merged Files

| Merge | Detail |
|---|---|
| `mitan_landing_page_1` + `mitan_landing_page_2` → `src/app/landing/` | Not a content merge — a **selection**. Both were near-identical; kept the one consistent with the documented design system, discarded the other. No content from page 1 was folded in, since it contained nothing page 2 lacked. |
| 7× duplicated token blocks → `src/styles/tailwind-config.js` | True merge: verified byte-identical (order-independent) across all 7 source files before consolidating into one file referenced by all 7. |

## Remaining Risks (not resolved in this pass — logged, not silently fixed)

1. **`src/app/about/` has no page** — source `code.html` was never exported from Stitch for `tentang_mitan_redesigned_about_page`. Only the preview image was recoverable. Needs re-export. See `src/app/about/MISSING_SOURCE.md`.
2. **`landing/` and `landing-animated/` still drift from `DESIGN.md`** — both use hardcoded hex colors (`#10b981`/`#00b37e`) and `Inter`-adjacent typography instead of the token system used everywhere else. Left untouched intentionally: reconciling brand color usage is a design decision, not a mechanical cleanup, and silently repainting a hero page's colors without sign-off would be irresponsible.
3. **Header/footer extracted but not wired anywhere** — `src/components/layout/header.html` / `footer.html` exist as reference snippets, but all 7 route pages still carry their own inline (near-duplicate, not fully identical) header/footer markup. True de-duplication requires a templating layer (React/Next/Vue partials, server includes, etc.) — that is framework migration, explicitly excluded from this task.
4. **`blog-insights` desktop/mobile are still two separate files**, not one responsive component. Consolidating them into real breakpoints is a code-writing task, not a file-move — left as-is and flagged rather than attempted.
5. **All 8 live pages still load `cdn.tailwindcss.com`** (Tailwind Play CDN). This is fine for prototyping but is explicitly documented by Tailwind as unsuitable for production. No build pipeline exists yet.
6. **All 21 image references still point to `lh3.googleusercontent.com/aida-public/...`** — ephemeral Google-hosted preview URLs, not owned assets. None were downloaded/localized in this pass (binary asset pipeline work, out of scope for structural normalization).
7. **71 `href="#"` placeholder links remain across all pages** — expected for a design-only export; left as-is rather than inventing destinations.
8. **No components exist under `src/components/ui/`** — the export contains zero componentized building blocks (buttons, cards, inputs are all raw Tailwind-classed markup inline per page). Decomposing them into reusable atoms is code-writing work for the actual migration phase, not this normalization pass.
9. **`src/features/`, `src/hooks/`, `src/lib/`, `src/services/`, `src/types/`** are empty scaffolds (placeholder files only) — there is no application logic in a static design export to populate them with. They exist to match the target structure ahead of the eventual framework migration.

## Import / Route / Asset Verification

- All 7 centralized-config references (`../../styles/tailwind-config.js`) resolve correctly relative to their file depth (`src/app/<route>/*.html`) — verified by direct path check, not assumed.
- `tailwind-config.js` content verified byte-for-byte equivalent to the original 7 duplicated blocks (order-independent hash match performed before deletion).
- No `.tsx`/`.jsx`/JS module imports exist anywhere in this export (pure static HTML) — there is no dependency graph to validate beyond the `<script src>`/`<link href>` references checked above.
