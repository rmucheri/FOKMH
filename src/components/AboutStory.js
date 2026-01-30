import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { docTakFull } from "../assets";

const AboutStory = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDonateClick = () => {
    setShowModal(true);
  };

  return (
    <>
      {/* ========== TOP SECTION: HERO + FIGHTING CANCER TOGETHER ========== */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Hero Background Image with Overlay */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://jsh.co.za/wp-content/uploads/2023/10/JSH-OCT-LR-33.jpg')`,
            }}
          />
          {/* Gradient Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
          {/* Additional colored overlay for warmth */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-orange-900/20" />
        </div>

        {/* Floating Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-400/30 to-teal-400/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-orange-400/30 to-pink-400/30 rounded-full blur-3xl" />
        </div>

        {/* MAIN CONTAINER */}
        <div className="relative z-10 container mx-auto px-6 py-20">
          {/* HERO SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 drop-shadow-2xl"
              animate={{
                textShadow: [
                  "0 0 20px rgba(34, 211, 238, 0.5)",
                  "0 0 40px rgba(34, 211, 238, 0.8)",
                  "0 0 20px rgba(34, 211, 238, 0.5)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Our Story of Hope
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="backdrop-blur-md bg-white/10 rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl">
                <p className="text-lg md:text-2xl text-white leading-relaxed font-light">
                  Every patient has a story. Every story matters. At Karanda
                  Mission Hospital, we're committed to writing stories of
                  healing, hope, and transformation.
                </p>

                {/* Hero Call-to-Action */}
                <motion.div
                  className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <motion.button
                    onClick={handleDonateClick}
                    className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[48px] touch-manipulation"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Join Our Mission
                  </motion.button>

                  <motion.button
                    className="w-full sm:w-auto backdrop-blur-md bg-white/15 text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-xl border border-white/40 hover:bg-white/25 transition-all duration-300 min-h-[48px] touch-manipulation"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read More
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* FIGHTING CANCER TOGETHER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 md:mb-12 lg:mb-16"
          >
            <div className="max-w-5xl mx-auto">
              <div className="modern-card p-6 md:p-10 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-center">
                  <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                      Fighting Cancer Together
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                      Cancer doesn't discriminate. It affects people from all
                      walks of life, but in rural Zimbabwe, access to quality
                      cancer care has been limited. That's where we come in.
                    </p>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      Through our "Adopt a Patient" program, we connect generous
                      donors with cancer patients who need support for their
                      treatment journey. Your donation directly impacts a
                      patient's life, providing hope where there was despair.
                    </p>

                    <div className="pt-4 md:pt-6">
                      <motion.button
                        onClick={handleDonateClick}
                        className="w-full sm:w-auto modern-button text-sm md:text-base lg:text-lg py-3 md:py-4 px-5 md:px-6 lg:px-8 min-h-[48px] touch-manipulation flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Learn More About Our Program</span>
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
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
                      </motion.button>
                    </div>
                  </div>

                  <div className="relative lg:col-span-1">
                    <motion.img
                      src={docTakFull}
                      alt="Karanda Mission Hospital"
                      className="rounded-xl shadow-xl w-full h-80 md:h-80 object-cover"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 rounded-3xl blur-xl -z-10" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== BOTTOM SECTION: BE THE CHANGE + OUR IMPACT ========== */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16 md:py-20 lg:py-24">
        <div className=" mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-3xl bg-white shadow-xl border border-gray-100 p-4 sm:p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Be the Change */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7 }}
                  className="h-full"
                >
                  <div className="h-full flex flex-col">
                    <div className="space-y-4 md:space-y-6 flex-1">
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text-secondary">
                        Be the Change in Their World
                      </h2>
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        Your kindness has the power to transform lives, heal
                        hearts, and bring hope where it's needed most. Will you
                        be the light that guides them to recovery?
                      </p>
                    </div>
                    <motion.button
                      onClick={handleDonateClick}
                      className="w-full sm:w-auto modern-button text-sm md:text-base lg:text-lg py-3 md:py-3.5 px-5 md:px-6 lg:px-8 mt-6 self-center sm:self-start min-h-[48px] touch-manipulation flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Sponsor a Patient Today</span>
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 flex-shrink-0"
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
                    </motion.button>
                  </div>
                </motion.div>

                {/* Our Impact */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="h-full"
                >
                  <div className="h-full flex flex-col">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
                      Our Impact
                    </h3>

                    <div className="grid grid-cols-1 gap-4 md:gap-6 flex-1">
                      {[
                        {
                          label: "Patients Helped",
                          description:
                            "Providing care and support to those in need",
                          color: "from-cyan-500 to-cyan-600",
                        },
                        {
                          label: "Success Rate",
                          description: "Committed to positive health outcomes",
                          color: "from-green-500 to-green-600",
                        },
                        {
                          label: "Communities Reached",
                          description: "Expanding our impact across regions",
                          color: "from-orange-500 to-orange-600",
                        },
                      ].map((stat, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center justify-between p-4 md:p-5 bg-slate-50 rounded-xl border border-gray-200 shadow-sm"
                          whileHover={{ x: 4, scale: 1.01 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div>
                            <div className="text-gray-700 font-semibold text-sm md:text-base">
                              {stat.label}
                            </div>
                            <div className="text-gray-500 text-xs md:text-sm mt-1">
                              {stat.description}
                            </div>
                          </div>
                          <svg
                            className="w-6 h-6 text-[#3ea498] flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== DONATION MODAL (shared) ========== */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
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
                      name: "🇺🇸 USA Donations",
                      href: "https://give.team.org/give/672997/#!/donation/checkout",
                      color: "bg-[#3ea498] hover:bg-[#2d8276]",
                    },
                    {
                      name: "🇨🇦 Canada Donations",
                      href: "https://give.ca.team.org/give/673060/#!/donation/checkout",
                      color: "bg-cyan-600 hover:bg-cyan-700",
                    },
                    {
                      name: "🌍 Rest of the World",
                      href: "https://magetsi.co.zw/billers/pay/TVRnPQ/friends-of-karanda-mission-hospital",
                      color: "bg-orange-600 hover:bg-orange-700",
                    },
                  ].map((option) => (
                    <motion.a
                      key={option.name}
                      target="_blank"
                      rel="noreferrer"
                      href={option.href}
                      className={`block w-full py-4 px-6 text-center text-lg font-semibold text-white rounded-xl ${option.color} transition-all duration-200 shadow-md hover:shadow-lg`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {option.name}
                    </motion.a>
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
      </AnimatePresence>
    </>
  );
};

export default AboutStory;
