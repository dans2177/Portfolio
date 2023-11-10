import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  // State to handle whether button is visible or not
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smooth scrolling
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
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 justify-center align-middle border-white overflow-hidden border-4 right-5 z-50 h-16 w-16 p-2 bg-indigo-600 text-white rounded-full text-6xl cursor-pointer hover:bg-indigo-700 focus:outline-none focus:shadow-outline"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
