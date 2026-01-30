import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import xrays from "../assets/images/xrays.jpg";
import charthos from "../assets/images/charthos.jpg";
import docspatient from "../assets/images/docspatient.jpg";
import tranlogo2 from "../assets/images/tranlogo2.png";
import Button from "./Botton";

const causes = [
  {
    title: "Comprehensive Cancer Care",
    subtitle: "Providing Hope and Healing Through Advanced Cancer Treatment",
    content:
      "At Karanda Mission Hospital, They are committed to offering comprehensive cancer care to economically disadvantaged patients. Your donations enable them to provide state-of-the-art treatments, including chemotherapy, radiation therapy, and surgical interventions. By supporting our cancer care program, you help them cover the cost of expensive medications and cutting-edge technologies that are essential for effective treatment. Additionally, they provide emotional and psychological support to patients and their families, ensuring they receive holistic care. Every contribution makes a significant difference, turning the tide against cancer and offering hope to those in desperate need.",
    image: xrays,
    icon: tranlogo2,
  },
  {
    title: "Community Outreach and Education",
    subtitle: "Empowering Communities Through Knowledge and Prevention",
    content:
      "Prevention is a powerful tool in the fight against cancer. At Karanda Mission Hospital, they believe in the importance of educating communities about cancer prevention, early detection, and healthy living. Your support allows them to conduct extensive outreach programs, including workshops, health fairs, and screening camps in rural areas. These initiatives help identify cancer at its earliest stages, increasing the chances of successful treatment. They also provide educational materials and resources to raise awareness about the risk factors and symptoms of cancer. Together, we can empower communities with the knowledge they need to prevent cancer and live healthier lives.",
    image: charthos,
    icon: tranlogo2,
  },
  {
    title: "Patient Support Services",
    subtitle: "Supporting Patients Every Step of the Way",
    content:
      "Cancer treatment can be a long and arduous journey. At Karanda Mission Hospital, They offer a range of support services to ensure patients and their families are not alone in this fight. Your donations help them provide transportation for patients traveling from remote areas, accommodation for those undergoing long-term treatment, and nutritional support to aid recovery. They also offer counseling and support groups to help patients cope with the emotional and psychological challenges of cancer. By contributing to their patient support services, you ensure that every patient receives the comprehensive care they need to navigate their treatment journey with dignity and hope.",
    image: docspatient,
    icon: tranlogo2,
  },
];

function CauseHero() {
  const [showModal, setShowModal] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative py-16 md:py-24 bg-white overflow-hidden"
      >
        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#3ea498]/5 to-transparent rounded-full blur-3xl" />

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
              Our <span className="text-[#3ea498]">Causes & Impact</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how your support directly transforms lives through our
              three core mission areas
            </p>
          </motion.div>

          {/* Causes Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-12 md:space-y-16"
          >
            {causes.map((cause, index) => (
              <motion.div key={index} variants={itemVariants} className="group">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index === 1 ? "lg:grid-cols-2 lg:grid-flow-dense" : ""}`}
                >
                  {/* Image Section */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`relative overflow-hidden rounded-2xl shadow-xl ${index === 1 ? "lg:order-2" : ""}`}
                  >
                    <img
                      alt={cause.title}
                      className="object-cover object-center h-96 w-full group-hover:brightness-110 transition-all duration-500"
                      src={cause.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3ea498]/30 to-transparent" />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute top-6 right-6 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden"
                    >
                      <img
                        src={cause.icon}
                        alt={cause.title}
                        className="w-12 h-12 object-cover"
                      />
                    </motion.div>
                  </motion.div>

                  {/* Content Section */}
                  <motion.div
                    className={`space-y-6 ${index === 1 ? "lg:order-1" : ""}`}
                  >
                    {/* Index Badge */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="inline-block"
                    >
                      <span className="px-4 py-2 bg-gradient-to-r from-[#3ea498]/20 to-cyan-400/20 text-[#3ea498] font-bold rounded-full text-sm border border-[#3ea498]/30">
                        Cause {index + 1} of {causes.length}
                      </span>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                      {cause.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-lg text-[#3ea498] font-semibold">
                      {cause.subtitle}
                    </p>

                    {/* Accent line */}
                    <div className="w-16 h-1 bg-gradient-to-r from-[#3ea498] to-cyan-400" />

                    {/* Description */}
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      {cause.content}
                    </p>

                    {/* Call to Action */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button setShowModal={setShowModal} />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
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

export default CauseHero;
