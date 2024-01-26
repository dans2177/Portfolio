import React, { useState, useEffect } from "react";
import { FaArrowUp, FaSun, FaMoon } from "react-icons/fa";
import { useDarkMode } from "../context.jsx";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 500);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    // Add the following line to set the initial state
    setIsVisible(window.scrollY > 500);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Add another useEffect to handle the initial state of darkMode
  useEffect(() => {
    // If needed, you can perform an action here when darkMode changes
  }, [darkMode]);

  return (
    <>
      <div className="fixed z-10 bottom-1 right-1 text-white flex flex-col items-center justify-center m-4">
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full"
          >
            <FaArrowUp size={24} className="text-gray-200" />
          </button>
        )}
        <button
          onClick={toggleDarkMode}
          className={`flex items-center justify-center w-12 h-12 mt-2 rounded-full ${
            darkMode ? "bg-blue-600" : "bg-purple-500"
          } transform transition duration-500`}
        >
          {darkMode ? (
            <FaSun size={24} className="text-yellow-500" />
          ) : (
            <FaMoon size={24} className="text-yellow-200" />
          )}
        </button>
      </div>
    </>
  );
};

export default ScrollToTopButton;
