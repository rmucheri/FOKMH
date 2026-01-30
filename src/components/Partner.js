import React from "react";
import { motion } from "framer-motion";
import { calculators, mamoyo, magetsi, solvaxion, wildrose } from "../assets";

const teamlogo =
  "https://images.squarespace-cdn.com/content/v1/6509b098e9ec677d0862ff32/1a71a740-072f-42ff-9509-596f1b44d79f/team_logo.png";
const Karandalogo =
  "https://images.squarespace-cdn.com/content/v1/6509b098e9ec677d0862ff32/f10381d2-45d5-4db0-a1cc-85664ada753a/logowhite.png?format=1500w";

function Partner() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative py-16 md:py-24 bg-gradient-to-r from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#3ea498]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#3ea498]/5 to-transparent rounded-full blur-3xl" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-10 text-center mb-12 md:mb-16 px-4"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Our <span className="text-[#3ea498]">Trusted Partners</span>
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Working together with leading organizations to improve healthcare and
          save lives
        </p>
      </motion.div>

      {/* Partner Scrolling Container */}
      <div className="relative z-20 overflow-hidden">
        {/* Top fade effect */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white via-white to-transparent pointer-events-none z-10" />

        {/* Main carousel */}
        <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <ul className="brands-wrapper">
            <li className="group">
              <div className="h-32 flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-gray-50">
                <img
                  src={solvaxion}
                  alt="Solvaxion"
                  width="180"
                  height="80"
                  className="w-auto h-20 object-contain"
                />
              </div>
            </li>
            <li className="group">
              <a href="https://magetsi.co.zw/" className="block">
                <div className="h-32 flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-gray-50">
                  <img
                    src={magetsi}
                    alt="Magetsi"
                    width="180"
                    height="80"
                    className="w-auto h-20 object-contain"
                  />
                </div>
              </a>
            </li>
            <li className="group">
              <div className="h-32 flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-gray-50">
                <img
                  src={wildrose}
                  alt="Wildrose"
                  width="180"
                  height="80"
                  className="w-auto h-20 object-contain"
                />
              </div>
            </li>
            <li className="group">
              <div className="h-32 flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-gray-50">
                <img
                  src={mamoyo}
                  alt="Mamoyo"
                  width="180"
                  height="80"
                  className="w-auto h-20 object-contain"
                />
              </div>
            </li>
            <li className="group">
              <div className="h-32 flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-gray-50">
                <img
                  src={calculators}
                  alt="Calculators"
                  width="180"
                  height="80"
                  className="w-auto h-20 object-contain"
                />
              </div>
            </li>
            <li className="group">
              <div className="h-32 flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-gray-50">
                <img
                  src={teamlogo}
                  alt="Team Logo"
                  width="180"
                  height="80"
                  className="w-auto h-20 object-contain"
                />
              </div>
            </li>
            <li className="group">
              <div className="h-32 flex items-center justify-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                <img
                  src={Karandalogo}
                  alt="Karanda Mission Hospital"
                  width="180"
                  height="80"
                  className="w-auto h-20 object-contain"
                />
              </div>
            </li>
          </ul>
          <ul className="brands-wrapper" aria-hidden="true">
            <li className="group">
              <div className="h-32 flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-gray-50">
                <img
                  src={solvaxion}
                  alt="Solvaxion"
                  width="180"
                  height="80"
                  className="w-auto h-20 object-contain"
                />
              </div>
            </li>
            <li className="group">
              <div className="h-32 flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-gray-50">
                <img
                  src={magetsi}
                  alt="Magetsi"
                  width="180"
                  height="80"
                  className="w-auto h-20 object-contain"
                />
              </div>
            </li>
            <li className="group">
              <div className="h-32 flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-gray-50">
                <img
                  src={wildrose}
                  alt="Wildrose"
                  width="180"
                  height="80"
                  className="w-auto h-20 object-contain"
                />
              </div>
            </li>
            <li className="group">
              <div className="h-32 flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-gray-50">
                <img
                  src={mamoyo}
                  alt="Mamoyo"
                  width="180"
                  height="80"
                  className="w-auto h-20 object-contain"
                />
              </div>
            </li>
            <li className="group">
              <div className="h-32 flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-gray-50">
                <img
                  src={calculators}
                  alt="Calculators"
                  width="180"
                  height="80"
                  className="w-auto h-20 object-contain"
                />
              </div>
            </li>
            <li className="group">
              <div className="h-32 flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-gray-50">
                <img
                  src={teamlogo}
                  alt="Team Logo"
                  width="180"
                  height="80"
                  className="w-auto h-20 object-contain"
                />
              </div>
            </li>
            <li className="group">
              <div className="h-32 flex items-center justify-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                <img
                  src={Karandalogo}
                  alt="Karanda Mission Hospital"
                  width="180"
                  height="80"
                  className="w-auto h-20 object-contain"
                />
              </div>
            </li>
          </ul>
        </div>

        {/* Bottom fade effect */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white via-white to-transparent pointer-events-none z-10" />
      </div>

      {/* Info text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 text-center mt-12 md:mt-16 text-gray-600 text-sm md:text-base max-w-2xl mx-auto px-4"
      >
        Join our growing network of partners committed to healthcare excellence
        and community impact
      </motion.p>
    </motion.section>
  );
}

export default Partner;
