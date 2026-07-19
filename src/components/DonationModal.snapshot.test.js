import React from "react";
import { render } from "@testing-library/react";

import DonationModal from "./DonationModal";

// Snapshot test to catch unintended layout/markup regressions in the modal
// (Requirements 5.1, 5.2). The modal renders no random content, so its markup
// is deterministic when opened.
describe("DonationModal snapshot", () => {
  it("matches the snapshot when open", () => {
    const { asFragment } = render(
      <DonationModal open={true} onClose={() => {}} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
