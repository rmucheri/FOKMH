import { useState } from "react";
import { motion } from "framer-motion";
import AccordionItemCard from "./Cards/AccordionItemCard";
import members from "./Content/memberscontent";

const AccordionItems = ({ header, text, img }) => {
  const [active, setActive] = useState(false);

  const handleToggle = (event) => {
    event.preventDefault();
    setActive((prev) => !prev);
  };

  return (
    <AccordionItemCard
      header={header}
      text={text}
      img={img}
      active={active}
      handleToggle={handleToggle}
    />
  );
};

function Board() {
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 lg:py-28 overflow-hidden">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute top-16 left-6 md:top-20 md:left-20 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-r from-cyan-400/30 to-teal-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-16 right-6 md:bottom-20 md:right-20 w-56 md:w-80 h-56 md:h-80 bg-gradient-to-r from-orange-400/30 to-pink-400/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 md:w-72 h-56 md:h-72 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text-primary mb-6"
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Board Members
          </motion.h1>
          <div className="max-w-4xl mx-auto">
            <div className="modern-card p-6 sm:p-8">
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-4">
                Our distinguished board of directors brings together expertise
                from healthcare, business, technology, and humanitarian sectors
                to guide our mission and ensure sustainable impact.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Each member contributes unique insights and experience to help
                us deliver exceptional care and support to cancer patients at
                Karanda Mission Hospital.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Board Members Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {members.map((member, index) => (
            <motion.div
              key={member.header || index}
              variants={itemVariants}
              className="group h-full"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="modern-card h-full overflow-hidden">
                <AccordionItems
                  header={member.header}
                  text={member.text}
                  img={member.img}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="modern-card p-6 sm:p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold gradient-text-secondary mb-4">
              Join Our Mission
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
              Are you passionate about healthcare, humanitarian work, and making
              a difference? We're always looking for dedicated individuals to
              join our board and help guide our mission.
            </p>
            <motion.a
              href="/contact"
              className="modern-button text-lg py-3.5 sm:py-4 px-8 inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Involved
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
            </motion.a>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-10"
        >
          <motion.a
            href="/about"
            className="inline-flex items-center gap-2 text-lg font-semibold text-cyan-600 hover:text-cyan-700 transition-colors"
            whileHover={{ x: -5 }}
          >
            <svg
              className="w-5 h-5 rotate-180"
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
            Back to About Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Board;
