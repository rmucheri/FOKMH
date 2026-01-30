import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Gallery() {
  const data = [
    {
      imgelink:
        "https://images.squarespace-cdn.com/content/v1/6509b098e9ec677d0862ff32/302dbc06-51e9-496e-9845-290226370ad3/DSCF7739.jpg?format=750w",
    },
    {
      imgelink:
        "https://images.squarespace-cdn.com/content/v1/6509b098e9ec677d0862ff32/a701a090-4ecc-4d3d-8795-de33b253959a/DSCF7726.jpg",
    },
    {
      imgelink:
        "https://images.squarespace-cdn.com/content/v1/6509b098e9ec677d0862ff32/40471144-1aa4-4551-856e-2b99078c40ac/Nursing+School+3.jpg",
    },
    {
      imgelink:
        "https://images.squarespace-cdn.com/content/v1/6509b098e9ec677d0862ff32/1695396378380-6SV0BLJZZP5B07WGVHS7/61C83E21-1427-4C39-9096-C82AF10A4769.jpg?format=2500w",
    },
    {
      imgelink:
        "https://images.squarespace-cdn.com/content/v1/6509b098e9ec677d0862ff32/5b8787f2-2c4d-4d24-bba0-903551ca1f75/DSCF8584.jpg",
    },
    {
      imgelink:
        "https://images.squarespace-cdn.com/content/v1/6509b098e9ec677d0862ff32/1c811416-d6c4-4b49-80f5-d340616162a1/IMG_7744.JPEG?format=2500w",
    },
  ];

  const [active, setActive] = React.useState(data[0].imgelink);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="gallery"
      className="relative py-4 md:py-8 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#3ea498]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#3ea498]/5 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#3ea498]">Gallery</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Moments of hope and healing from Karanda Mission Hospital
          </p>
        </motion.div>

        {/* Main Gallery Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6 md:space-y-8"
        >
          {/* Main Image Display */}
          <motion.div
            variants={itemVariants}
            className="relative group overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={active}
                alt="Gallery main view"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="w-full h-auto md:h-[500px] lg:h-[600px] object-cover"
              />
            </AnimatePresence>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Thumbnail Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4"
          >
            {data.map(({ imgelink }, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActive(imgelink)}
                className="group relative overflow-hidden rounded-xl md:rounded-2xl cursor-pointer"
              >
                <motion.img
                  src={imgelink}
                  alt={`Gallery thumbnail ${index + 1}`}
                  className={`h-32 sm:h-40 md:h-44 w-full object-cover transition-all duration-300 ${
                    active === imgelink
                      ? "ring-2 md:ring-4 ring-[#3ea498]"
                      : "ring-1 ring-gray-200"
                  } group-hover:scale-110`}
                  whileHover={{ scale: 1.05 }}
                />

                {/* Overlay effect on hover */}
                <div
                  className={`absolute inset-0 transition-all duration-300 ${
                    active === imgelink
                      ? "bg-[#3ea498]/20"
                      : "bg-black/0 group-hover:bg-black/10"
                  }`}
                />

                {/* Active indicator */}
                {active === imgelink && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 border-2 md:border-4 border-[#3ea498] rounded-xl md:rounded-2xl"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}

                {/* Checkmark for active */}
                {active === imgelink && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-2 right-2 w-6 h-6 bg-[#3ea498] rounded-full flex items-center justify-center"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Image counter */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-2 text-sm md:text-base text-gray-600"
          >
            <span className="font-semibold text-[#3ea498]">
              {data.findIndex((img) => img.imgelink === active) + 1}
            </span>
            <span>/</span>
            <span>{data.length}</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
