import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const roles = ["Software Developer", "Full-Stack Enthusiast", "Problem Solver"];

const stats = [
  { label: "Internships", value: "2" },
  { label: "Months Experience", value: "9+" },
  { label: "Projects Built", value: "10+" },
];

const About = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

      {/* LEFT SIDE: text content */}
      <div className="flex-1">

        {/* Open to work badge */}
        <motion.div
          variants={fadeIn("down", "spring", 0, 1)}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-5"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <p className="text-secondary text-[13px] font-medium">
            Open to Work
          </p>
        </motion.div>

        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        {/* Rotating role text */}
        <motion.div
          variants={fadeIn("up", "spring", 0.05, 1)}
          className="mt-2 h-[28px] overflow-hidden"
        >
          <motion.p
            key={roleIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[18px] font-semibold bg-gradient-to-r from-[#4A90E2] to-[#8E2DE2] bg-clip-text text-transparent"
          >
            {roles[roleIndex]}
          </motion.p>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-6 max-w-3xl text-secondary text-[17px] leading-[30px]"
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

        {/* Stats row + GitHub icon */}
        <motion.div
          variants={fadeIn("up", "spring", 0.15, 1)}
          className="mt-8 flex flex-wrap items-center gap-6"
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-white text-[26px] font-bold">
                {stat.value}
              </span>
              <span className="text-secondary text-[13px]">
                {stat.label}
              </span>
            </div>
          ))}

          {/* Animated GitHub icon */}
          <motion.a
            href="https://github.com/luckybisht2811"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            title="Check out my GitHub"
            whileHover={{ scale: 1.15, rotate: 8 }}
            whileTap={{ scale: 0.95 }}
            className="ml-2 flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 hover:border-[#915EFF]/50 hover:bg-white/10 transition-colors duration-300 shadow-card"
          >
            <motion.svg
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-9 h-9 text-white"
              fill="currentColor"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12z" />
            </motion.svg>
          </motion.a>
        </motion.div>

        {/* Resume download button */}
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 1)}
          className="mt-8"
        >
          
        <a     href="/Lalit_Singh_Bisht(Dev).pdf"
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