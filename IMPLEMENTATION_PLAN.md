# MITAN Phase 2: Implementation Plan

## Executive Summary

This document defines the systematic approach to implement 7 pages from the Stitch design source (mitan-cleaned) into the existing Next.js project, ensuring pixel-perfect fidelity while extracting reusable components in optimal sequence.

**Total Scope**: 7 pages, ~15 reusable components, ~45 files modified/created
**Timeline**: Phased implementation with component dependencies resolved first
**Risk Level**: Low (source files complete except About page)

---

## 1. Page Implementation Order

Pages are sequenced by dependency and complexity to establish patterns early.

### Phase 2.1: Foundation Layer (Weeks 1-2)

#### 1. **Landing Page** (FOUNDATION)
- **Purpose**: Establish design patterns, component hierarchy, responsive behavior
- **Features**: Navbar, Hero section, Features grid, CTA, Footer
- **Files Modified**: 1 new page + 4 components extracted
- **Dependencies**: None (independent)
- **Est. Time**: 3-4 days
- **Why First**: Sets the pattern for all other pages

```
/src/app/page.tsx (new)
/src/components/layout/Navbar.tsx (extracted)
/src/components/layout/Hero.tsx (extracted)
/src/components/layout/Footer.tsx (extracted)
/src/components/sections/FeaturesGrid.tsx (extracted)
```

#### 2. **Login Page** (FOUNDATION)
- **Purpose**: Establish form patterns, input validation, button states
- **Features**: Auth split layout, email/password inputs, submission states
- **Files Modified**: 1 new page + 2 components
- **Dependencies**: Button, TextField, PasswordField (from phase 2.1)
- **Est. Time**: 2-3 days
- **Why Second**: Forms are used in Contact later

```
/src/app/(auth)/login/page.tsx (new)
/src/components/forms/AuthForm.tsx (extracted)
/src/components/forms/FormField.tsx (extracted)
```

### Phase 2.2: Simple Pages (Weeks 2-3)

#### 3. **Contact Page**
- **Purpose**: Reuse form patterns, establish contact-specific form
- **Features**: Form, Navbar, Footer
- **Files Modified**: 1 new page + 1 component
- **Dependencies**: AuthForm variant, Button, TextField (from earlier phases)
- **Est. Time**: 1-2 days

```
/src/app/contact/page.tsx (new)
/src/components/forms/ContactForm.tsx (extracted variant of AuthForm)
```

#### 4. **Privacy Policy Page**
- **Purpose**: Simple content page, reuse layout
- **Features**: Navbar, Footer, sections
- **Files Modified**: 1 new page
- **Dependencies**: Navbar, Footer (already extracted)
- **Est. Time**: 1 day

```
/src/app/privacy/page.tsx (new)
```

### Phase 2.3: Complex Components (Weeks 3-4)

#### 5. **FAQ Page**
- **Purpose**: Introduce Accordion component, question/answer patterns
- **Features**: Accordion, FAQ items, section layout
- **Files Modified**: 1 new page + 1 component
- **Dependencies**: Accordion (new extraction)
- **Est. Time**: 2-3 days

```
/src/app/faq/page.tsx (new)
/src/components/ui/Accordion.tsx (new extraction)
```

#### 6. **Blog Insights Page**
- **Purpose**: Introduce grid layouts, card components, pagination
- **Features**: Blog card grid, filters, pagination
- **Files Modified**: 1 new page + 1 component
- **Dependencies**: Card, Button (from earlier)
- **Est. Time**: 2-3 days

```
/src/app/blog/page.tsx (new)
/src/components/cards/BlogCard.tsx (new extraction)
```

### Phase 2.4: Blocked Content

#### 7. **About Page** (BLOCKED - AWAITING SOURCE)
- **Status**: Source missing, screenshot only available
- **Action**: Placeholder until Stitch re-exports source
- **Est. Time**: 1-2 days (once source available)

---

## 2. Reusable Component Extraction Order

Components should be extracted in dependency order: lowest-level dependencies first.

### Tier 1: Atomic Components (No dependencies)
| Component | Used By | Files | Priority |
|-----------|---------|-------|----------|
| Button | All pages | 1 | P0 |
| TextField | Login, Contact | 1 | P0 |
| PasswordField | Login | 1 | P0 |
| Label | All forms | 1 | P0 |
| Container | All layouts | 1 | P0 |
| Spacer | All pages | 1 | P0 |
| Typography (H1-H6, P) | All pages | 1 | P0 |

