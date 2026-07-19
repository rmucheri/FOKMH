import React, { useEffect, useRef, useState } from "react";
import { Dialog } from "@headlessui/react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * @typedef {{ region: "USA" | "Canada" | "RestOfWorld", label: string, url: string, colorClass: string }} DonationOption
 */

/**
 * Regional donation destinations. URLs must match, character-for-character, the
 * destinations used before the redesign (Requirement 2.4).
 * @type {DonationOption[]}
 */
export const DONATION_OPTIONS = [
  {
    region: "USA",
    label: "🇺🇸 USA Donations",
    url: "https://give.team.org/give/672997/#!/donation/checkout",
    colorClass: "bg-brand-teal hover:bg-brand-teal-dark",
  },
  {
    region: "Canada",
    label: "🇨🇦 Canada Donations",
    url: "https://give.ca.team.org/give/673060/#!/donation/checkout",
    colorClass: "bg-cyan-600 hover:bg-cyan-700",
  },
  {
    region: "RestOfWorld",
    label: "🌍 Rest of the World",
    url: "https://magetsi.co.zw/billers/friends-of-karanda-mission-hospital",
    colorClass: "bg-orange-600 hover:bg-orange-700",
  },
];

/**
 * Accessible regional donation dialog built on the Headless UI `Dialog`
 * primitive, which supplies the focus trap, Escape-to-close, focus return,
 * scroll lock, and `role="dialog"` / `aria-modal` semantics. Headless UI mounts
 * and unmounts the dialog based on the `open` prop. The panel uses a plain
 * enter animation via framer-motion that respects `prefers-reduced-motion`.
 *
 * @param {object} props
 * @param {boolean} props.open Whether the modal is visible.
 * @param {() => void} props.onClose Called on close (backdrop click, Escape, close/Maybe-Later controls).
 * @param {React.RefObject<HTMLElement>} [props.returnFocusRef] Element to receive focus when the modal closes.
 */
function DonationModal({ open, onClose, returnFocusRef }) {
  const prefersReducedMotion = useReducedMotion();
  // Tracks the URL that failed to open in a new tab so we can surface a
  // non-blocking fallback link (Requirement 2.6). `null` means no block.
  const [blockedUrl, setBlockedUrl] = useState(null);
  // Tracks the previous open state so we can restore focus on close as an
  // explicit safeguard in addition to Headless UI's built-in focus return.
  const wasOpenRef = useRef(false);

  // Clear any stale popup-blocked message whenever the modal is (re)opened.
  useEffect(() => {
    if (open) {
      setBlockedUrl(null);
    }
  }, [open]);

  // Explicit focus return to the opener (Requirements 2.5, 6.6). Headless UI
  // already restores focus to the previously-focused element; this honours an
  // explicitly provided ref as a safeguard.
  useEffect(() => {
    if (wasOpenRef.current && !open && returnFocusRef && returnFocusRef.current) {
      returnFocusRef.current.focus();
    }
    wasOpenRef.current = open;
  }, [open, returnFocusRef]);

  const handleSelect = (url) => {
    // Programmatic open lets us inspect the return value for popup-block
    // detection (Requirement 2.6). The modal stays open regardless.
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      setBlockedUrl(url);
    } else {
      setBlockedUrl(null);
    }
  };

  // Reduced-motion users get an instant, motion-free entrance. A plain (non-exit)
  // enter animation is safe under Headless UI v2 since we no longer rely on
  // `static` / `AnimatePresence` unmount handling.
  const panelMotion = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.2 },
      };

  return (
    <Dialog open={open} onClose={onClose} className="relative z-[99998]">
      {/* Backdrop */}
      <div
        aria-hidden="true"
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel
          as={motion.div}
          {...panelMotion}
          className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl"
        >
          {/* Header with teal -> cyan gradient (palette-consistent) */}
          <div className="relative bg-gradient-to-r from-brand-teal to-cyan-600 px-8 py-12 text-center text-white">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close donation dialog"
              className="absolute right-4 top-4 rounded-full p-1 text-2xl leading-none transition-colors hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-teal"
            >
              ✕
            </button>
            <Dialog.Title className="mb-2 text-4xl font-bold">
              Make a Difference
            </Dialog.Title>
            <Dialog.Description className="text-lg opacity-95">
              Choose how you'd like to support us
            </Dialog.Description>
          </div>

          {/* Options: single-column stack, activatable without scrolling at >=320px */}
          <div className="space-y-6 p-8">
            <div className="flex flex-col space-y-3">
              {DONATION_OPTIONS.map((option) => (
                <button
                  key={option.region}
                  type="button"
                  onClick={() => handleSelect(option.url)}
                  className={`block min-h-[44px] w-full rounded-xl px-6 py-4 text-center text-lg font-semibold text-white shadow-md transition-all duration-200 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${option.colorClass}`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {/* Non-blocking popup-blocked message with a direct fallback link */}
            {blockedUrl && (
              <div
                role="alert"
                className="rounded-lg border border-orange-300 bg-orange-50 p-4 text-sm text-gray-800"
              >
                <p className="mb-2">
                  We couldn't open the donation page — please allow pop-ups,
                  or use this link:
                </p>
                <a
                  href={blockedUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-brand-teal underline decoration-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
                >
                  {blockedUrl}
                </a>
              </div>
            )}

            {/* Trust Badge */}
            <div className="border-t pt-4 text-center text-sm text-gray-600">
              <p>🔒 Secure donations · 100% transparent · Direct impact</p>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t bg-gray-50 px-8 py-6 text-center">
            <button
              type="button"
              onClick={onClose}
              className="rounded font-semibold text-gray-600 transition-colors hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
            >
              Maybe Later
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default DonationModal;
