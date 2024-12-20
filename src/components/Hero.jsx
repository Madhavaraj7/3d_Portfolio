import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import ReactTypingEffect from "react-typing-effect";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [typingStarted, setTypingStarted] = useState(false);

  useEffect(() => {
    // Start typing effect after 2 seconds
    const timer = setTimeout(() => {
      setTypingStarted(true);
    }, 2000); // Adjust this delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white text-5xl`}>
            Hi, I'm{" "}
            <span className="text-[#915EFF] text-5xl">Madhav</span>
          </h1>
          <h2 className="text-white text-4xl mt-2">
            {typingStarted && (
              <ReactTypingEffect
              text={[
                "an Innovator of Digital Experiences",
                "a Creator of Seamless Solutions",
                "an Architect of Web Wonders",
                "a Craftsman of Code",
              ]}
                speed={100}
                eraseSpeed={50}
                eraseDelay={1000}
                typingDelay={500}
                cursorRenderer={(cursor) => <span className="text-white">{cursor}</span>}
              />
            )}
          </h2>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
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
