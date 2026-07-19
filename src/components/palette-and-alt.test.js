import fs from "fs";
import path from "path";
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Partner from "./Partner";

/**
 * Task 7.2 — palette-usage and alt-text tests.
 *
 * These tests protect the palette-standardization work (Task 7.1) and the
 * image-accessibility work by:
 *   1. Statically scanning refined component source files to prove no stray
 *      arbitrary teal hex values or arbitrary-value teal classes remain — every
 *      teal reference must flow through the canonical `brand-teal` /
 *      `brand-teal-dark` tokens (Requirements 3.1, 3.3, 3.5).
 *   2. Confirming `tailwind.config.js` still defines the two canonical brand
 *      teal tokens (Requirement 3.5).
 *   3. Rendering the Partner section to confirm informative logo images expose
 *      non-empty alt text while decorative marquee duplicates use empty alt
 *      (Requirements 6.1, 6.7).
 */

// The refined Section_Components that must be free of stray teal literals.
const REFINED_COMPONENTS = [
  "Feature.js",
  "HeroBottom.js",
  "KarandaVid.js",
  "Partner.js",
  "Hero.js",
  "DonationModal.js",
];

const readComponentSource = (fileName) =>
  fs.readFileSync(path.join(__dirname, fileName), "utf8");

const readTailwindConfig = () =>
  fs.readFileSync(path.join(__dirname, "..", "..", "tailwind.config.js"), "utf8");

describe("palette usage (static source assertions)", () => {
  // Requirement 3.3 / 3.5: the old non-canonical hover shade must be gone.
  test.each(REFINED_COMPONENTS)(
    "%s contains no stray #2c7b72 teal literal",
    (fileName) => {
      const source = readComponentSource(fileName);
      expect(source).not.toMatch(/#2c7b72/i);
    }
  );

  // Requirement 3.1 / 3.5: teal must be applied via the `brand-teal` token, not
  // Tailwind arbitrary-value classes like `bg-[#3ea498]` / `text-[#3ea498]`.
  test.each(REFINED_COMPONENTS)(
    "%s uses no arbitrary-value teal class [#3ea498]",
    (fileName) => {
      const source = readComponentSource(fileName);
      expect(source).not.toMatch(/\[#3ea498\]/i);
    }
  );

  // Requirement 3.5: the dark hover shade must be applied via `brand-teal-dark`,
  // never as an inline literal or arbitrary-value class.
  test.each(REFINED_COMPONENTS)(
    "%s contains no stray #2d8276 teal-dark literal",
    (fileName) => {
      const source = readComponentSource(fileName);
      expect(source).not.toMatch(/#2d8276/);
    }
  );

  // Requirement 3.1: refined components should reference the canonical token.
  // (Guards against a component dropping teal styling entirely during refactor.)
  test.each(REFINED_COMPONENTS)(
    "%s references the canonical brand-teal token",
    (fileName) => {
      const source = readComponentSource(fileName);
      expect(source).toMatch(/brand-teal/);
    }
  );
});

describe("tailwind palette tokens", () => {
  // Requirement 3.5: the two canonical teal tokens are defined once, in config.
  test("tailwind.config.js defines the brand teal tokens", () => {
    const config = readTailwindConfig();

    // Both canonical hex values are present.
    expect(config).toMatch(/#3ea498/i);
    expect(config).toMatch(/#2d8276/i);

    // They live inside a `brand` color block with `teal` / `teal-dark` keys.
    const brandBlock = config.match(/brand\s*:\s*\{[\s\S]*?\}/);
    expect(brandBlock).not.toBeNull();
    expect(brandBlock[0]).toMatch(/teal\s*:\s*["']#3ea498["']/i);
    expect(brandBlock[0]).toMatch(/["']teal-dark["']\s*:\s*["']#2d8276["']/i);
  });
});

describe("Partner section image alt text", () => {
  // Partner uses plain <a href> (no router Link), but wrap in MemoryRouter for
  // resilience against future Link usage.
  const renderPartner = () =>
    render(
      <MemoryRouter>
        <Partner />
      </MemoryRouter>
    );

  // Requirement 6.1: informative logo images expose a non-empty text
  // alternative. The visible (non-aria-hidden) marquee row carries real names.
  test("informative logo images expose non-empty alt text", () => {
    renderPartner();

    const images = screen.getAllByRole("img");
    // getAllByRole("img") excludes images with alt="" (they have no accessible
    // role/name), so every returned image must have a meaningful name.
    expect(images.length).toBeGreaterThan(0);
    images.forEach((img) => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")).not.toBe("");
    });

    // Spot-check that a known informative partner name is exposed.
    expect(
      screen.getAllByAltText(/Karanda Mission Hospital/i).length
    ).toBeGreaterThan(0);
  });

  // Requirement 6.7: decorative duplicate images (inside the aria-hidden
  // marquee clone) provide an empty text alternative so assistive tech skips
  // them. Query the raw DOM since alt="" images are absent from the img role.
  test("no informative <img> is missing its alt attribute, decorative use alt=''", () => {
    const { container } = renderPartner();

    const allImgs = Array.from(container.querySelectorAll("img"));
    expect(allImgs.length).toBeGreaterThan(0);

    // Every <img> must declare an alt attribute (informative or empty-decorative).
    allImgs.forEach((img) => {
      expect(img.hasAttribute("alt")).toBe(true);
    });

    // Some images are decorative duplicates with empty alt...
    const decorative = allImgs.filter((img) => img.getAttribute("alt") === "");
    expect(decorative.length).toBeGreaterThan(0);

    // ...and some are informative with non-empty alt.
    const informative = allImgs.filter(
      (img) => (img.getAttribute("alt") || "") !== ""
    );
    expect(informative.length).toBeGreaterThan(0);
  });
});
