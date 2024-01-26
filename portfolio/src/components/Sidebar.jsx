import React from "react";
// Import the necessary icons from react-icons
import {
  FaGithub,
  FaLinkedin,
  FaSquareXTwitter,
} from "react-icons/fa6";
// Import the useDarkMode hook

function Sidebar() {

  return (
    <div>
      <div className="fixed z-10 bottom-1 left-1 h-fit w-12  bg-white rounded-3xl text-white flex flex-col items-center justify-center  m-4 py-4  shadow-lg  border-2 border-orange-500  dark:bg-gray-800 ">
        {/* Social media icons */}
        <a
          href="https://www.github.com/dans2177"
          className="text-gray-800 dark:text-gray-200 text-2xl mb-4 hover:text-violet-400 dark:hover:text-violet-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-shemon-0931b122a/"
          className="text-gray-800 dark:text-gray-200 text-2xl mb-4 hover:text-blue-500 dark:hover:text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/danieldridley"
          className="text-gray-800 dark:text-gray-200  text-2xl hover:text-red-400 dark:hover:text-red-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
