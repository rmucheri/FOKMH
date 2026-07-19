import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { kmhgate } from "../assets";
import DonationModal from "./DonationModal";

const karanda1 =
  "https://images.squarespace-cdn.com/content/v1/6509b098e9ec677d0862ff32/302dbc06-51e9-496e-9845-290226370ad3/DSCF7739.jpg?format=750w";
const karanda2 =
  "https://images.squarespace-cdn.com/content/v1/6509b098e9ec677d0862ff32/a701a090-4ecc-4d3d-8795-de33b253959a/DSCF7726.jpg";
const karanda3 =
  "https://images.squarespace-cdn.com/content/v1/6509b098e9ec677d0862ff32/40471144-1aa4-4551-856e-2b99078c40ac/Nursing+School+3.jpg";
const karanda4 =
  "https://images.squarespace-cdn.com/content/v1/6509b098e9ec677d0862ff32/1695396378380-6SV0BLJZZP5B07WGVHS7/61C83E21-1427-4C39-9096-C82AF10A4769.jpg?format=2500w";
const karanda5 =
  "https://images.squarespace-cdn.com/content/v1/6509b098e9ec677d0862ff32/5b8787f2-2c4d-4d24-bba0-903551ca1f75/DSCF8584.jpg";
const karanda6 =
  "https://images.squarespace-cdn.com/content/v1/6509b098e9ec677d0862ff32/1c811416-d6c4-4b49-80f5-d340616162a1/IMG_7744.JPEG?format=2500w";

const karanda7 = { kmhgate };

const backgroundImage = [
  karanda1,
  karanda2,
  karanda3,
  karanda4,
  karanda5,
  karanda6,
  karanda7,
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * backgroundImage.length);
  return backgroundImage[randomIndex];
};

function Hero() {
  const [bgImage, setBgImage] = useState(getRandomImage());
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const donateButtonRef = useRef(null);

  useEffect(() => {
    setBgImage(getRandomImage());
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-[75vh] overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      >
        {/* Dark overlay tuned for >=4.5:1 (normal) / >=3:1 (large) text
            contrast over any random background image (Reqs 3.4, 6.2, 6.8). */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative flex min-h-[75vh] flex-col items-center justify-center gap-6 px-4 py-12 sm:py-16 max-w-7xl mx-auto">
        {/* Campaign Banner */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-3xl"
        >
          <div className="bg-orange-600 bg-opacity-90 rounded-lg p-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <p className="text-white text-center flex items-center justify-center gap-2">
              <span className="text-lg md:text-2xl">🏥</span>
              <span className="text-xs md:text-2xl">
                Special Campaign: Help us acquire vital medical equipment and
                transport
                <Link
                  to="/fundraising"
                  className="ml-2 inline-flex min-h-[44px] items-center font-bold text-white hover:text-brand-teal underline decoration-2 transition-colors duration-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-600"
                >
                  Learn More →
                </Link>
              </span>
            </p>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center max-w-4xl"
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 sm:mb-6 leading-tight">
            Friends of Karanda Mission Hospital
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-4 sm:mb-6 leading-relaxed">
            Support Life, Inspire Hope: Join Us in the Fight Against Cancer at
            Karanda Mission Hospital in our Patient Sponsorship Program,
          </p>
          <Link
            to="/causes"
            className="inline-flex min-h-[44px] items-center justify-center rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <span className="text-3xl sm:text-4xl font-extrabold text-orange-500 hover:text-orange-400 transition-colors duration-300">
              "Adopt a Patient"
            </span>
          </Link>

          {/* Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 sm:mt-8"
          >
            <button
              ref={donateButtonRef}
              type="button"
              onClick={() => setIsDonationOpen(true)}
              className="w-full sm:w-56 min-h-[44px] px-8 py-4 bg-brand-teal text-white text-lg font-semibold rounded-full
                       hover:bg-brand-teal-dark transition-all duration-300 transform hover:scale-105
                       flex items-center justify-center gap-2 shadow-lg
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Donate Now
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>

            <Link
              to="/about"
              className="w-full sm:w-56 min-h-[44px] px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-full
                       hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105
                       flex items-center justify-center gap-2
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              More Information
            </Link>

            <Link
              to="/events"
              className="w-full animate-bounce sm:w-56 min-h-[44px] px-8 py-4 bg-orange-600 text-white text-lg font-semibold rounded-full
                       hover:bg-orange-700 transition-all duration-300 transform hover:scale-105
                       flex items-center justify-center gap-2 shadow-lg
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Events
              <svg
                className="w-5 h-5"
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
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>

      {/* Accessible regional donation dialog */}
      <DonationModal
        open={isDonationOpen}
        onClose={() => setIsDonationOpen(false)}
        returnFocusRef={donateButtonRef}
      />
    </motion.div>
  );
}

export default Hero;
