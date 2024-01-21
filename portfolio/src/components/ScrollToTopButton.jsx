import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useDarkMode } from "../context.jsx";
import { FaSun, FaMoon } from "react-icons/fa";


const ScrollToTopButton = () => {
  // State to handle whether button is visible or not
  const [isVisible, setIsVisible] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      // for smooth scrolling
    });
  };

  // Function to toggle visibility
  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      // Adjust the number based on where your navbar ends
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add and remove the window scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <div className="fixed z-10 bottom-1 right-1  text-white flex flex-col items-center justify-center m-4 ">
        {isVisible && (
          <button
            onClick={scrollToTop}
            className=" flex items-center justify-center w-12 h-12  bg-orange-500 rounded-full"
          >
            <FaArrowUp size={24 } className=" text-gray-200" />
          </button>
        )}
        <button
          onClick={toggleDarkMode}
          className={`flex items-center justify-center w-12 h-12 mt-2 rounded-full ${
            darkMode ? "bg-blue-600" : "bg-purple-500"
          } transform transition duration-500 `}
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