**Extraction Method**: Copy atomic HTML from Landing page, convert to TSX with design token values.

### Tier 2: Composite Components (Depends on Tier 1)
| Component | Dependencies | Used By | Files | Priority |
|-----------|-------------|---------|-------|----------|
| AuthForm | Button, TextField, Label, PasswordField | Login, potentially Register | 1 | P1 |
| ContactForm | Button, TextField, Label, TextArea | Contact | 1 | P1 |
| Card | Container, Typography | Blog, FAQ | 1 | P1 |
| FormField | Label, TextField, error display | Contact, Login | 1 | P1 |

**Extraction Method**: Identify form patterns in HTML, convert to component with props for label, type, etc.

### Tier 3: Layout Components (Depends on Tier 1-2)
| Component | Dependencies | Used By | Files | Priority |
|-----------|-------------|---------|-------|----------|
| Navbar | Button, Container | All pages except auth | 1 | P1 |
| Footer | Typography, Link | All pages | 1 | P1 |
| Hero | Button, Container, Typography | Landing, Contact | 1 | P1 |
| SectionDivider | Spacer, Typography | Blog, FAQ | 1 | P1 |

**Extraction Method**: Copy from Landing page, parameterize title/content.

### Tier 4: Feature Components (Depends on Tier 1-3)
| Component | Dependencies | Used By | Files | Priority |
|-----------|-------------|---------|-------|----------|
| FeaturesGrid | Card, Container | Landing | 1 | P2 |
| Accordion | Button, Typography | FAQ | 1 | P2 |
| BlogCard | Card, Button, Image | Blog | 1 | P2 |
| FAQItem | Accordion, Typography | FAQ | 1 | P2 |

**Extraction Method**: Identify reusable patterns, create props interface.

---

## 3. Dependency Graph

```
Button ──────────┐
                 │
TextField ───────┤
                 ├──► AuthForm ──────┐
Label ───────────┤                   │
                 │                   ├──► Login Page
PasswordField ───┘                   │
                                     └──► Form validation

Container ───────┐
                 │
Typography ──────┼──► Hero ──────┐
                 │               │
Button ──────────┘               ├──► Landing Page
                                 │
Typography ──────┐               │
                 ├──► FeaturesGrid
Button ──────────┘

Navbar ───────────┐
                  ├──► All Non-Auth Pages
Footer ───────────┘

Spacer ────┐
           ├──► SectionDivider
Typography ┘

Card ──────────────────┐
                       ├──► Blog Page
BlogCard ──────────────┘

Accordion ─┐
           ├──► FAQ Page
Typography ┘
```

---

## 4. Files Changed Per Page

### Landing Page
```
CREATED:
  src/app/page.tsx (250-350 lines)
  
EXTRACTED COMPONENTS:
  src/components/layout/Navbar.tsx (80-120 lines)
  src/components/layout/Hero.tsx (100-150 lines)
  src/components/layout/Footer.tsx (60-100 lines)
  src/components/sections/FeaturesGrid.tsx (80-120 lines)
  src/components/ui/Button.tsx (60-100 lines)
  src/components/ui/Container.tsx (30-50 lines)
  src/components/ui/Typography.tsx (40-80 lines)
  
TOTAL NEW LINES: ~800-1000
TOTAL FILES: 7
```

### Login Page
```
CREATED:
  src/app/(auth)/login/page.tsx (150-200 lines)
  
EXTRACTED COMPONENTS:
  src/components/forms/AuthForm.tsx (120-160 lines)
  src/components/ui/TextField.tsx (80-120 lines)
  src/components/ui/PasswordField.tsx (80-120 lines)
  src/components/ui/Label.tsx (30-50 lines)
  src/components/forms/FormField.tsx (40-60 lines)
  
TOTAL NEW LINES: ~500-700
TOTAL FILES: 5 (some already exist from Landing)
```

### Contact Page
```
CREATED:
  src/app/contact/page.tsx (180-220 lines)
  
EXTRACTED COMPONENTS:
  src/components/forms/ContactForm.tsx (140-180 lines)
  src/components/ui/TextArea.tsx (80-120 lines)
  
TOTAL NEW LINES: ~400-520
TOTAL FILES: 2
```

