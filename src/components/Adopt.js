import React from "react";
import { motion } from "framer-motion";

function Adopt() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      className="relative py-16 md:py-24 bg-white overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#3ea498]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#3ea498]/5 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-20"
        >
          {/* Title */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="text-[#3ea498]">Adopt a Patient</span>
              <br />
              <span className="text-2xl md:text-3xl">
                Transform a Life Today
              </span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="p-6 md:p-8 bg-gradient-to-br from-[#3ea498]/5 to-transparent border border-[#3ea498]/20 rounded-2xl">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                At Karanda Mission Hospital, every contribution, no matter the
                size, brings hope and healing to those in urgent need of medical
                care. Through our{" "}
                <span className="font-semibold text-[#3ea498]">
                  "Adopt a Patient"
                </span>{" "}
                appeal, your donation helps support patients facing
                life-threatening illnesses like cancer. While we're not asking
                you to shoulder the full cost of treatment, your generosity will
                go a long way in covering vital aspects of care, ensuring that
                no patient is left behind. Together, we can make a meaningful
                impact—adopt a patient today and be the reason someone gets a
                second chance at life.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            {
              icon: "💉",
              title: "Patient Consultation and Diagnostic Tests",
              amount: "$40 USD",
              description:
                "Help patients receive a thorough medical consultation and essential diagnostic tests to determine their path to recovery.",
            },
            {
              icon: "🔬",
              title: "Biopsy",
              amount: "$70 USD",
              description:
                "Fund this critical procedure that helps detect cancer and guide effective treatment plans for those in need.",
            },
            {
              icon: "💊",
              title: "Medicines",
              amount: "$10 USD",
              description:
                "Provide essential medications to alleviate pain and manage symptoms for patients on their healing journey.",
            },
            {
              icon: "🏥",
              title: "Inpatient Bed (One Night)",
              amount: "$10 USD",
              description:
                "Ensure a safe and comfortable stay for patients receiving life-saving treatment at the hospital.",
            },
            {
              icon: "⚕️",
              title: "Cycle of Chemotherapy for a Cancer Patient",
              amount: "$150 USD",
              description:
                "Give a cancer patient a fighting chance with a complete cycle of chemotherapy treatment.",
            },
            {
              icon: "🏨",
              title: "Major Cancer Operation",
              amount: "$700 USD",
              description:
                "Cover the cost of life-changing surgeries (Hysterectomy/Mastectomy) that can save patients from advanced stages of cancer.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(62, 164, 152, 0.2)",
              }}
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#3ea498]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="relative z-10 text-5xl mb-4">{item.icon}</div>

              {/* Amount Badge */}
              <div className="relative z-10 inline-block mb-4">
                <span className="px-4 py-2 bg-gradient-to-r from-[#3ea498]/20 to-cyan-400/20 text-[#3ea498] font-bold rounded-full text-sm md:text-base border border-[#3ea498]/30">
                  {item.amount}
                </span>
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-lg md:text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-sm md:text-base text-gray-600 leading-relaxed">
                {item.description}
              </p>

              {/* Bottom accent line */}
              <div className="relative z-10 mt-6 h-1 w-12 bg-gradient-to-r from-[#3ea498] to-cyan-400 group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 md:mt-20 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-[#3ea498] to-cyan-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Adopt a Patient Now
          </motion.button>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Every donation makes a difference in someone's life
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Adopt;
