import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
      
      {/* LEFT SIDE: text content */}
      <div className="flex-1">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 max-w-3xl text-secondary text-[17px] leading-[30px]"
        >
          I'm a passionate software developer focused on building
          modern, responsive, and user-friendly web applications.
          I enjoy turning ideas into real-world digital experiences
          using modern technologies and clean, maintainable code.
          <br />
          <br />
          I work with technologies such as React, JavaScript, Python,
          Node.js, SQL, and other tools to build full-stack
          applications. I'm always learning new technologies and
          improving my problem-solving skills.
        </motion.p>

        {/* Resume download button */}
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 1)}
          className="mt-8"
        >
          
        <a href="/Lalit_Singh_Bisht(Dev).pdf"
            download="Lalit_Singh_Bisht(Dev).pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                       bg-gradient-to-r from-[#4A90E2] to-[#8E2DE2]
                       text-white font-semibold text-[16px]
                       shadow-card hover:opacity-90 hover:scale-105
                       transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
              />
            </svg>
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* RIGHT SIDE: animated character image */}
      <motion.div
        variants={fadeIn("left", "spring", 0.3, 1)}
        className="flex-1 flex justify-center lg:justify-end"
      >
        <motion.img
          src="/crt.webp"
          alt="Character illustration"
          className="w-[280px] md:w-[420px] lg:w-[480px]"
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");