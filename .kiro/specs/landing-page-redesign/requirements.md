# Requirements Document

## Introduction

This feature covers two related changes to the "Friends of Karanda Mission Hospital" web application. First, the auto-launching "Land Cruiser" campaign popup that appears every time the landing page loads will be removed so it no longer interrupts visitors on arrival. Second, the landing page will be redesigned to feel more modern and user-friendly while preserving the existing color palette (teal `#3ea498`, cyan-600, orange-500/600 accents, dark image overlays, and white text) and keeping all existing donation functionality intact.

The landing page (`Home.js`) is composed of the following section components rendered in order: Hero, Feature, Features, Payment, HeroBottom, KarandaVid, and Partner. The redesign focuses on improving layout, spacing, typography, visual hierarchy, responsiveness, accessibility, and interaction quality across these sections without altering the underlying donation destinations or campaign links.

## Glossary

- **Landing_Page**: The home page of the application rendered by `src/pages/Home.js`, including all of its section components.
- **Campaign_Popup**: The auto-launching modal component (`src/components/CampaignPopup.js`) promoting the Land Cruiser campaign that currently opens automatically when the Landing_Page loads.
- **Hero_Section**: The top section of the Landing_Page rendered by `src/components/Hero.js`, containing the background image, campaign banner, headline, subheadline, and primary call-to-action buttons.
- **Donation_Modal**: The dialog opened from the Hero_Section "Donate Now" button that presents regional donation links (USA, Canada, Rest of World).
- **Donation_Links**: The external URLs for USA, Canada, and international/Rest-of-World donations currently used by the Donation_Modal.
- **Color_Palette**: The existing set of brand colors: teal `#3ea498`, cyan-600, orange-500 and orange-600 accents, dark black-opacity image overlays, and white/light text.
- **CTA**: A call-to-action element (button or link) that directs a Visitor toward a primary action such as donating or learning more.
- **Visitor**: Any person viewing the Landing_Page in a web browser.
- **Section_Component**: One of the ordered content components composing the Landing_Page: Hero, Feature, Features, Payment, HeroBottom, KarandaVid, Partner.

## Requirements

### Requirement 1: Remove the auto-launching campaign popup

**User Story:** As a Visitor, I want to view the landing page without an interrupting popup on arrival, so that I can explore the content immediately.

#### Acceptance Criteria

1. WHEN the Landing_Page completes its initial load, THE Landing_Page SHALL display its content without rendering the Campaign_Popup.
2. WHEN the Landing_Page completes its initial load, THE Landing_Page SHALL render all remaining Section_Components in their existing order: Hero, Feature, Features, Payment, HeroBottom, KarandaVid, Partner.
3. WHILE no Visitor-initiated trigger has fired, THE Landing_Page SHALL keep the Campaign_Popup absent from the rendered output for the full duration of the session, including any time-delayed or timer-based appearance, verifiable over an observation window of at least 5 seconds after load.
4. WHERE the Campaign_Popup component is no longer referenced by any component, THE codebase SHALL exclude the unused Campaign_Popup import from the Landing_Page.
5. WHERE a Visitor-initiated trigger such as a button or timer is added in the future, THE Landing_Page MAY display the Campaign_Popup in response to that trigger.

### Requirement 2: Preserve donation functionality

**User Story:** As a Visitor, I want to donate through the same regional options as before, so that I can contribute using my preferred region.

#### Acceptance Criteria

1. WHEN a Visitor activates the primary donation CTA in the Hero_Section, THE Hero_Section SHALL open the Donation_Modal within 500 milliseconds.
2. WHILE the Donation_Modal is open, THE Donation_Modal SHALL present exactly three donation options — one for the USA region, one for the Canada region, and one for the Rest-of-World region — each activatable without scrolling at a viewport width of 320px or greater.
3. WHEN a Visitor selects a regional donation option, THE Donation_Modal SHALL open the corresponding Donation_Link in a new browser tab and remain open on the Landing_Page tab.
4. THE Donation_Links SHALL match, character for character, the destination URLs used before the redesign for USA, Canada, and Rest-of-World donations.
5. WHEN a Visitor activates the Donation_Modal close control, THE Donation_Modal SHALL close and return focus to the primary donation CTA that opened it.
6. IF the browser blocks the new tab when a Visitor selects a regional donation option, THEN THE Donation_Modal SHALL remain open and display an indication that the donation page could not be opened.

### Requirement 3: Preserve the existing color palette

**User Story:** As a brand owner, I want the redesigned landing page to keep the current brand colors, so that the site remains visually consistent with the organization's identity.

#### Acceptance Criteria

