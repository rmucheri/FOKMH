import React from "react";
import { motion } from "framer-motion";
import {
  BuildingOffice2Icon,
  CheckBadgeIcon,
  MagnifyingGlassIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
// import  mamoyo  from '../assets/images/mamoyo.jpg'

const features = [
  {
    name: "Cancer patients’ treatment: ",
    description:
      "With your generosity, we aim to assist as many cancer patients as possible and work towards equipping Karanda Mission Hospital with state-of-the-art equipment to enhance cancertreatment.",
    icon: UserGroupIcon,
    // image: mamoyo
  },
  {
    name: "Satisfaction Rate:",
    description:
      " Our dedicated team ensures that patients receive the best possible care, leading to a satisfaction rate for treated cancers.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Outreach Programs:",
    description:
      "Through the assistance of the fund, Outreach programs will be conducted to educate the community about cancer prevention and early detection.",
    icon: BuildingOffice2Icon,
  },
  {
    name: "Early Detection Screenings Conducted:",
    description:
      "By expanding our screening programs, we have been able to detect cancer at earlier, more treatable stages for individuals, significantly improving their chances of successful treatment and recovery.",
    icon: MagnifyingGlassIcon,
  },
];

function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-primary overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-cyan-400/30 to-teal-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-orange-400/30 to-pink-400/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-primary mb-4">
            Highlights of Your Contributions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your support creates real impact in the lives of cancer patients and
            their families. Here's how your generosity is making a difference.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="modern-card p-8 group cursor-pointer"
            >
              <div className="flex items-start gap-6">
                {/* Icon Container */}
                <motion.div
                  className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors mb-3">
                    {feature.name}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mt-6">
                    <motion.div
                      className="h-2 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="modern-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text-secondary">
              Be Part of the Solution
            </h3>
            <p className="text-gray-600 mb-6">
              Every contribution, no matter the size, helps us save lives and
              bring hope to families affected by cancer. Join our mission today.
            </p>
            <motion.button
              className="modern-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Make a Difference Today
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Features;
