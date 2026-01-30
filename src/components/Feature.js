import React, { useState } from "react";
import { motion } from "framer-motion";
import { docTakPodium } from "../assets";
import { Link } from "react-router-dom";
const stats = [
  {
    label: "Patients Treated",
    description: "Serving our community with compassionate care",
  },
  {
    label: "Treatment Success",
    description: "Committed to positive patient outcomes",
  },
  { label: "Medical Staff", description: "Dedicated healthcare professionals" },
  {
    label: "Years of Service",
    description: "A legacy of excellence in patient care",
  },
];

const impactAreas = [
  {
    title: "Cancer Treatment",
    description: "Providing advanced cancer care and therapy to those in need",
    icon: "🏥",
  },
  {
    title: "Patient Support",
    description: "Ensuring comprehensive care and support for every patient",
    icon: "❤️",
  },
  {
    title: "Community Impact",
    description: "Building stronger, healthier communities through healthcare",
    icon: "🤝",
  },
  {
    title: "Medical Training",
    description: "Training the next generation of healthcare professionals",
    icon: "📚",
  },
];

function Feature() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Text Content */}
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold px-4 md:px-0"
                >
                  Transforming Lives Through{" "}
                  <span className="text-[#3ea498] block md:inline">
                    Compassionate Care
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0"
                >
                  At Karanda Mission Hospital, we're committed to providing
                  world-class medical care to those who need it most. Join us in
                  our mission to make quality healthcare accessible to all.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  to="/causes"
                  className="px-8 py-3 bg-[#3ea498] text-white rounded-full hover:bg-[#2c7b72] transition-all duration-300 hover:shadow-lg w-full sm:w-auto"
                >
                  Support Our Mission
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-3 border-2 border-[#3ea498] text-[#3ea498] rounded-full hover:bg-[#3ea498] hover:text-white transition-all duration-300 w-full sm:w-auto"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="absolute -inset-4 bg-[#3ea498]/10 rounded-xl blur-xl"></div>
              <img
                src={docTakPodium}
                alt="Medical Care"
                className="relative rounded-xl shadow-2xl w-4/5 md:w-3/4 lg:w-5/6 object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <h3 className="text-xl md:text-2xl font-bold text-[#3ea498] mb-2">
                  {stat.label}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Areas of Impact Section */}
      <section className="py-12 md:py-20">
        <div className="mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Our Areas of Impact
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">
              We're making a difference in multiple areas of healthcare and
              community development. Here's how we're creating lasting change:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {impactAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative p-6 md:p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl mb-4 text-center">
                  {area.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-center">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-center text-sm md:text-base">
                  {area.description}
                </p>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    className="absolute bottom-0 left-0 w-full h-1 bg-[#3ea498] origin-left"
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12 md:mt-20 px-4"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-base">
              Your support helps us continue providing essential medical care to
              those who need it most. Join us in our mission to heal and serve.
            </p>
            <Link
              to="/causes"
              className="w-full sm:w-auto px-8 py-3 bg-[#3ea498] text-white rounded-full hover:bg-[#2c7b72] transition-all duration-300 hover:shadow-lg"
            >
              Support Our Cause
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Feature;