### Privacy Policy Page
```
CREATED:
  src/app/privacy/page.tsx (100-150 lines)
  
TOTAL NEW LINES: ~100-150
TOTAL FILES: 1
```

### FAQ Page
```
CREATED:
  src/app/faq/page.tsx (200-250 lines)
  
EXTRACTED COMPONENTS:
  src/components/ui/Accordion.tsx (120-160 lines)
  src/components/ui/AccordionItem.tsx (60-80 lines)
  
TOTAL NEW LINES: ~380-490
TOTAL FILES: 3
```

### Blog Insights Page
```
CREATED:
  src/app/blog/page.tsx (220-280 lines)
  
EXTRACTED COMPONENTS:
  src/components/cards/BlogCard.tsx (100-140 lines)
  src/components/sections/BlogGrid.tsx (60-100 lines)
  
TOTAL NEW LINES: ~380-520
TOTAL FILES: 3
```

### About Page (BLOCKED)
```
CREATED:
  src/app/about/page.tsx (TBD - awaiting source)
  
TOTAL FILES: 1+ (depends on unique components)
```

**GRAND TOTAL IMPLEMENTATION**: ~3000-3500 lines of new code, ~26 files

---

## 5. Risks and Mitigation

### Risk 1: About Page Source Missing
**Severity**: Medium
**Impact**: 1 page blocked, 10-15% scope delay
**Mitigation**:
- Proceed with other pages in parallel
- Create placeholder About page with Navbar/Footer
- Implement actual About when source becomes available
- No code changes needed to unblock other pages

### Risk 2: Design Token Accuracy
**Severity**: High
**Impact**: Visual misalignment across all pages
**Mitigation**:
- Use official `design-tokens.json` as single source of truth
- Create token utility file to prevent magic strings
- Run pixel-by-pixel comparison against Stitch screenshots
- Automated visual regression testing for responsive breakpoints

### Risk 3: Form Validation Logic
**Severity**: Medium
**Impact**: Login/Contact forms won't validate submissions
**Mitigation**:
- Backend API routes already exist (Prisma, JWT, validation)
- Forms can be marked as "UI only" until backend integration
- Zod schemas already defined for validation
- Integration can happen post-Phase 2

### Risk 4: Responsive Behavior Misalignment
**Severity**: Medium
**Impact**: Mobile/tablet views don't match design
**Mitigation**:
- Design tokens include responsive breakpoints (375px, 768px, 1024px)
- Test each page on 3 breakpoints as part of DoD
- Use Tailwind responsive prefixes (sm:, md:, lg:)
- Screenshot comparison on each breakpoint

### Risk 5: Image Asset Optimization
**Severity**: Low
**Impact**: Slow page load, LCP issues
**Mitigation**:
- Use Next.js Image component for all img tags
- Lazy load below-fold images
- Responsive srcset generated automatically
- Monitor Web Vitals during testing

### Risk 6: Component Scope Creep
**Severity**: Medium
**Impact**: Extract too many or too few components, refactor later
**Mitigation**:
- Use extraction order in Section 2 as canonical truth
- Code review before component extraction
- Parameterize components strictly to reduce future changes
- Document component props interface

---

## 6. Migration Checklist

### Pre-Implementation
- [ ] All source HTML files extracted to `/mitan-source/`
- [ ] `design-tokens.json` reviewed and validated
- [ ] Design token utility file created (`src/utils/design-tokens.ts`)
- [ ] Tailwind config updated with custom theme (if needed)
- [ ] Current Next.js project backed up
- [ ] Dev environment running without errors

### Per-Page Implementation

**Template Checklist (repeat for each page):**

- [ ] **Source Review**
  - [ ] HTML source copied from mitan-source
  - [ ] All assets identified and copied
  - [ ] Design tokens mapped to HTML classes

- [ ] **Component Extraction**
  - [ ] Atomic components created first
  - [ ] Composite components created second
  - [ ] Layout components extracted
  - [ ] Props interfaces documented

- [ ] **Page Implementation**
  - [ ] Page TSX created with imports
  - [ ] Components integrated
  - [ ] Design tokens applied (no hardcoded colors)
  - [ ] Responsive classes verified

- [ ] **Testing**
  - [ ] Build succeeds (`pnpm build`)
  - [ ] No TypeScript errors
  - [ ] Dev server runs (`pnpm dev`)
  - [ ] Page renders without console errors
  - [ ] Visual comparison: 375px (mobile)
  - [ ] Visual comparison: 768px (tablet)
  - [ ] Visual comparison: 1024px+ (desktop)

