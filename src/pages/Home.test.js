import React from "react";
import fs from "fs";
import path from "path";
import { render, screen, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Home from "./Home";

function renderHome() {
  return render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
}

// Text that is unique to the Campaign_Popup (Land Cruiser) content. If any of
// these appear, the auto-launching popup has leaked back into the page.
const POPUP_TITLE = /Land Cruiser for Medical Outreach/i;
const POPUP_SUBTEXT = /Help us reach more patients with our Land Cruiser/i;

describe("Home popup removal (Requirements 1.1, 1.3, 1.4)", () => {
  it("does not render Campaign_Popup content on initial load", () => {
    renderHome();

    // Req 1.1: the Land Cruiser popup content must be absent immediately.
    expect(screen.queryByText(POPUP_TITLE)).toBeNull();
    expect(screen.queryByText(POPUP_SUBTEXT)).toBeNull();
    // No modal dialog should have auto-opened either.
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("keeps the Campaign_Popup absent after a >=5s observation window", () => {
    // Req 1.3: no time-delayed / timer-based appearance within 5s of load.
    jest.useFakeTimers();
    try {
      renderHome();

      expect(screen.queryByText(POPUP_TITLE)).toBeNull();

      act(() => {
        jest.advanceTimersByTime(6000);
      });

      expect(screen.queryByText(POPUP_TITLE)).toBeNull();
      expect(screen.queryByText(POPUP_SUBTEXT)).toBeNull();
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    } finally {
      jest.useRealTimers();
    }
  });

  it("no longer imports CampaignPopup in Home.js (Req 1.4)", () => {
    const source = fs.readFileSync(path.resolve(__dirname, "Home.js"), "utf8");
    expect(source).not.toMatch(/CampaignPopup/);
  });
});

describe("Home renders all seven Section_Components (Requirements 1.1, 1.2)", () => {
  it("renders distinctive content from the Hero and remaining sections", () => {
    renderHome();

    // Hero_Section — headline is the primary heading.
    expect(
      screen.getByRole("heading", {
        name: /Friends of Karanda Mission Hospital/i,
      })
    ).toBeInTheDocument();

    // Feature — intro headline.
    expect(screen.getByText(/Transforming Lives Through/i)).toBeInTheDocument();

    // Features — contributions section heading.
    expect(
      screen.getByText(/Highlights of Your Contributions/i)
    ).toBeInTheDocument();

    // HeroBottom — "Meet Our Heroes" heading.
    expect(screen.getByText(/Meet Our Heroes/i)).toBeInTheDocument();

    // KarandaVid — distinctive supporting copy.
    expect(
      screen.getByText(/Discover the stories of hope and healing/i)
    ).toBeInTheDocument();

    // Partner — "Trusted Partners" heading.
    expect(screen.getByText(/Trusted Partners/i)).toBeInTheDocument();
  });
});
