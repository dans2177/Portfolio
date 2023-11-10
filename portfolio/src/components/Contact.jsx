import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="max-w-2xl mt-20 mx-auto sm:justify-center sm:align-middle bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-xl">
      <div className="m-4">
        <h2 className="text-6xl pb-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600 text-center sm:text-left">
          Lets Stay Connected
        </h2>
        <p className="text-gray-200 text-center sm:text-left pb-10">
          I am always looking for new opportunities to learn and grow. If you
          have a project you would like to discuss, or just want to say hi,
          please feel free to contact me.
          <br />
          <br />
          Feel free to reach out to me via my socails on the left!
        </p>

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
    </div>
  );
};

export default Contact;
