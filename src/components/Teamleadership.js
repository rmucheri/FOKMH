import React, { useState } from "react";
import { motion } from "framer-motion";
import { mutepfa, rufus, docPaul, docTak, nurseCharge } from "../assets";
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

function Teamleadership() {
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const leadershipTeam = [
    {
      name: "Mwandibhuya Mutepfa",
      role: "Co-Founder / CEO",
      image: mutepfa,
      description: "Visionary leader driving our mission forward",
    },
    {
      name: "Rufaro Mucheri",
      role: "Co-Founder / CTO",
      image: rufus,
      description: "Technology innovator ensuring digital excellence",
    },
    {
      name: "James Watt",
      role: "Co-Founder / Medical Doctor",
      image: "https://alumni.med.ubc.ca/files/2018/02/IMG_4984-225x300.jpg",
      description: "Medical expertise guiding patient care",
    },
  ];

  const karandaTeam = [
    {
      name: "Paul Thistle",
      role: "Medical Director",
      image: docPaul,
      description:
        "Paul Thistle has 29 years of full time medical missionary service in Zimbabwe, first as a chief medical officer and now serving as Medical Director at Karanda Mission Hospital.",
      specialization: "Medical Missionary & Chief Medical Officer",
    },
    {
      name: "Dr Takudzwa Sasa MD",
      role: "Assistant Medical Director",
      image: docTak,
      description:
        "Dr Takudzwa Sasa MD has been serving God as a local missionary and employed as a medical doctor for the past 7 years, bringing dedicated medical expertise to our community.",
      specialization: "Local Medical Missionary",
    },
    {
      name: "Emily Muchenje",
      role: "Senior Nursing Officer III",
      image: nurseCharge,
      description:
        "Emily Muchenje trained for registered general nursing at Karanda Mission Hospital (May 2001-2004 April) and has continued serving with dedication as our Senior Nursing Officer III.",
      specialization: "Registered General Nursing",
    },
  ];

  const visionValues = {
    vision: {
      title: "Our Vision",
      content:
        "To be a beacon of hope and healing, providing world-class healthcare to rural Zimbabwe while empowering communities through education and sustainable health initiatives.",
      icon: "🌟",
    },
    values: [
      {
        title: "Compassionate Care",
        description:
          "We treat every patient with dignity, empathy, and respect, ensuring their comfort and well-being throughout their journey.",
        icon: "❤️",
      },
      {
        title: "Excellence in Medicine",
        description:
          "We strive for the highest standards of medical care, continuously improving our practices and embracing innovation.",
        icon: "⚕️",
      },
      {
        title: "Community Partnership",
        description:
          "We work hand-in-hand with local communities to understand their needs and create sustainable health solutions.",
        icon: "🤝",
      },
      {
        title: "Integrity & Transparency",
        description:
          "We operate with honesty, accountability, and openness in all our interactions and decision-making processes.",
        icon: "🛡️",
      },
    ],
  };

  return (
    <section
      id="team"
      className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 py-20 lg:py-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 md:left-20 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-16 right-10 md:right-20 w-64 md:w-80 h-64 md:h-80 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full blur-3xl" />
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text-primary mb-6">
            Meet Our Leadership
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="modern-card p-6 sm:p-8">
              <p className="text-xl text-gray-600 leading-relaxed mb-4">
                <span className="text-teal-500 text-2xl font-semibold">
                  Message from the CEO
                </span>
              </p>
              <p className="text-5xl sm:text-lg text-gray-600 ">
                <span className="italic text-teal-500 text-3xl">"</span>
                My personal experiences with cancer have deeply shaped my
                perspective on the importance of accessible, compassionate
                healthcare.
                <span className="italic text-teal-500 text-3xl">"</span>
              </p>
              <motion.a
                href="/CEO"
                className="modern-button mt-8 inline-flex items-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Read Full Message
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
          </div>
        </motion.div>

        {/* Leadership Team */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 lg:mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            {leadershipTeam.map((leader) => (
              <motion.div
                key={leader.name}
                variants={itemVariants}
                className="group h-full"
              >
                <div className="modern-card p-8 text-center h-full flex flex-col">
                  <motion.div
                    className="relative mb-8"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full rounded-full object-cover shadow-2xl"
                      />
                      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/30 to-teal-400/30 rounded-full blur-2xl -z-10" />
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {leader.name}
                  </h3>
                  <p className="gradient-text-secondary text-lg font-semibold mb-3">
                    {leader.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed flex-1">
                    {leader.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Karanda Mission Hospital Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text-primary mb-6">
              Meet the Karanda Leadership
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="modern-card p-8">
                <p className="text-xl text-gray-600 leading-relaxed">
                  <span className="text-teal-500 text-2xl font-semibold">
                    Dr. Thistle and Crew
                  </span>
                </p>
                <p className="text-lg text-gray-600 mt-4">
                  Our dedicated medical team at Karanda Mission Hospital works
                  tirelessly to provide exceptional healthcare services to rural
                  Zimbabwe. Led by experienced professionals, our team combines
                  medical expertise with compassionate care.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {karandaTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group h-full"
              >
                <div className="modern-card p-8 text-center h-full flex flex-col hover:shadow-2xl transition-all duration-500">
                  <motion.div
                    className="relative mb-8"
                    whileHover={{ scale: 1.1, rotateY: 10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="relative w-48 h-48 mx-auto">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full rounded-2xl object-cover shadow-2xl"
                      />
                      <div className="absolute -inset-3 bg-gradient-to-r from-teal-400/40 to-cyan-400/40 rounded-2xl blur-xl -z-10 group-hover:blur-2xl transition-all duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                    </div>
                  </motion.div>

                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="gradient-text-secondary text-lg font-semibold mb-2">
                      {member.role}
                    </p>
                    <p className="text-sm text-teal-600 font-medium bg-teal-50 px-3 py-1 rounded-full inline-block mb-3">
                      {member.specialization}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Board Members Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text-secondary mb-4">
              Board Members
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our distinguished board members bring expertise and guidance to
              ensure our mission's success and sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 lg:mb-12">
            {members.slice(0, 3).map((member, index) => (
              <motion.div
                key={member.header || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <AccordionItems
                  header={member.header}
                  text={member.text}
                  img={member.img}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <motion.a
              href="/board"
              className="modern-button text-lg sm:text-xl py-3.5 sm:py-4 px-8 inline-flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Board Members
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
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
          </motion.div>
        </motion.div>
        {/* Our Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-20 mt-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text-secondary mb-8">
              Our Vision
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              className="modern-card p-12 text-center"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-6xl mb-8">{visionValues.vision.icon}</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {visionValues.vision.title}
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                {visionValues.vision.content}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Our Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text-primary mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our mission and define our commitment to
              excellence in healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visionValues.values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="modern-card p-8 h-full hover:shadow-2xl transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-teal-50/50">
                  <div className="flex items-start space-x-6">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-700 transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Teamleadership;
