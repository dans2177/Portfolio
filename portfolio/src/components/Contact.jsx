import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 pb-20 sm:justify-center sm:align-middle">
      <h2 className="text-6xl pb-8 font-prata text-amber-400 text-left">
        Let's Stay Connected
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto">
        <div className="group flex flex-col justify-center items-center shadow rounded-lg bg-black bg-opacity-40 transform hover:scale-105 transition duration-300">
          <div className="relative flex flex-col h-full ">
            <div className="p-4">
              <FaEnvelope className="text-5xl font-semibold font-comfortaa text-gray-300  mb-4 m-auto" />
              <a
                href="mailto:danielshemon@outlook.com"
                className="text-gray-300  text-lg hover:underline"
              >
                danielshemon@outlook.com
              </a>
            </div>
          </div>
        </div>

        <div className="group flex flex-col justify-center items-center shadow rounded-lg bg-black bg-opacity-40 transform hover:scale-105 transition duration-300">
          <div className="relative flex flex-col h-full">
            <div className="p-4">
              <FaPhone className="text-5xl font-semibold font-comfortaa text-gray-300 mb-4 m-auto" />
              <span className="text-gray-300  text-lg">(605) 215-4285</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
