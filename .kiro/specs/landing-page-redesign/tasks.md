# Implementation Plan: Landing Page Redesign

## Overview

This plan implements two related changes to the FOKMH React app: removing the auto-launching Campaign_Popup from the Landing_Page, and modernizing the Landing_Page (layout, spacing, typography, hierarchy, responsiveness, accessibility, interaction) while preserving the Color_Palette and every donation and campaign destination.

Implementation language/stack: **JavaScript (React 18, CRA)** with Tailwind (`@material-tailwind/react`), `@headlessui/react` Dialog, `framer-motion`, and `react-router-dom` v6. Testing uses the existing CRA Jest + React Testing Library + `user-event`, plus `jest-axe` for accessibility assertions and Jest snapshots. Per the design's testing strategy, this feature is **not** applicable to property-based testing; all tests are example/interaction/snapshot based. Contrast and pixel-dependent criteria are covered by a manual verification checklist.

Tasks build incrementally: shared tokens and routing first, then the modal, then the Hero that consumes the modal, then the Home wiring that removes the popup, then section refinement, and finally test consolidation.

## Tasks

- [x] 1. Standardize the brand palette
  - [x] 1.1 Add brand palette tokens and gradient utility to `tailwind.config.js`
    - Add `theme.extend.colors.brand.teal` (`#3ea498`) and `brand.teal-dark` (`#2d8276`) as the single canonical hover shade (replacing `#2c7b72`)
    - Add `theme.extend.backgroundImage["brand-gradient"]` (`linear-gradient(to right, #3ea498, #0891b2)`) to replace the undefined `bg-gradient-primary` / `bg-gradient-secondary`
    - Keep the enumerated palette limited to `brand-teal`, `cyan-600`, `orange-500`, `orange-600`, and dark black-opacity overlays; neutrals remain permitted
    - _Requirements: 3.1, 3.2, 3.3, 3.5_

- [x] 2. Build the accessible DonationModal
  - [x] 2.1 Create `src/components/DonationModal.js` on the Headless UI `Dialog`
    - Implement `DonationModal({ open, onClose, returnFocusRef })` using `Dialog` for focus trap, Escape-to-close, focus return, scroll lock, and `role="dialog"`/`aria-modal`; wire the title via `Dialog.Title`
    - Define the `DONATION_OPTIONS` constant with the three regions and the exact URLs (USA `https://give.team.org/give/672997/#!/donation/checkout`, Canada `https://give.ca.team.org/give/673060/#!/donation/checkout`, Rest of World `https://magetsi.co.zw/billers/friends-of-karanda-mission-hospital`), preserved character-for-character
    - Render exactly three options in a single-column stack activatable without scrolling at ≥320px, using palette token color classes
    - On selection call `window.open(url, "_blank", "noopener,noreferrer")`, keep the modal open, and if the return value is `null`/immediately-closed show an inline non-blocking popup-blocked message with a direct fallback link
    - Provide `✕` and "Maybe Later" close controls that call `onClose`; ensure native `<a>`/`<button>` semantics so Enter/Space match pointer activation; respect `prefers-reduced-motion` for enter/leave animation
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 6.4, 6.5, 6.6_

  - [x] 2.2 Write DonationModal interaction and accessibility tests
    - Assert exactly three options with the exact Donation_Links (character-for-character against the constant table); selecting an option calls mocked `window.open` with the correct URL and `_blank` and the modal stays open; `window.open` returning `null` shows the blocked-popup message; Escape and close controls call `onClose`; Tab cycling stays within the modal; Enter and Space activate identically to click
    - Add a `jest-axe` check for role/name/alt violations
    - _Requirements: 2.2, 2.3, 2.4, 2.5, 2.6, 6.1, 6.4, 6.5, 6.6, 6.7_

- [x] 3. Modernize the Hero_Section
  - [x] 3.1 Update `src/components/Hero.js`
    - Add `isDonationOpen` state and a `donateButtonRef`; render `<DonationModal open onClose returnFocusRef={donateButtonRef} />` and open it from the primary "Donate Now" CTA (teal token)
    - Remove over-large arbitrary margins (e.g. `mt-60`) and apply responsive spacing tokens so the headline "Friends of Karanda Mission Hospital" (largest text in the section), patient-sponsorship subtext, "Adopt a Patient" link, and Donate CTA are all above the fold at 320px+
    - Migrate internal `<a href="/...">` to react-router `Link`/`useNavigate` for campaign → `/fundraising`, "More Information" → `/about`, "Adopt a Patient" → `/causes`
    - Add visible `focus-visible:ring-2 ring-offset-2` focus rings (≥3:1) and ≥44×44px touch targets to every CTA; fix the overlay at `bg-black/60` for contrast over the random background image
    - Replace inline `#3ea498`/`#2d8276` with `brand-teal`/`brand-teal-dark` tokens
    - _Requirements: 2.1, 3.1, 3.4, 4.1, 4.4, 5.4, 6.2, 6.3, 6.8, 7.1, 7.2, 7.3_

  - [x] 3.2 Write Hero content, navigation, and focus tests
    - Assert the headline, patient-sponsorship text, and "Adopt a Patient" link are present; links expose accessible names targeting `/fundraising`, `/about`, `/causes`; activating the Donate CTA opens the modal and focus returns to the Donate button on close; CTAs carry the `brand-teal` token and visible focus-ring classes
    - _Requirements: 2.1, 2.5, 4.1, 4.4, 6.3, 7.1, 7.2, 7.3_

