import React from "react";
import { motion } from "framer-motion";

import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className="mt-20 flex flex-row flex-wrap justify-center gap-8 md:gap-10">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            variants={fadeIn("up", "spring", index * 0.1, 0.75)}
            className="w-32 h-32 md:w-36 md:h-36 flex flex-col items-center justify-center gap-3 group"
          >
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-tertiary flex items-center justify-center p-5 hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-card">
              <img
                src={technology.icon}
                alt={technology.name}
                loading="lazy"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-white text-[13px] text-center font-medium">
              {technology.name}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");