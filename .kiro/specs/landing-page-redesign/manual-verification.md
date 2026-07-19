# Manual Verification Checklist: Landing Page Redesign

## Why this checklist exists

The automated test suite runs in **jsdom**, which does **not** compute real layout
(box geometry, viewport-relative positioning) or perform any painting (colors,
compositing, overlay blending). As a result, the automated tests can only assert
**structural facts** — that the right utility/token classes are applied, that the
overlay opacity is fixed (`bg-black/60`), that headings use the expected weight/size
tokens, and that images carry `max-w-full`.

The **measured** values behind several acceptance criteria — pixel positions,
element gaps in CSS pixels, reflow timing, and computed color-contrast ratios — can
only be confirmed by rendering the page in a real browser. This document captures
those criteria so they can be checked manually before shipping.

Covers: **Requirements 3.4, 4.1, 4.2, 5.3, 5.5, 6.2, 6.3, 6.8**.

---

## How to run the checks

1. Start the app from the project root:

   ```bash
   npm start
   ```

2. Open the served URL (default `http://localhost:3000`) in Chrome (or any
   Chromium-based browser).
3. Open DevTools (`F12`), then toggle the **device toolbar / responsive mode**
   (`Ctrl+Shift+M`).
4. Set the viewport to each listed width using the responsive-mode width field and
   perform the checks in each section below.

### Suggested tools

- **Browser DevTools responsive mode** — set exact viewport widths and observe reflow.
- **Browser DevTools contrast checker** — in the Elements panel, click the color
  swatch next to a `color` declaration to see the computed contrast ratio and
  AA/AAA pass indicators.
- **axe DevTools extension** — run a full-page accessibility scan for contrast and
  related violations.
- **DevTools "Inspect" + box model** — measure gaps between adjacent sections.

---

## 1. Above-the-fold visibility (Reqs 4.1, 4.4)

At each viewport width, confirm the following are **fully visible within the initial
viewport without scrolling**:

At **320px** width:
- [ ] Headline "Friends of Karanda Mission Hospital" is visible above the fold.
- [ ] Headline is the largest text in the Hero section.
- [ ] "Donate Now" CTA is fully visible above the fold.
- [ ] Patient-sponsorship subtext is visible above the fold.
- [ ] "Adopt a Patient" link is visible above the fold.

At **375px** width:
- [ ] Headline "Friends of Karanda Mission Hospital" is visible above the fold.
- [ ] "Donate Now" CTA is fully visible above the fold.
- [ ] Patient-sponsorship subtext and "Adopt a Patient" link are visible above the fold.

At **768px** width:
- [ ] Headline "Friends of Karanda Mission Hospital" is visible above the fold.
- [ ] "Donate Now" CTA is fully visible above the fold.
- [ ] Patient-sponsorship subtext and "Adopt a Patient" link are visible above the fold.

At **1280px** width:
- [ ] Headline "Friends of Karanda Mission Hospital" is visible above the fold.
- [ ] "Donate Now" CTA is fully visible above the fold.
- [ ] Patient-sponsorship subtext and "Adopt a Patient" link are visible above the fold.

---

## 2. Inter-section spacing and no overlap (Req 4.2)

Measure the vertical gap between each pair of adjacent Section_Components (Hero →
Feature → Features → Payment → HeroBottom → KarandaVid → Partner) using the DevTools
box model.

On **mobile** (viewport `< 768px`, e.g. check at 375px):
- [ ] Every adjacent section pair has a vertical gap of **≥ 32 CSS pixels**.
- [ ] No adjacent sections visually overlap.

On **desktop** (viewport `≥ 768px`, e.g. check at 1280px):
- [ ] Every adjacent section pair has a vertical gap of **≥ 48 CSS pixels**.
- [ ] No adjacent sections visually overlap.

---

## 3. Reflow and no horizontal scrolling (Reqs 5.3, 5.5)

- [ ] Dragging the responsive-mode width handle from **320px up to 3840px** produces
      no horizontal scrollbar at any width.
- [ ] Content reflows to fit the available width within roughly **200ms** of a
      resize (no visible lag or clipped content while resizing).
- [ ] All text and CTA labels remain fully visible (not truncated or clipped) across
      the full width range.
- [ ] Images never exceed the viewport width at any width in the range (they scale
      down rather than causing overflow).
- [ ] Spot-check the boundary widths 320px, 767px, 768px, 1280px, 1920px, and 3840px
      individually for the above.

---

## 4. Color contrast ratios (Reqs 3.4, 6.2, 6.3, 6.8)

Because the Hero background image is randomized, contrast must be verified against
**each candidate background image**. The overlay is fixed at `bg-black/60`, but the
resulting measured ratio still depends on the underlying image.

Hero overlaid text (over the `bg-black/60` overlay), checked against **each** random
background image:
- [ ] Normal-size overlaid text meets **≥ 4.5:1** contrast.
- [ ] Large-scale overlaid text (≥ 18pt, or ≥ 14pt bold) meets **≥ 3:1** contrast.
- [ ] Reload several times (or force each image) to confirm the ratio holds for every
      background image in the rotation.

Body and heading text across all sections:
- [ ] Normal-size body text meets **≥ 4.5:1** contrast against its background (Req 6.2).
- [ ] Large-scale text meets **≥ 3:1** contrast against its background (Req 6.8).

Focus indicators (tab through every CTA with the keyboard):
- [ ] Each interactive CTA shows a visible focus indicator on keyboard focus.
- [ ] Each focus indicator has **≥ 3:1** contrast against its adjacent colors (Req 6.3).

Tooling check:
- [ ] Run an **axe DevTools** full-page scan and confirm no color-contrast violations
      are reported.

---

## Sign-off

- [ ] All checks above pass in a real browser.
- Verified by: ______________________
- Date: ______________________
- Browser / version: ______________________