- [x] 4. Add routing fallback
  - [x] 4.1 Update `src/App.js` routing and add `NotFoundRedirect`
    - Normalize `path="fundraising"` to `path="/fundraising"`
    - Add a catch-all `<Route path="*" element={<NotFoundRedirect />} />` where `NotFoundRedirect` navigates to `/fundraising` and surfaces a message that the requested destination was unavailable
    - _Requirements: 7.4, 7.5_

  - [x] 4.2 Write routing fallback tests
    - Using `MemoryRouter` at a bogus path, assert the fallback lands on `/fundraising` and shows the unavailable-destination message; assert `/fundraising` resolves correctly
    - _Requirements: 7.4, 7.5_

- [x] 5. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 6. Remove the auto-launching popup and standardize page rhythm
  - [x] 6.1 Remove `CampaignPopup` from `src/pages/Home.js`
    - Delete the `import CampaignPopup` and its `<CampaignPopup />` usage (retain the component file for future Visitor-initiated triggers)
    - Replace the undefined `bg-gradient-primary` root class with a neutral page background and the `bg-gradient-secondary` accent with the defined `bg-brand-gradient` (or remove if the wrapped section renders no content)
    - Keep all seven Section_Components rendered in order: Hero, Feature, Features, Payment, HeroBottom, KarandaVid, Partner
    - _Requirements: 1.1, 1.2, 1.4_

  - [x] 6.2 Standardize inter-section vertical rhythm in `src/pages/Home.js`
    - Apply a shared spacing wrapper so adjacent sections have ≥32px gap on mobile and ≥48px on desktop with no overlap
    - _Requirements: 4.2_

  - [x] 6.3 Write popup-removal and section-order tests
    - Assert rendering `Home` does not render Campaign_Popup content immediately and after advancing fake timers ≥5s; assert all seven Section_Components render in order; assert `Home.js` no longer imports `CampaignPopup`
    - _Requirements: 1.1, 1.2, 1.3, 1.4_

- [x] 7. Refine the remaining Section_Components
  - [x] 7.1 Update Feature, Features, Payment, HeroBottom, KarandaVid, and Partner
    - Swap inline `#3ea498`/`#2d8276`/`#2c7b72` for `brand-teal`/`brand-teal-dark` tokens
    - Ensure headings ≥1.5× body size with heading weight ≥600 and body weight ≤400; single-column at <768px and multi-column where designated at ≥768px; images `max-w-full` so nothing exceeds viewport width
    - Add `alt` text to informative images and `alt=""` to decorative images
    - _Requirements: 3.1, 3.3, 4.3, 5.1, 5.2, 5.5, 6.1, 6.7_

  - [x] 7.2 Write palette-usage and alt-text tests
    - Assert primary CTAs carry the `brand-teal` token class and that no component references teal shades other than the two canonical tokens (static/grep assertion for stray `#2c7b72`/`#3ea498` arbitrary values); assert informative images expose non-empty `alt`
    - _Requirements: 3.1, 3.3, 3.5, 6.1, 6.7_

- [x] 8. Consolidate the test suite and verification aids
  - [x] 8.1 Replace the obsolete `src/App.test.js` and add `jest-axe`
    - Remove the CRA "learn react link" placeholder test and add a basic app smoke test; add `jest-axe` as a dev dependency and wire `toHaveNoViolations` in the test setup
    - _Requirements: 6.1_

  - [x] 8.2 Add Hero and DonationModal snapshot tests
    - Add Jest snapshot tests for `Hero` and `DonationModal` to catch unintended layout/markup regressions
    - _Requirements: 4.1, 4.4, 5.1, 5.2_

  - [x] 8.3 Create the manual verification checklist
    - Add a `manual-verification.md` checklist in the spec folder covering above-the-fold visibility of headline + Donate CTA at 320px+, inter-section spacing thresholds and no overlap, reflow within 200ms and no horizontal scroll across 320–3840px, and contrast ratios for overlaid/body text — documenting the jsdom pixel/contrast limitations
    - _Requirements: 3.4, 4.1, 4.2, 5.3, 6.2, 6.8_

- [x] 9. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional test/verification sub-tasks and can be skipped for a faster MVP.
- Each task references specific requirement sub-clauses for traceability.
- This feature is not applicable to property-based testing (UI rendering, layout, contrast, fixed navigation/donation destinations, and keyboard/focus interactions); all tests are example/interaction/snapshot based, with a manual checklist for pixel- and contrast-dependent criteria.
- The `CampaignPopup.js` file is intentionally retained (unreferenced) to support a future Visitor-initiated trigger (Requirement 1.5).

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "4.1", "8.1"] },
    { "id": 1, "tasks": ["2.1", "7.1"] },
    { "id": 2, "tasks": ["2.2", "3.1", "4.2", "7.2"] },
    { "id": 3, "tasks": ["3.2", "6.1", "8.2"] },
    { "id": 4, "tasks": ["6.2", "6.3", "8.3"] }
  ]
}
```
