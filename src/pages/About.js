import React from "react";
import { motion } from "framer-motion";
import AboutUs from "../components/AboutUs";
import Team from "../components/Team";
import FAQs from "../components/FAQs";
import Vision from "../components/Vision";
import { Gallery } from "../components/Gallery";
import Teamleadership from "../components/Teamleadership";
import Values from "../components/Values";
import AboutStory from "../components/AboutStory";

function About() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-primary"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Story Section */}
      <motion.section
        variants={sectionVariants}
        className="relative overflow-hidden"
      >
        <AboutStory />
      </motion.section>

      {/* Leadership Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionVariants}
        className="relative z-10 bg-gradient-secondary py-8"
      >
        <Teamleadership />
      </motion.section>

      {/* Team Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionVariants}
        className="relative z-10"
      >
        {/* <Team /> */}
      </motion.section>

      {/* About Us Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionVariants}
        className="relative z-10 bg-gradient-primary"
      >
        {/* <AboutUs /> */}
      </motion.section>

      {/* Vision Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionVariants}
        className="relative z-10"
      >
        {/* <Vision /> */}
      </motion.section>

      {/* Values Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionVariants}
        className="relative z-10 bg-gradient-secondary py-8"
      >
        {/* <Values /> */}
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionVariants}
        className="relative z-10"
      >
        <Gallery />
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionVariants}
        className="relative z-10 bg-gradient-primary py-8"
      >
        <FAQs />
      </motion.section>
    </motion.div>
  );
}

export default About;
