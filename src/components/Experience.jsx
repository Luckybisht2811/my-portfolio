import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(135deg, #151030 0%, #1d1740 100%)",
        color: "#fff",
        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.05)",
      }}
      contentArrowStyle={{
        borderRight: "7px solid #1d1740",
      }}
      date={experience.date}
      dateClassName="!text-secondary !font-semibold !opacity-90"
      iconStyle={{
        background: experience.iconBg || "#383E56",
        boxShadow: "0 0 0 4px #151030, 0 0 20px rgba(145, 94, 255, 0.4)",
      }}
      icon={
        <motion.div
          className="flex justify-center items-center w-full h-full"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {experience.icon ? (
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[60%] h-[60%] object-contain"
            />
          ) : (
            <span className="text-white font-bold text-xl">
              {experience.company_name?.charAt(0)}
            </span>
          )}
        </motion.div>
      }
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn("up", "spring", 0.1, 0.75)}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="flex items-start justify-between flex-wrap gap-2">
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-white text-[22px] md:text-[24px] font-bold"
            >
              {experience.title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-[15px] font-semibold mt-1"
              style={{
                margin: 0,
                background: "linear-gradient(90deg, #915EFF, #4A90E2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {experience.company_name}
            </motion.p>
          </div>

          {experience.type && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-[11px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-secondary"
            >
              {experience.type}
            </motion.span>
          )}
        </div>

        <ul className="mt-5 space-y-3">
          {experience.points?.map((point, i) => (
            <motion.li
              key={`experience-point-${i}`}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className="flex gap-3 text-secondary text-[14px] leading-[22px] tracking-wide"
            >
              <span className="mt-[7px] w-[6px] h-[6px] rounded-full bg-gradient-to-r from-[#915EFF] to-[#4A90E2] flex-shrink-0" />
              <span>{point}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#232631">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");