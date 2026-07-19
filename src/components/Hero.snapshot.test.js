import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Hero from "./Hero";

// Snapshot test to catch unintended layout/markup regressions in the Hero
// section (Requirements 4.1, 4.4). Hero uses react-router `Link`, so it must be
// wrapped in a router. Hero also picks a RANDOM background image on mount, which
// would make the snapshot non-deterministic; pin `Math.random` to a fixed value
// so the chosen image (and therefore the markup) is stable, then restore it.
describe("Hero snapshot", () => {
  let randomSpy;

  beforeEach(() => {
    randomSpy = jest.spyOn(Math, "random").mockReturnValue(0);
  });

  afterEach(() => {
    randomSpy.mockRestore();
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
