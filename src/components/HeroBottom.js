import React from "react";
import { motion } from "framer-motion";
import { docTakFull } from "../assets";

function HeroBottom() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#3ea498]/10 to-transparent rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#3ea498]/10 to-transparent rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-6">
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight"
              >
                <span className="text-[#3ea498] block mb-2">
                  Meet Our Heroes
                </span>
                <span className="text-gray-900">Behind the Scenes</span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg text-gray-700 leading-relaxed space-y-4"
              >
                <span className="block">
                  At Karanda Mission Hospital, our dedicated team of doctors,
                  nurses, and hospital staff work tirelessly to provide
                  exceptional care to our cancer patients. Their unwavering
                  commitment and compassion are the driving forces behind our
                  mission to deliver top-notch medical services.
                </span>
              </motion.p>
            </div>

            {/* Team member highlight card */}
            <motion.div
              variants={itemVariants}
              className="relative p-6 md:p-8 bg-gradient-to-br from-[#3ea498]/5 to-transparent border border-[#3ea498]/20 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">👨‍⚕️</div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    Dr. Paul Thistle
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    With 29 years of full-time medical missionary service in
                    Zimbabwe, Paul Thistle's commitment to improving healthcare
                    access in rural areas has earned him widespread respect and
                    admiration. Under his leadership, he has implemented
                    innovative treatments and care protocols, significantly
                    improving patient outcomes.
                  </p>
                  <div className="flex items-center gap-2 text-[#3ea498] font-semibold text-sm pt-2">
                    <span>Healthcare Visionary</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Call to action button */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#3ea498] text-white font-semibold rounded-full hover:bg-[#2c7b72] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn About Our Team
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
            </motion.button>
          </motion.div>

          {/* Image Gallery */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 gap-6 md:gap-8"
          >
            {/* Image 1 */}
            <motion.div
              variants={imageVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                className="w-full h-full object-cover"
                src="https://clubrunner.blob.core.windows.net/00000000662/Images/Rotopics%202019-2020%20by%20Michael/2019-12-16%20xmas%20dinner/Sonosite-2---Mother-and-Baby-and--Scan.jpg"
                alt="Medical care in action"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold text-sm">
                  Healthcare Excellence
                </p>
              </div>
            </motion.div>

            {/* Image 2 */}
            <motion.div
              variants={imageVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-xl mt-6 md:mt-12"
            >
              <img
                className="w-full h-full object-cover"
                src={docTakFull}
                alt="Professional medical team"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold text-sm">
                  Dedicated Professionals
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Impact highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {[
            {
              icon: "🏥",
              title: "Exceptional Care",
              description: "Top-notch medical services for cancer patients",
            },
            {
              icon: "❤️",
              title: "Compassionate Service",
              description: "Unwavering commitment to patient wellbeing",
            },
            {
              icon: "🌟",
              title: "Innovative Treatment",
              description: "Advanced protocols improving patient outcomes",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 md:p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-[#3ea498]/30 transition-all duration-300 text-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default HeroBottom;
