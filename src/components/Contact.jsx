// Contact.jsx
import React, { useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion components
import { useInView } from "react-intersection-observer"; // Import Intersection Observer hook

const Contact = () => {
  const [easterEggOpen, setEasterEggOpen] = useState(false);

  // Animation controls for the heading
  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Animation controls for the contact cards
  const [emailRef, emailInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [phoneRef, phoneInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Define animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  // Easter Egg Handler
  const handleEasterEgg = () => {
        window.open("sms:6052154285");

    setEasterEggOpen(true);
  };

  const closeEasterEgg = () => {
    setEasterEggOpen(false);
  };

  return (
    <>
      {/* Background Animation */}
      <motion.div
        className="fixed inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
        style={{
          background:
            "linear-gradient(270deg, #ff7e5f, #feb47b, #86a8e7, #91eae4)",
          backgroundSize: "800% 800%",
          animation: "gradientAnimation 16s ease infinite",
        }}
      />

      <div className="container mt-10 mx-auto p-4 max-w-6xl relative z-10">
        {/* Animated Heading */}
        <motion.h2
          ref={headingRef}
          variants={headingVariants}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          className="text-4xl md:text-6xl sm:pl-4 font-prata text-gray-900 dark:text-gray-100 text-center sm:text-left mb-8"
        >
          Let's Stay Connected
        </motion.h2>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto">
          {/* Email Card */}
          <motion.div
            ref={emailRef}
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate={emailInView ? "visible" : "hidden"}
            className="group flex flex-col justify-center items-center shadow-lg rounded-lg bg-green-100 dark:bg-green-900 transform hover:scale-105 transition duration-300 cursor-pointer relative overflow-hidden"
            onClick={handleEasterEgg}
          >
            <motion.div
              className="p-6 flex flex-col items-center"
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaEnvelope className="text-5xl font-semibold font-comfortaa dark:text-white mb-4" />
              <a
                href="mailto:danielshemon@outlook.com"
                className="text-green-800 dark:text-white font-comfortaa text-lg hover:underline"
                onClick={(e) => e.stopPropagation()} // Prevent triggering Easter Egg
              >
                danielshemon@outlook.com
              </a>
            </motion.div>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            ref={phoneRef}
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate={phoneInView ? "visible" : "hidden"}
            className="group flex flex-col justify-center items-center shadow-lg rounded-lg bg-blue-100 dark:bg-blue-900 transform hover:scale-105 transition duration-300 cursor-pointer relative overflow-hidden"
            onClick={handleEasterEgg}
          >
            <motion.div
              className="p-6 flex flex-col items-center"
              whileHover={{ rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaPhone className="text-5xl font-semibold dark:text-white mb-4" />
              <span className="text-blue-800 dark:text-white font-comfortaa text-lg">
                (605) 215-4285
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Easter Egg Modal */}
        <AnimatePresence>
          {easterEggOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeEasterEgg}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm text-center relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
              >
                <button
                  onClick={closeEasterEgg}
                  className="absolute top-2 right-2 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white text-xl"
                  aria-label="Close Easter Egg"
                >
                  ✖️
                </button>
                <h3 className="text-2xl font-bold mb-4 dark:text-white">
                  🎉 Surprise! 🎉
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Thanks for reaching out! Here's a secret: You're awesome! 🚀
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Tailwind CSS Keyframes for Gradient Animation */}
      <style jsx>{`
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </>
  );
};

export default Contact;
