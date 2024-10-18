// Header.jsx
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion components

function Header() {
  // Define animation variants for the container and child elements
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.3, // Stagger the animation of child elements
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const subHeadingVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const paragraphVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <header className="text-center mt-6 p-10 pt-12">
      {/* Animated Container */}
      <motion.div
        className="h-96 md:h-[85vh] bg-gray-200 dark:bg-gray-800 border-solid border-4 border-orange-500 text-gray-800 dark:text-gray-300 rounded-lg flex flex-col justify-between p-6 md:p-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headings Container */}
        <motion.div className="flex-grow">
          <motion.h1
            className="text-xl font-bold text-left font-prata md:text-3xl lg:text-4xl mb-4"
            variants={headingVariants}
          >
            Hello World! My name is
          </motion.h1>
          <motion.h1
            className="font-bold text-left font-pixelify text-6xl md:text-8xl lg:text-9xl flex items-center"
            variants={subHeadingVariants}
          >
            Daniel Shemon<span className="animate-blink">_</span>
          </motion.h1>
        </motion.div>

        {/* Paragraph */}
        <motion.p
          className="text-left text-black dark:text-white mt-8 md:mt-16 p-4 md:pl-10 md:text-2xl xl:text-4xl font-prata leading-normal sm:leading-relaxed"
          variants={paragraphVariants}
        >
          Full Stack Web Developer <br />
          Bachelors in Business Management (2024) <br />
          Certified ScrumMaster
        </motion.p>
      </motion.div>
    </header>
  );
}

export default Header;
