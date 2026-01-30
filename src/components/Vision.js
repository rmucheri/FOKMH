import React from "react";
import { motion } from "framer-motion";

function Vision() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div id="mission-vision" className="mt-10">
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-white via-[#fffffd] to-white py-16 md:py-24 overflow-hidden"
      >
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#3ea498]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-400/5 to-transparent rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl text-center font-bold text-gray-900 mb-4"
          >
            Our <span className="text-[#3ea498]">Vision & Values</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-lg text-gray-600 mb-16 max-w-3xl mx-auto"
          >
            Guided by our commitment to excellence, transparency, and
            compassionate care
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                icon: "🏥",
                title: "Mission",
                description:
                  "To raise funds and secure resources to support economically disadvantaged cancer patients, ensuring they have access to affordable and high-quality treatment at Karanda Mission Hospital. We aim to alleviate the financial burden of cancer care, providing comprehensive support that encompasses medical, emotional, and logistical assistance to those in need.",
              },
              {
                icon: "💝",
                title: "Values",
                description:
                  "We are committed to compassion, integrity, and excellence, ensuring accessible and empathetic cancer care for all. Our dedication to community, innovation, and sustainability enhances our impact, while respect and empowerment guide our interactions. Above all, we foster hope, providing emotional and psychological support to inspire recovery and positive outcomes.",
              },
              {
                icon: "👁️",
                title: "Vision",
                description:
                  "To ensure every economically disadvantaged cancer patient receives the necessary support and access to affordable, quality treatment at Karanda Mission Hospital, fostering hope and health in our community. We envision a future where no one is denied life-saving cancer care due to financial constraints, and where Karanda Mission Hospital serves as a beacon of hope, healing, and excellence in cancer treatment.",
              },
              {
                icon: "📋",
                title: "Stewardship and Accountability",
                description:
                  "Every dollar donated to FOKMH is treated with the highest standards of stewardship and accountability. Our financial practices are guided by rigorous internal controls and oversight to ensure that funds are used effectively towards advancing healthcare services and improving the lives of those in need.",
              },
              {
                icon: "⚖️",
                title: "Commitment to Integrity",
                description:
                  "Integrity forms the cornerstone of our operations. We adhere strictly to ethical guidelines and best practices in fundraising and financial management, striving to earn and maintain the trust of our donors and partners.",
              },
              {
                icon: "🤝",
                title: "Your Partner in Making a Difference",
                description:
                  "When you choose to support FOKMH, you are choosing a partner dedicated to making a meaningful impact through transparent stewardship of funds. Together, we can continue to empower Karanda Mission Hospital in delivering vital healthcare services to communities in Zimbabwe and beyond.",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(62, 164, 152, 0.15)",
                }}
                className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 p-8"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#3ea498]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="relative z-10 w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#3ea498]/20 to-cyan-400/20 group-hover:from-[#3ea498]/30 group-hover:to-cyan-400/30 transition-all duration-300 mb-5 text-3xl">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-xl font-bold text-gray-900 mb-3 group-hover:text-[#3ea498] transition-colors duration-300">
                  {card.title}
                </h3>

                {/* Accent line */}
                <div className="relative z-10 w-12 h-1 bg-gradient-to-r from-[#3ea498] to-cyan-400 mb-4 group-hover:w-16 transition-all duration-300" />

                {/* Description */}
                <p className="relative z-10 text-sm text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default Vision;
