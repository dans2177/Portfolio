// Sidebar.jsx
import React, { useState } from "react";
// Import the necessary icons from react-icons
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion components

function Sidebar() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  // Define animation variants for each icon
  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.2 }, // Scaling on hover
  };

  // Easter Egg animation variants
  const easterEggVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <>
      {/* Sidebar Container with Solid Background */}
      <motion.div
        className="fixed z-50 bottom-2 sm:bottom-5 left-2 sm:left-5 h-fit w-12 sm:w-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-2 border-orange-500 flex flex-col items-center py-4 transition-all duration-500"
        initial={{ x: -250 }} // Start off-screen to the left
        animate={{ x: 0 }} // Slide into view
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          when: "beforeChildren",
          staggerChildren: 0.2, // Stagger animations of child elements
        }}
      >
        {/* GitHub Icon */}
        <motion.a
          href="https://www.github.com/dans2177"
          className="text-gray-800 dark:text-white text-2xl mb-6"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          whileHover="hover"
          aria-label="GitHub"
        >
          <FaGithub />
        </motion.a>

        {/* LinkedIn Icon */}
        <motion.a
          href="https://www.linkedin.com/in/daniel-shemon-0931b122a/"
          className="text-blue-600 dark:text-white text-2xl mb-6"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          whileHover="hover"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </motion.a>

        {/* Twitter "X" Icon with Easter Egg Trigger */}
        <motion.a
          href="https://twitter.com/danieldridley"
          className="text-blue-500 dark:text-white text-2xl"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          whileHover="hover"
          aria-label="Twitter"
          onClick={(e) => {
            e.preventDefault(); // Prevent default navigation
            setShowEasterEgg(!showEasterEgg); // Toggle Easter Egg
          }}
          tabIndex="0" // Make focusable for keyboard navigation
          onKeyPress={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setShowEasterEgg(!showEasterEgg);
            }
          }}
        >
          <FaTwitter /> {/* Use custom SVG */}
        </motion.a>
      </motion.div>

      {/* Easter Egg Modal */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowEasterEgg(false)} // Close on backdrop click
          >
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center relative w-11/12 max-w-sm"
              variants={easterEggVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {/* Close Button */}
              <button
                onClick={() => setShowEasterEgg(false)}
                className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white text-xl"
                aria-label="Close Easter Egg"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">
                🎉 Surprise! 🎉
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Thanks for checking out my GitHub! Here's a little secret:{" "}
                <br />
                <span className="font-semibold">
                  Keep coding and stay awesome!
                </span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Sidebar;
