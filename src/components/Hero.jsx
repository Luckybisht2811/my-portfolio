import { motion } from "framer-motion";

import { styles } from "../styles";
// import { fadeIn, textVariant } from "../utils/motion";
import { ComputerCanvas } from "./canvas";
import StarsBackground from "./StarsBackground";
import heroVideo from "../assets/galaxy.mp4"; // apni video file ka sahi path/naam daalo

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Layer 1: Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-20 opacity-40"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Layer 2: Twinkling stars overlay */}
      <div className="absolute inset-0 -z-10">
        <StarsBackground count={150} />
      </div>

      {/* Hero Content */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10`}
      >
        {/* Vertical Line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />

          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Text */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Lalit</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a software developer who loves building web applications{" "}
            <br className="sm:block hidden" />
            and creating beautiful digital experiences.
          </p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 top-[280px] sm:top-[180px] z-10 pointer-events-auto">
        <ComputerCanvas />
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-8 sm:bottom-10 w-full flex justify-center items-center z-20 pointer-events-auto">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 bg-[#050816]/40 backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
