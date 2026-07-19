import React from "react";
import { render, screen, act } from "@testing-library/react";
import App from "./App";

// App hardcodes its own <BrowserRouter>, which reads the current jsdom
// location. Rather than reconstructing the route table (NotFoundRedirect is
// defined inline in App.js and is not exported), we drive routing by setting
// window.history before rendering the real <App />. This exercises the exact
// production route table, including the catch-all fallback.
describe("App routing fallback", () => {
  const originalPath =
    window.location.pathname + window.location.search + window.location.hash;

  afterEach(() => {
    // Restore the location so tests remain independent.
    window.history.pushState({}, "", originalPath);
  });

  // Requirement 7.5: an unavailable destination surfaces a message and offers a
  // path to the fundraising campaign page.
  test("a bogus route shows the unavailable-destination message", () => {
    window.history.pushState({}, "", "/this-route-does-not-exist");

    render(<App />);

    const alert = screen.getByRole("alert");
    expect(alert).toHaveTextContent("The page you requested was unavailable.");
  });

  // Requirement 7.5: the fallback also exposes an immediate, activatable link
  // to the fundraising campaign as a manual escape hatch.
  test("the fallback offers a link to the fundraising campaign", () => {
    window.history.pushState({}, "", "/another-missing-page");

    render(<App />);

    const fallbackLink = screen.getByRole("link", {
      name: /fundraising campaign/i,
    });
    expect(fallbackLink).toHaveAttribute("href", "/fundraising");
  });

  // Requirement 7.5: after the redirect delay the visitor lands on the
  // fundraising campaign page automatically.
  test("a bogus route redirects to the fundraising campaign after the delay", () => {
    jest.useFakeTimers();
    try {
      window.history.pushState({}, "", "/yet-another-missing-page");

      render(<App />);

      // Confirm we start on the fallback screen, not the campaign page.
      expect(screen.getByRole("alert")).toBeInTheDocument();

      // Advance past the ~2.5s redirect timer.
      act(() => {
        jest.advanceTimersByTime(2600);
      });

      // The campaign page content is now rendered.
      expect(
        screen.getByText(/Ongoing fundraising campaign/i)
      ).toBeInTheDocument();
      expect(screen.getAllByText(/Land Cruiser/i).length).toBeGreaterThan(0);
    } finally {
      jest.useRealTimers();
    }
  });

  // Requirement 7.4: the /fundraising route resolves to the campaign page and
  // renders its primary content.
  test("/fundraising resolves to the campaign page", () => {
    window.history.pushState({}, "", "/fundraising");

    render(<App />);

    expect(
      screen.getByText(/Ongoing fundraising campaign/i)
    ).toBeInTheDocument();
    expect(screen.getAllByText(/Land Cruiser/i).length).toBeGreaterThan(0);
    // The fallback message must NOT be present on a valid route.
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });
});
