import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaUserAstronaut } from "react-icons/fa";

const typewriterText = "Hi, I'm Binay";

const Hero = () => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(typewriterText.slice(0, i + 1));
      i++;
      if (i === typewriterText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="flex flex-col items-center justify-center py-24 sm:py-32 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-2 flex items-center justify-center gap-2 drop-shadow-lg">
        <FaUserAstronaut className="inline-block text-blue-400 animate-bounce" />
        <span>{displayed}<span className="border-r-2 border-blue-200 animate-pulse ml-1" /></span>
      </h1>
      <motion.h2
        className="text-xl sm:text-2xl text-blue-200 mb-4 drop-shadow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.7 }}
      >
        Computer Science and Mathematics Undergrad at Pennsylvania State University
      </motion.h2>
      <motion.p
        className="max-w-2xl text-blue-100 text-lg sm:text-xl drop-shadow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.7 }}
      >
        I am passionate about Quantum Computing and Machine Learning, exploring their applications through research and impactful projects.
      </motion.p>
    </motion.div>
  );
};

export default Hero; 