import React, { useRef, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, project }) => {
  const videoRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <Tilt
      options={{ max: 15, scale: 1.02, speed: 400 }}
      className="w-full"
    >
      <motion.div
        variants={fadeIn("up", "spring", index * 0.2, 0.75)}
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="bg-tertiary p-5 rounded-2xl w-full h-full flex flex-col shadow-card hover:shadow-2xl transition-shadow duration-300"
      >
        {/* Project Media: video plays on hover, image shows by default */}
        <div className="relative w-full h-[230px] overflow-hidden rounded-2xl group flex-shrink-0">
          <img
            src={project.image}
            alt={project.name}
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ${
              isHovering && project.video ? "opacity-0" : "opacity-100"
            }`}
          />

          {project.video && (
            <video
              ref={videoRef}
              src={project.video}
              muted
              loop
              playsInline
              className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ${
                isHovering ? "opacity-100" : "opacity-0"
              }`}
            />
          )}

          {/* Subtle hint overlay */}
          {project.video && (
            <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[11px] px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              ▶ Hover for preview
            </div>
          )}
        </div>

        {/* Project Information */}
        <div className="mt-5 flex-grow">
          <h3 className="text-white font-bold text-[24px]">
            {project.name}
          </h3>

          <p className="mt-2 text-secondary text-[14px] leading-6 line-clamp-4">
            {project.description}
          </p>
        </div>

        {/* Tech Stack (2-3 tags) */}
        <div className="mt-4 flex flex-wrap gap-2 flex-shrink-0">
          {project.tags?.slice(0, 3).map((tag) => (
            <p
              key={`${project.name}-${tag.name}`}
              className={`text-[13px] font-medium px-2 py-1 rounded-full bg-white/5 ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        {/* Action Buttons: GitHub + Live Demo */}
        <div className="mt-5 flex items-center gap-4 flex-shrink-0">
          <a
            href={project.source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-semibold text-[14px] hover:text-[#915EFF] transition-colors"
          >
            <i className="bx bxl-github text-lg"></i>
            GitHub
          </a>

          {project.live_demo_link && (
            <a
              href={project.live_demo_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-semibold text-[14px] px-3 py-1.5 rounded-full bg-[#915EFF]/20 border border-[#915EFF]/40 hover:bg-[#915EFF]/40 transition-colors"
            >
              Live Demo →
            </a>
          )}
        </div>
      </motion.div>
    </Tilt>
  );
};

const Works = () => {
  return (
    <>
      {/* Section Heading */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>

        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      {/* Description */}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 max-w-3xl text-secondary text-[17px] leading-[30px]"
        >
          Here are some of the projects I've built while learning and
          working with modern technologies. These projects showcase my
          skills in frontend development, backend development, databases,
          APIs, and data analytics.
        </motion.p>
      </div>

      {/* Project Cards */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 items-stretch">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} project={project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");