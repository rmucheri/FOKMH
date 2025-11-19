import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HeroBottom from "../components/HeroBottom";
import Partner from "../components/Partner";
import KarandaVid from "../components/KarandaVid";
import Feature from "../components/Feature";
import Payment from "../components/Payment";
import CampaignPopup from "../components/CampaignPopup";

function Home() {
  const sectionVariants = {
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
    <div className="min-h-screen bg-gradient-primary overflow-hidden">
      <CampaignPopup />

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <Hero />
      </motion.section>

      {/* Main Content Sections */}
      <div className="relative">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="relative z-10"
        >
          <Feature />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="relative z-10"
        >
          <Features />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="relative z-10 bg-gradient-secondary"
        >
          <Payment />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="relative z-10"
        >
          <HeroBottom />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="relative z-10"
        >
          <KarandaVid />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="relative z-10"
        >
          <Partner />
        </motion.section>
      </div>
    </div>
  );
}

export default Home;
