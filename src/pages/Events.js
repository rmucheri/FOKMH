import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Posters are served statically from `public/events/`. The manifest
// `public/events/events.json` lists each poster. There is NO backend: to
// publish a poster you add its image to that folder and an entry to the
// manifest, then commit and redeploy. See public/events/README.md.
const EVENTS_BASE = `${process.env.PUBLIC_URL}/events`;
const MANIFEST_URL = `${EVENTS_BASE}/events.json`;

// Format a date for display. A date-only string ("YYYY-MM-DD") is parsed as
// UTC midnight by `new Date(...)`, which can shift the displayed day when
// converted to the local timezone. Parse those as a LOCAL date to avoid the
// off-by-one-day issue.
function formatDate(value) {
  if (!value) return "";
  let parsed;
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (match) {
    parsed = new Date(
      Number(match[1]),
      Number(match[2]) - 1,
      Number(match[3])
    );
  } else {
    parsed = new Date(value);
  }
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function Events() {
  const [posters, setPosters] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | error
  const [activePoster, setActivePoster] = useState(null); // poster shown in the lightbox

  // Close the lightbox on Escape, and lock body scroll while it's open.
  useEffect(() => {
    if (!activePoster) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setActivePoster(null);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activePoster]);

  useEffect(() => {
    let active = true;
    fetch(MANIFEST_URL, { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error(`Manifest request failed (${res.status})`);
        return res.json();
      })
      .then((data) => {
        if (!active) return;
        setPosters(Array.isArray(data) ? data : []);
        setStatus("ready");
      })
      .catch(() => {
        if (!active) return;
        setStatus("error");
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero header */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand-teal to-cyan-600 px-4 py-16 text-center text-white sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl">
            Karanda Fundraiser Events
          </h1>
          <p className="text-lg opacity-95 sm:text-xl">
            Posters for upcoming events in support of Karanda Mission Hospital.
          </p>
        </motion.div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        {/* Poster gallery */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Event posters
          </h2>

          {status === "loading" && (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-12 text-center text-gray-600">
              Loading posters…
            </div>
          )}

          {status === "error" && (
            <div
              role="alert"
              className="rounded-2xl border border-orange-300 bg-orange-50 p-8 text-center text-gray-800"
            >
              Couldn't load the events list. Make sure{" "}
              <code>public/events/events.json</code> exists and is valid JSON.
            </div>
          )}

          {status === "ready" && posters.length === 0 && (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-12 text-center text-gray-600">
              No events posted yet. Add one to{" "}
              <code>public/events/events.json</code> and redeploy.
            </div>
          )}

          {status === "ready" && posters.length > 0 && (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posters.map((poster, index) => (
                <motion.div
                  key={`${poster.image}-${index}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
                >
                  <button
                    type="button"
                    onClick={() => setActivePoster(poster)}
                    aria-label={`View ${poster.title || "poster"} full size`}
                    className="block w-full cursor-zoom-in overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
                  >
                    <img
                      src={`${EVENTS_BASE}/${poster.image}`}
                      alt={poster.title || "Event poster"}
                      loading="lazy"
                      className="h-96 w-full max-w-full object-fill transition-transform duration-300 group-hover:scale-105"
                    />
                  </button>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900">
                      {poster.title || "Untitled event"}
                    </h3>
                    {poster.date && (
                      <p className="mt-1 flex items-center gap-1 text-sm text-brand-teal">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {formatDate(poster.date)}
                      </p>
                    )}
                    {poster.description && (
                      <p className="mt-2 text-sm text-gray-600">
                        {poster.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Full-size poster lightbox */}
      <AnimatePresence>
        {activePoster && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${activePoster.title || "Event poster"} full size`}
            onClick={() => setActivePoster(null)}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <button
              type="button"
              onClick={() => setActivePoster(null)}
              aria-label="Close full-size poster"
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-3xl leading-none text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              ✕
            </button>

            <motion.img
              key={activePoster.image}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={`${EVENTS_BASE}/${activePoster.image}`}
              alt={activePoster.title || "Event poster"}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] max-w-[95vw] cursor-zoom-out rounded-lg object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Events;
