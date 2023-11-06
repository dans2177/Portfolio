import React from 'react';
// Import the necessary icons from react-icons
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="fixed z-10 bottom-12 left-1/20 h-auto w-16  bg-orange-800  rounded-3xl text-white flex flex-col items-center justify-center m-4 p-6 border-2 border-blue-500">
      {/* Social media icons */}
      <a href="https://www.linkedin.com/in/daniel-shemon-0931b122a/" className="text-white text-2xl mb-4" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/danielshemon" className="text-white text-2xl mb-4" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://www.instagram.com/daniel_d_ridley" className="text-white text-2xl mb-4" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://twitter.com/danielshemon" className="text-white text-2xl " target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>

    </div>
  );
}

export default Sidebar;