1. THE Landing_Page SHALL apply teal `#3ea498` as the fill color of all primary CTAs and primary brand accents.
2. THE Landing_Page SHALL apply cyan-600 to secondary elements and orange-500/orange-600 to highlight elements.
3. THE Color_Palette SHALL consist solely of the following brand colors: teal `#3ea498`, cyan-600, orange-500, orange-600, and dark black-opacity overlays.
4. WHERE hero background imagery displays overlaid text, THE Landing_Page SHALL apply a dark overlay sufficient to achieve a text-to-background contrast ratio of at least 4.5:1 for normal-size text and at least 3:1 for large-scale text.
5. IF a brand color outside the enumerated Color_Palette is applied to any element, THEN it SHALL be considered a violation of this requirement; neutral colors such as white, black, and grays used for text, backgrounds, and borders are permitted.

### Requirement 4: Modernize the landing page layout and visual hierarchy

**User Story:** As a Visitor, I want a modern, clear landing page, so that I can quickly understand the mission and how to help.

#### Acceptance Criteria

1. WHEN the Landing_Page completes its initial load, THE Hero_Section SHALL render the primary headline at the largest text size within the Hero_Section and display the primary donation CTA fully within the initial viewport.
2. THE Landing_Page SHALL apply vertical spacing between adjacent Section_Components of at least 32 CSS pixels while the viewport width is below 768px and at least 48 CSS pixels while the viewport width is 768px or greater, with no visual overlap between adjacent sections.
3. THE Landing_Page SHALL render heading text at a size at least 1.5 times the body text size, subheading text at a size between the body and heading sizes, heading font weight of at least 600, and body font weight of at most 400.
4. WHEN the Landing_Page completes its initial load, THE Hero_Section SHALL display, above the fold, the headline "Friends of Karanda Mission Hospital", visible text describing the patient sponsorship program, and the "Adopt a Patient" link.

### Requirement 5: Responsive presentation across screen sizes

**User Story:** As a Visitor on any device, I want the landing page to adapt to my screen, so that I can read and interact with it comfortably.

#### Acceptance Criteria

1. WHILE the viewport width is between 320px and 767px inclusive (mobile size), THE Landing_Page SHALL present all Section_Component content in a single-column layout with the document width not exceeding the viewport width and no horizontal scrolling.
2. WHILE the viewport width is 768px or greater (desktop size), THE Landing_Page SHALL present each Section_Component using two or more columns where designated as multi-column, with total content width not exceeding the viewport width and no horizontal scrolling.
3. WHEN the viewport is resized to any width between 320px and 3840px inclusive, THE Landing_Page SHALL reflow content within 200 milliseconds to fit the available width, keeping all text and CTA labels fully visible and producing no horizontal scrolling.
4. WHILE the viewport width is between 320px and 767px inclusive (mobile size), THE Landing_Page SHALL render each interactive CTA with a touch target of at least 44 by 44 CSS pixels.
5. WHILE the viewport width is between 320px and 767px inclusive (mobile size), THE Landing_Page SHALL scale images and media within each Section_Component so that their rendered width does not exceed the viewport width.

### Requirement 6: Accessible and user-friendly interactions

**User Story:** As a Visitor using assistive technology or a keyboard, I want the landing page to be operable and understandable, so that I can navigate and donate without barriers.

#### Acceptance Criteria

1. THE Landing_Page SHALL provide text alternatives that convey the purpose or content of each informative image.
2. THE Landing_Page SHALL render normal-size text (below 18pt, or below 14pt bold) and its background with a contrast ratio of at least 4.5:1.
3. WHEN a Visitor navigates the Landing_Page using a keyboard, THE Landing_Page SHALL expose a visible focus indicator on each interactive CTA with a contrast ratio of at least 3:1 against adjacent colors.
4. WHEN a Visitor activates any CTA using the keyboard Enter key or Space key, THE Landing_Page SHALL perform the same action as a pointer activation.
5. WHILE the Donation_Modal is open, THE Donation_Modal SHALL confine keyboard focus to the elements within the Donation_Modal.
6. WHEN a Visitor presses the Escape key while the Donation_Modal is open, THE Donation_Modal SHALL close and return focus to the CTA that opened it.
7. THE Landing_Page SHALL provide an empty text alternative for decorative images.
8. THE Landing_Page SHALL render large-scale text (at least 18pt, or at least 14pt bold) and its background with a contrast ratio of at least 3:1.

### Requirement 7: Preserve navigation and campaign entry points

**User Story:** As a Visitor, I want to still reach the campaign and informational pages from the landing page, so that I can learn more before donating.

#### Acceptance Criteria

1. THE Hero_Section SHALL display a visible, activatable link, with an accessible name identifying the fundraising campaign, that targets the fundraising campaign page.
2. THE Hero_Section SHALL display a visible, activatable link with the accessible name "More Information" that targets the about page.
3. THE Hero_Section SHALL display a visible, activatable link with the accessible name "Adopt a Patient" that targets the causes page.
4. WHEN a Visitor activates a navigation link in the Hero_Section, THE Hero_Section SHALL load the link's existing destination route and render its primary content within 3 seconds.
5. IF a link's intended destination route is unavailable, THEN THE Hero_Section SHALL navigate to the fundraising campaign page and display a message indicating the requested destination was unavailable.
