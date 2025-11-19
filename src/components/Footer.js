import React from "react";
import { motion } from "framer-motion";
import { tranlogo2 } from "../assets";

const currentYear = new Date().getFullYear();

const linkVariants = {
  hover: {
    scale: 1.05,
    color: "#f97316",
    transition: { duration: 0.2 },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Footer() {
  return (
    <motion.footer
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-600/10 to-teal-600/10" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 items-start">
            {/* Logo and Brand Section */}
            <motion.div
              className="flex flex-col items-center lg:items-start"
              variants={sectionVariants}
            >
              <motion.div
                className="flex flex-col items-center lg:items-start mb-8 text-center lg:text-left"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  className="h-24 w-auto mb-6"
                  src={tranlogo2}
                  alt="FOKMH Logo"
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <h3 className="text-3xl font-bold gradient-text-primary mb-4">
                  FOKMH
                </h3>
                <p className="text-gray-200 leading-relaxed max-w-sm">
                  Supporting life and inspiring hope through compassionate
                  healthcare at Karanda Mission Hospital.
                </p>
              </motion.div>

              {/* Social Media Icons */}
              <div className="flex flex-wrap gap-4 mt-2 justify-center lg:justify-start">
                {[
                  { name: "Facebook", icon: "📘" },
                  { name: "Twitter", icon: "🐦" },
                  { name: "LinkedIn", icon: "💼" },
                  { name: "Instagram", icon: "📷" },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href="#"
                    className="w-11 h-11 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center text-lg hover:bg-white/30 transition-colors shadow-lg border border-white/20"
                    whileHover={{ scale: 1.15, rotate: 3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={sectionVariants}>
              <h4 className="text-2xl font-semibold text-white mb-6 gradient-text-primary text-center lg:text-left">
                Quick Links
              </h4>
              <nav>
                <ul className="space-y-3">
                  {[
                    { name: "Home", href: "/" },
                    { name: "About", href: "/about" },
                    { name: "Causes", href: "/causes" },
                    { name: "Contact", href: "/contact" },
                    { name: "FAQs", href: "/about#faq" },
                  ].map((link) => (
                    <motion.li key={link.name} className="list-none">
                      <motion.a
                        href={link.href}
                        className="text-gray-100 hover:text-cyan-300 transition-colors duration-300 block text-center lg:text-left font-medium"
                        variants={linkVariants}
                        whileHover="hover"
                      >
                        {link.name}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>

            {/* Partners */}
            <motion.div variants={sectionVariants}>
              <h4 className="text-2xl font-semibold text-white mb-6 gradient-text-secondary text-center lg:text-left">
                Partners
              </h4>
              <nav>
                <ul className="space-y-3">
                  {[
                    { name: "Magetsi", href: "https://magetsi.co.zw/" },
                    { name: "Solvaxion", href: "https://www.solvaxion.com/" },
                    {
                      name: "Wildrose",
                      href: "https://www.wildroseplacement.com/",
                    },
                    { name: "AWS", href: "https://aws.amazon.com/" },
                  ].map((partner) => (
                    <motion.li key={partner.name} className="list-none">
                      <motion.a
                        href={partner.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-100 hover:text-cyan-300 transition-colors duration-300 block text-center lg:text-left font-medium"
                        variants={linkVariants}
                        whileHover="hover"
                      >
                        {partner.name} ↗
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={sectionVariants}>
              <h4 className="text-2xl font-semibold text-white mb-6 gradient-text-primary text-center lg:text-left">
                Get In Touch
              </h4>
              <div className="space-y-5">
                <motion.a
                  href="mailto:info@friendsofkaranda.com"
                  className="flex items-center gap-3 text-gray-100 hover:text-cyan-300 transition-colors duration-300 justify-center lg:justify-start"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-2xl">📧</span>
                  <span className="text-sm break-all">
                    info@friendsofkaranda.com
                  </span>
                </motion.a>
                <motion.a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-gray-100 hover:text-cyan-300 transition-colors duration-300 justify-center lg:justify-start"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-2xl">📞</span>
                  <span>+1 (587) 500-3490</span>
                </motion.a>
                <motion.div
                  className="flex items-center gap-3 text-gray-100 justify-center lg:justify-start"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-2xl">📍</span>
                  <span className="text-sm">
                    Karanda Mission Hospital, Zimbabwe
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-white/20 bg-black/40 backdrop-blur-sm"
          variants={sectionVariants}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
              <motion.p
                className="text-gray-200 text-center md:text-left text-sm font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                © {currentYear} Friends of Karanda Mission Hospital. All rights
                reserved.
              </motion.p>

              <motion.div
                className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-xs sm:text-sm text-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <span>Made with ❤️ by Rufaro Mucheri</span>
                <span className="hidden md:inline">•</span>
                <span className="flex items-center gap-1">
                  Powered by{" "}
                  <motion.a
                    href="https://magetsi.co.zw/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 font-semibold"
                    whileHover={{ scale: 1.05 }}
                  >
                    Magetsi
                  </motion.a>
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
