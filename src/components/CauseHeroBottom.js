import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Botton";
import finreport from "../assets/images/finreport.jpg";
import laptopaccount from "../assets/images/laptopaccount.jpg";
import hospital from "../assets/images/hospital.jpg";
import docnurse from "../assets/images/docnurse.jpg";
import doctacktalk from "../assets/images/doctacktalk.jpg";
import hosfrtdesk from "../assets/images/hosfrtdesk.jpg";

function CauseHeroBottom() {
  const [showModal, setShowModal] = useState(false);

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const features = [
    {
      icon: "💰",
      title: "Managing Your Funds with Trust and Transparency",
      description:
        "At Friends of Karanda Mission Hospital (FOKMH), we prioritize the responsible management and safeguarding of every contribution entrusted to us. Whether from individual donors, corporations, or other organizations, we ensure that every donation is directed with utmost care and accountability.",
      image: finreport,
    },
    {
      icon: "🔐",
      title: "Secure Channels and Partnerships",
      description:
        "FOKMH channels all contributions directly to the Karanda Mission Hospital account through trusted partnerships with Magetsi or The Evangelical Alliance Mission (TEAM). These partnerships are established to guarantee secure and efficient transfer of funds, maintaining a clear audit trail for transparency and accountability.",
      image: laptopaccount,
    },
    {
      icon: "📊",
      title: "Transparency through Reporting",
      description:
        "We are committed to transparency. Through our official website, FOKMH provides comprehensive and accessible reports detailing how donor funds are utilized. These reports offer clear insights into the impact of contributions, showcasing the tangible difference made in supporting healthcare initiatives at Karanda Mission Hospital.",
      image: hospital,
    },
    {
      icon: "📋",
      title: "Stewardship and Accountability",
      description:
        "Every dollar donated to FOKMH is treated with the highest standards of stewardship and accountability. Our financial practices are guided by rigorous internal controls and oversight to ensure that funds are used effectively towards advancing healthcare services and improving the lives of those in need.",
      image: docnurse,
    },
    {
      icon: "⚖️",
      title: "Commitment to Integrity",
      description:
        "Integrity forms the cornerstone of our operations. We adhere strictly to ethical guidelines and best practices in fundraising and financial management, striving to earn and maintain the trust of our donors and partners.",
      image: doctacktalk,
    },
    {
      icon: "🤝",
      title: "Your Partner in Making a Difference",
      description:
        "When you choose to support FOKMH, you are choosing a partner dedicated to making a meaningful impact through transparent stewardship of funds. Together, we can continue to empower Karanda Mission Hospital in delivering vital healthcare services to communities in Zimbabwe and beyond.",
      image: hosfrtdesk,
    },
  ];

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative py-16 md:py-24 bg-gradient-to-br from-white to-[#f8fffe] overflow-hidden"
      >
        {/* Decorative background elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-bl from-[#3ea498]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-400/5 to-transparent rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="text-[#3ea498]">Trust & Transparency</span>
              <br />
              <span className="text-2xl md:text-3xl font-semibold text-gray-600">
                Your Donations Make a Difference
              </span>
            </h2>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              100% Accountable - Every donation tracked and reported
              transparently
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-16"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants} className="group">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}
                >
                  {/* Image Section */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`relative overflow-hidden rounded-2xl shadow-xl ${index % 2 !== 0 ? "lg:order-2" : ""}`}
                  >
                    <img
                      alt={feature.title}
                      className="object-cover object-center h-96 w-full group-hover:brightness-110 transition-all duration-500"
                      src={feature.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3ea498]/40 via-transparent to-transparent" />

                    {/* Icon Badge Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute top-6 right-6 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden text-4xl"
                    >
                      {feature.icon}
                    </motion.div>
                  </motion.div>

                  {/* Content Section */}
                  <motion.div
                    className={`space-y-6 ${index % 2 !== 0 ? "lg:order-1" : ""}`}
                  >
                    {/* Index Badge */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="inline-block"
                    >
                      <span className="px-4 py-2 bg-gradient-to-r from-[#3ea498]/20 to-cyan-400/20 text-[#3ea498] font-bold rounded-full text-sm border border-[#3ea498]/30">
                        {index + 1} of {features.length}
                      </span>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                      {feature.title}
                    </h3>

                    {/* Accent line */}
                    <div className="w-16 h-1 bg-gradient-to-r from-[#3ea498] to-cyan-400" />

                    {/* Description */}
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button setShowModal={setShowModal} />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-6 text-[#3ea498] text-center">
                Choose Donation Region
              </h2>
              <div className="flex flex-col space-y-4">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://give.team.org/give/672997/#!/donation/checkout"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white rounded-lg bg-gradient-to-r from-[#3ea498] to-cyan-600 hover:shadow-lg transition-all"
                >
                  USA Donations
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://give.ca.team.org/give/673060/#!/donation/checkout"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white rounded-lg bg-gradient-to-r from-[#3ea498] to-cyan-600 hover:shadow-lg transition-all"
                >
                  Canada Donations
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowModal(false)}
                  className="py-3 px-5 text-base font-medium text-[#3ea498] rounded-lg border-2 border-[#3ea498] hover:bg-[#3ea498]/5 transition-all"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default CauseHeroBottom;
