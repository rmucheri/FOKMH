import React from "react";
import { motion } from "framer-motion";

function Testimonials() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const testimonials = [
    {
      quote:
        "Karanda Hospital has been a beacon of hope in my life. After being diagnosed with cancer, I was scared and uncertain about my future. The compassionate care and expert treatment I received at Karanda not only eased my fears but also gave me a renewed sense of strength and determination.",
      author: "Jane M.",
      role: "Patient @Karanda",
      icon: "💪",
    },
    {
      quote:
        "I can't put into words the gratitude I feel towards Karanda Hospital. From the moment I walked through their doors, I was met with warmth and understanding. The entire medical team was incredibly supportive throughout my treatment, always taking the time to explain every step of the process and answer all my questions.",
      author: "Samuel T.",
      role: "Patient @Karanda",
      icon: "❤️",
    },
    {
      quote:
        "Karanda Hospital is more than just a medical facility; it is a place of healing and hope. When I was diagnosed with cancer, I felt like my world was falling apart. However, the incredible team at Karanda provided not only exceptional medical care but also emotional support that helped me stay positive and strong.",
      author: "Emily R.",
      role: "Patient @Karanda",
      icon: "✨",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative py-16 md:py-24 bg-white overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#3ea498]/5 to-transparent rounded-full blur-3xl" />
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
            <span className="text-[#3ea498]">Patient Stories</span>
            <br />
            <span className="text-2xl md:text-3xl font-semibold text-gray-600">
              The heartfelt testimonials of our community
            </span>
          </h2>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Hear from those whose lives have been transformed through
            compassionate care and expert treatment at Karanda Mission Hospital
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(62, 164, 152, 0.15)",
              }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-[#f8fffe] border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 p-8"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#3ea498]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="relative z-10 text-4xl mb-4">
                {testimonial.icon}
              </div>

              {/* Quote Mark */}
              <div className="relative z-10 text-6xl text-[#3ea498]/20 font-bold mb-2">
                "
              </div>

              {/* Quote */}
              <p className="relative z-10 text-base text-gray-700 leading-relaxed mb-6 italic">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="relative z-10 border-t border-gray-200 pt-6">
                <h4 className="font-bold text-gray-900 text-lg mb-1">
                  {testimonial.author}
                </h4>
                <p className="text-sm text-[#3ea498] font-semibold">
                  {testimonial.role}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-12 bg-gradient-to-r from-[#3ea498] to-cyan-400 group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-lg text-gray-600 mb-6">
            Your support can create more stories of hope and healing
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-[#3ea498] to-cyan-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Make a Difference Today
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Testimonials;
