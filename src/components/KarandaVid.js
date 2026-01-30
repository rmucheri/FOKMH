import React from "react";
import { motion } from "framer-motion";

function KarandaVid() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative py-12 md:py-20 lg:py-28 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
      <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-[#3ea498]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-tr from-[#3ea498]/5 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-[#3ea498]">Watch</span> Our Impact in Action
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the stories of hope and healing happening at Karanda
            Mission Hospital
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
          {/* Gradient border effect */}
          <div className="absolute -inset-2 md:-inset-3 bg-gradient-to-r from-[#3ea498] via-cyan-500 to-[#3ea498] rounded-2xl md:rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />

          {/* Video frame */}
          <div className="relative bg-black rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl group">
            {/* Play button overlay (optional) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer border border-white/30"
              >
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </motion.div>
            </div>

            {/* Responsive iframe wrapper */}
            <div className="relative w-full pb-[56.25%] h-0 overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full border-0"
                src="https://www.youtube.com/embed/FJmkXMFt7I8?si=Eszwt96NPqLeYzOF"
                title="Karanda Mission Hospital - Our Impact"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>

        {/* Additional info below video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {[
            {
              icon: "🎬",
              title: "Real Stories",
              description: "Authentic testimonies of healing and hope",
            },
            {
              icon: "🌍",
              title: "Global Impact",
              description: "Making a difference in healthcare worldwide",
            },
            {
              icon: "💪",
              title: "Community Strength",
              description: "Together we are stronger and unstoppable",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ duration: 0.3 }}
              className="p-6 md:p-8 bg-white rounded-xl md:rounded-2xl shadow-lg border border-gray-100 hover:border-[#3ea498]/30 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default KarandaVid;