- [ ] **Quality Assurance**
  - [ ] Images load correctly
  - [ ] Links work (if applicable)
  - [ ] Buttons hover/active states visible
  - [ ] Form inputs accept text (if form page)
  - [ ] Accessible (keyboard navigation, screen reader)
  - [ ] No console warnings/errors

- [ ] **Integration**
  - [ ] Route added to nav if necessary
  - [ ] Old stub code removed
  - [ ] Component documented in storybook (optional)
  - [ ] Commit to git with clear message

---

## 7. Definition of Done per Page

A page is considered **complete** when:

### Visual Requirements
- [ ] **Pixel Fidelity**: Layout matches Stitch screenshot within 2px tolerance
- [ ] **Colors**: All colors use official design tokens from `design-tokens.json`
- [ ] **Typography**: Font sizes, weights, line heights match design tokens exactly
- [ ] **Spacing**: Padding, margin, gaps use design token scale (no arbitrary values)
- [ ] **Shadows**: If present, use official shadow tokens

### Responsive Requirements
- [ ] **Mobile (375px)**: Stacks vertically, touch targets ≥48px, no horizontal scroll
- [ ] **Tablet (768px)**: Layout adapts appropriately, readable without zoom
- [ ] **Desktop (1024px+)**: Full multi-column layout, proper spacing

### Code Quality
- [ ] **TypeScript**: No `any` types, all props properly typed
- [ ] **Imports**: Only used imports, organized by type (React, components, utils)
- [ ] **Components**: Extracted components are reusable, parameterized with props
- [ ] **Styling**: Uses Tailwind classes exclusively, no inline styles
- [ ] **Accessibility**: ARIA labels where needed, semantic HTML, keyboard accessible

### Testing
- [ ] **Build**: `pnpm build` succeeds with 0 errors
- [ ] **Dev Server**: `pnpm dev` starts, page accessible at correct route
- [ ] **Console**: 0 console errors/warnings
- [ ] **Functionality**: All interactive elements work (buttons click, forms respond)
- [ ] **Visual Regression**: Screenshots match Stitch source on all breakpoints

### Documentation
- [ ] **Page README**: Brief description of page purpose and key components
- [ ] **Component Props**: JSDoc comments on component interfaces
- [ ] **Tokens Used**: List of design tokens applied in page
- [ ] **Dependencies**: List of components used and their sources

### Integration
- [ ] **Navigation**: Page linked from relevant parent/sibling pages
- [ ] **Routing**: Correct route in app structure
- [ ] **No Stubs**: Old placeholder code removed
- [ ] **Git**: Committed with clear message including audit reference

---

## 8. Implementation Sequence Summary

```
WEEK 1:
  MON-WED: Landing page (foundation pattern)
  THU-FRI: Login page (form pattern)

WEEK 2:
  MON-TUE: Contact page (form variant)
  WED:     Privacy page (simple layout)
  THU-FRI: FAQ page (accordion pattern)

WEEK 3:
  MON-WED: Blog Insights (grid/card pattern)
  THU-FRI: Buffer/refinement/testing

WEEK 4:
  MON-WED: About page (if source available) OR
           Extended testing/optimization
```

---

## 9. Success Criteria

Phase 2 is **complete** when:
1. ✓ All 6 pages fully implemented (Landing, Login, Contact, Privacy, FAQ, Blog)
2. ✓ ~15 reusable components extracted and documented
3. ✓ All pages pass visual regression testing on 3 breakpoints
4. ✓ Build succeeds with 0 errors
5. ✓ All pages render correctly on dev server
6. ✓ About page queued for implementation upon source availability
7. ✓ Component library ready for Phase 3 (backend integration)

---

## 10. Tools & Validation

**During Implementation:**
- Use `/mitan-source/` as reference for every page
- Validate colors against `src/constants/design-tokens.json`
- Compare layouts using browser DevTools at breakpoints
- Use Lighthouse for performance metrics

**After Implementation:**
- Run `pnpm build && pnpm lint`
- Visual diff tool: Compare screenshots side-by-side
- Lighthouse audit (target: ≥90 on Performance)
- Accessibility audit (WAVE, axe DevTools)

---

**Ready for Phase 2 implementation upon approval.**
