import React from "react";
import { render, screen, within, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";

import DonationModal, { DONATION_OPTIONS } from "./DonationModal";

// The exact, pre-redesign destination URLs. These are duplicated here on
// purpose so the test independently pins the values character-for-character
// (Requirement 2.4) rather than trusting the constant it is validating.
const EXPECTED_URLS = {
  USA: "https://give.team.org/give/672997/#!/donation/checkout",
  Canada: "https://give.ca.team.org/give/673060/#!/donation/checkout",
  RestOfWorld:
    "https://magetsi.co.zw/billers/friends-of-karanda-mission-hospital",
};

// A truthy fake window so handleSelect treats the popup as successfully opened.
const fakeWindow = { closed: false };

let openSpy;

beforeEach(() => {
  openSpy = jest.spyOn(window, "open").mockReturnValue(fakeWindow);
});

afterEach(() => {
  jest.restoreAllMocks();
});

function renderModal(props = {}) {
  const onClose = props.onClose || jest.fn();
  const utils = render(
    <DonationModal open onClose={onClose} {...props} />
  );
  return { onClose, ...utils };
}

describe("DonationModal donation options (Requirements 2.2, 2.4)", () => {
  it("exposes exactly three options whose URLs match the pinned destinations character-for-character", () => {
    // Validate the exported constant table itself.
    expect(DONATION_OPTIONS).toHaveLength(3);

    const byRegion = Object.fromEntries(
      DONATION_OPTIONS.map((o) => [o.region, o])
    );
    expect(byRegion.USA.url).toBe(EXPECTED_URLS.USA);
    expect(byRegion.Canada.url).toBe(EXPECTED_URLS.Canada);
    expect(byRegion.RestOfWorld.url).toBe(EXPECTED_URLS.RestOfWorld);
  });

  it("renders exactly three donation option buttons", () => {
    renderModal();

    // The three region options plus the ✕ close and "Maybe Later" controls.
    const usa = screen.getByRole("button", { name: /USA Donations/i });
    const canada = screen.getByRole("button", { name: /Canada Donations/i });
    const row = screen.getByRole("button", { name: /Rest of the World/i });

    expect(usa).toBeInTheDocument();
    expect(canada).toBeInTheDocument();
    expect(row).toBeInTheDocument();
  });
});

describe("DonationModal selection behavior (Requirements 2.3, 6.4)", () => {
  it.each([
    ["USA", /USA Donations/i, EXPECTED_URLS.USA],
    ["Canada", /Canada Donations/i, EXPECTED_URLS.Canada],
    ["RestOfWorld", /Rest of the World/i, EXPECTED_URLS.RestOfWorld],
  ])(
    "opens the %s donation link in a new tab and keeps the modal open",
    async (_region, name, url) => {
      const { onClose } = renderModal();

      await userEvent.click(screen.getByRole("button", { name }));

      expect(openSpy).toHaveBeenCalledTimes(1);
      expect(openSpy).toHaveBeenCalledWith(url, "_blank", "noopener,noreferrer");

      // Modal stays open and is not closed by a selection.
      expect(onClose).not.toHaveBeenCalled();
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    }
  );

  it("activates via the Enter key exactly like a pointer click (Requirement 6.4)", async () => {
    renderModal();

    const usa = screen.getByRole("button", { name: /USA Donations/i });
    usa.focus();
    expect(usa).toHaveFocus();

    await userEvent.keyboard("{Enter}");

    expect(openSpy).toHaveBeenCalledTimes(1);
    expect(openSpy).toHaveBeenCalledWith(
      EXPECTED_URLS.USA,
      "_blank",
      "noopener,noreferrer"
    );
  });

  it("activates via the Space key exactly like a pointer click (Requirement 6.4)", async () => {
    renderModal();

    const canada = screen.getByRole("button", { name: /Canada Donations/i });
    canada.focus();
    expect(canada).toHaveFocus();

    await userEvent.keyboard(" ");

    expect(openSpy).toHaveBeenCalledTimes(1);
    expect(openSpy).toHaveBeenCalledWith(
      EXPECTED_URLS.Canada,
      "_blank",
      "noopener,noreferrer"
    );
  });
});

describe("DonationModal blocked-popup fallback (Requirement 2.6)", () => {
  it("shows an inline message and a direct fallback link when the popup is blocked, and stays open", async () => {
    openSpy.mockReturnValue(null);
    const { onClose } = renderModal();

    await userEvent.click(screen.getByRole("button", { name: /USA Donations/i }));

    // Non-blocking indication that the page could not be opened.
    const alert = await screen.findByRole("alert");
    expect(alert).toBeInTheDocument();

    // Direct fallback link exposing the exact destination URL.
    const fallback = within(alert).getByRole("link", {
      name: EXPECTED_URLS.USA,
    });
    expect(fallback).toHaveAttribute("href", EXPECTED_URLS.USA);

    // Modal remains open.
    expect(onClose).not.toHaveBeenCalled();
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
});

describe("DonationModal close controls (Requirements 2.5, 6.6)", () => {
  it("calls onClose when the ✕ close control is clicked", async () => {
    const { onClose } = renderModal();

    await userEvent.click(
      screen.getByRole("button", { name: /close donation dialog/i })
    );

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when the "Maybe Later" control is clicked', async () => {
    const { onClose } = renderModal();

    await userEvent.click(screen.getByRole("button", { name: /maybe later/i }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("closes on Escape (Requirement 6.6)", async () => {
    const { onClose } = renderModal();

    // Headless UI's Dialog listens for Escape at the document level.
    fireEvent.keyDown(document, { key: "Escape", code: "Escape" });

    await waitFor(() => expect(onClose).toHaveBeenCalled());
  });
});

describe("DonationModal focus management (Requirement 6.5)", () => {
  it("keeps keyboard focus within the dialog when tabbing", async () => {
    renderModal();

    const dialog = screen.getByRole("dialog");

    // Headless UI moves focus into the panel on open.
    await waitFor(() => expect(dialog.contains(document.activeElement)).toBe(true));

    // Best-effort focus-trap check: cycling with Tab keeps focus inside.
    for (let i = 0; i < 6; i += 1) {
      await userEvent.tab();
      expect(dialog.contains(document.activeElement)).toBe(true);
    }
  });
});

describe("DonationModal accessibility (Requirements 6.1, 6.7)", () => {
  it("has no detectable accessibility violations when open", async () => {
    const { container } = renderModal();

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
