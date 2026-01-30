import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Parallax } from "react-parallax";
import { kmhgate } from "../assets";

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
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setBgImage(getRandomImage());
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-[75vh] overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-[0px]" />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 max-w-7xl mx-auto">
        {/* Campaign Banner */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-3xl mb-8"
        >
          <div className="bg-orange-600 md:mt-2 mt-60 bg-opacity-90 rounded-lg p-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <p className="text-white text-lg text-center flex items-center justify-center gap-2">
              <span className="text-lg md:text-2xl">🏥</span>
              <span className="text-xs md:text-2xl">
                Special Campaign: Help us acquire vital medical equipment and
                transport
                <a
                  href="/fundraising"
                  className="ml-2 font-bold text-white hover:text-[#3ea498] underline decoration-2 transition-colors duration-300"
                >
                  Learn More →
                </a>
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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            Friends of Karanda Mission Hospital
          </h1>

          <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
            Support Life, Inspire Hope: Join Us in the Fight Against Cancer at
            Karanda Mission Hospital in our Patient Sponsorship Program,
            <a href="/causes" className="block mt-4">
              <span className="text-4xl font-extrabold text-orange-500 hover:text-orange-400 transition-colors duration-300">
                "Adopt a Patient"
              </span>
            </a>
          </p>

          {/* Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <button
              onClick={() => setShowModal(true)}
              className="px-8 py-4 bg-[#3ea498] text-white text-lg font-semibold rounded-full 
                       hover:bg-orange-600 transition-all duration-300 transform hover:scale-105
                       flex items-center gap-2 shadow-lg"
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

            <a
              href="/about"
              className="px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-full
                       hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              More Information
            </a>
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

      {/* Modal - Same as before */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[99998] backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden"
          >
            {/* Header with Gradient */}
            <div className="bg-gradient-to-r from-[#3ea498] to-cyan-600 px-8 py-12 text-white text-center relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-2xl hover:text-gray-200 transition-colors"
              >
                ✕
              </button>
              <h2 className="text-4xl font-bold mb-2">Make a Difference</h2>
              <p className="text-lg opacity-95">
                Choose how you'd like to support us
              </p>
            </div>

            {/* Content */}
            <div className="p-8 space-y-6">
              <div className="space-y-3">
                {[
                  {
                    text: "🇺🇸 USA Donations",
                    href: "https://give.team.org/give/672997/#!/donation/checkout",
                    color: "bg-[#3ea498] hover:bg-[#2d8276]",
                  },
                  {
                    text: "🇨🇦 Canada Donations",
                    href: "https://give.ca.team.org/give/673060/#!/donation/checkout",
                    color: "bg-cyan-600 hover:bg-cyan-700",
                  },
                  {
                    text: "🌍 Rest of the World",
                    href: "https://magetsi.co.zw/billers/pay/TVRnPQ/friends-of-karanda-mission-hospital",
                    color: "bg-orange-600 hover:bg-orange-700",
                  },
                ].map((button, index) => (
                  <a
                    key={index}
                    target="_blank"
                    rel="noreferrer"
                    href={button.href}
                    className={`block w-full py-4 px-6 text-center text-lg font-semibold text-white rounded-xl ${button.color} transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105`}
                  >
                    {button.text}
                  </a>
                ))}
              </div>

              {/* Trust Badge */}
              <div className="text-center text-sm text-gray-600 pt-4 border-t">
                <p>🔒 Secure donations · 100% transparent · Direct impact</p>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-8 py-6 text-center border-t">
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-600 hover:text-gray-900 font-semibold transition-colors"
              >
                Maybe Later
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Hero;
