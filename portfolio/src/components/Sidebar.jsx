import React from 'react';
// Import the necessary icons from react-icons
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="fixed z-10 bottom-2 left-3 h-fit w-16  bg-orange-600  rounded-3xl text-white flex flex-col items-center justify-center m-4 p-6 shadow-lg">
      {/* Social media icons */}
      <a href="https://www.github.com/dans2177" className="text-gray-200 text-2xl mb-4" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/danielshemon" className="text-gray-200 text-2xl mb-4" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://www.instagram.com/daniel_d_ridley" className="text-gray-200 text-2xl mb-4" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://twitter.com/danielshemon" className="text-gray-200 text-2xl " target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>

    </div>
  );
}

export default Sidebar;
