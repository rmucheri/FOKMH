import React from "react";
import { motion } from "framer-motion";
import CauseHero from "../components/CauseHero";
import CauseHeroBottom from "../components/CauseHeroBottom";
import Testimonials from "../components/Testimonials";
import Adopt from "../components/Adopt";

function Causes() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-primary overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={staggerVariants}
    >
      {/* Adopt Section - Hero */}
      <motion.section variants={sectionVariants} className="relative z-10">
        <Adopt />
      </motion.section>

      {/* Cause Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="relative z-10 bg-gradient-secondary"
      >
        <CauseHero />
      </motion.section>

      {/* Cause Hero Bottom Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="relative z-10"
      >
        <CauseHeroBottom />
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="relative z-10 bg-gradient-primary py-8"
      >
        <Testimonials />
      </motion.section>
    </motion.div>
  );
}

export default Causes;
