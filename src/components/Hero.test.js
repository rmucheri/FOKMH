import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import Hero from "./Hero";

function renderHero() {
  return render(
    <MemoryRouter>
      <Hero />
    </MemoryRouter>
  );
}

describe("Hero content and hierarchy (Requirements 4.1, 4.4)", () => {
  it("renders the headline as the primary heading", () => {
    renderHero();

    const heading = screen.getByRole("heading", {
      name: /Friends of Karanda Mission Hospital/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders the patient-sponsorship subtext", () => {
    renderHero();

    expect(
      screen.getByText(/Patient Sponsorship Program/i)
    ).toBeInTheDocument();
  });
});

describe("Hero navigation destinations (Requirements 7.1, 7.2, 7.3)", () => {
  it('exposes the "Adopt a Patient" link targeting /causes', () => {
    renderHero();

    const adopt = screen.getByRole("link", { name: /Adopt a Patient/i });
    expect(adopt).toBeInTheDocument();
    expect(adopt.getAttribute("href")).toContain("/causes");
  });

  it('exposes the campaign "Learn More" link targeting /fundraising', () => {
    renderHero();

    const learnMore = screen.getByRole("link", { name: /Learn More/i });
    expect(learnMore).toBeInTheDocument();
    expect(learnMore.getAttribute("href")).toContain("/fundraising");
  });

  it('exposes the "More Information" link targeting /about', () => {
    renderHero();

    const moreInfo = screen.getByRole("link", { name: /More Information/i });
    expect(moreInfo).toBeInTheDocument();
    expect(moreInfo.getAttribute("href")).toContain("/about");
  });
});

describe("Hero donation CTA and focus management (Requirements 2.1, 2.5, 6.3)", () => {
  it("opens the DonationModal when the Donate Now button is activated", async () => {
    renderHero();

    // No dialog before the CTA is activated.
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    await userEvent.click(
      screen.getByRole("button", { name: /Donate Now/i })
    );

    const dialog = await screen.findByRole("dialog");
    expect(dialog).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Make a Difference/i })
    ).toBeInTheDocument();
  });

  it('returns focus to the Donate button after closing with "Maybe Later"', async () => {
    renderHero();

    const donate = screen.getByRole("button", { name: /Donate Now/i });
    await userEvent.click(donate);

    await screen.findByRole("dialog");

    await userEvent.click(
      screen.getByRole("button", { name: /Maybe Later/i })
    );

    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    );
    await waitFor(() => expect(donate).toHaveFocus());
  });

  it("returns focus to the Donate button after closing with Escape", async () => {
    renderHero();

    const donate = screen.getByRole("button", { name: /Donate Now/i });
    await userEvent.click(donate);

    await screen.findByRole("dialog");

    await userEvent.keyboard("{Escape}");

    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    );
    await waitFor(() => expect(donate).toHaveFocus());
  });
});

describe("Hero CTA styling tokens (Requirements 6.3, 3.1)", () => {
  it("applies the brand-teal token and a visible focus-ring class to the Donate button", () => {
    // jsdom does not render Tailwind styles or paint focus rings, so we assert
    // the presence of the token/utility classes that produce them at runtime.
    renderHero();

    const donate = screen.getByRole("button", { name: /Donate Now/i });
    expect(donate).toHaveClass("bg-brand-teal");
    expect(donate.className).toMatch(/focus-visible:ring-2/);
  });
});
