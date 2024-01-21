import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container mt-10 mx-auto p-4 max-w-6xl ">
      <h2 className="text-4xl md:text-6xl sm:pl-4 pb-6 font-prata text-transparent bg-clip-text bg-gray-900 dark:bg-gray-200 text-center sm:text-left">
        Lets Stay Connected
      </h2>
      <div className="max-w-4xl mx-auto sm:justify-center sm:align-middle bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl">
        <div className="m-4">
          <p className="text-gray-900 dark:text-gray-200 font-comfortaa text-center text-lg sm:text-left pb-10">
            I am currently availabe for new opportunities to work and grow in my
            career. If you have a project you would like to discuss, or just
            want to say hi, please feel free to contact me.
            <br />
            <br />
            Feel free to reach out to me via my socails on the left!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto ">
            <div className="group flex flex-col justify-center items-center shadow rounded-lg  bg-green-100 dark:bg-green-900 transform hover:scale-105 transition duration-300">
              <div className="relative flex flex-col h-full  ">
                <div className="p-4 ">
                  <FaEnvelope className="text-5xl font-semibold font-comfortaa dark:text-gray-300  mb-4 m-auto" />
                  <a
                    href="mailto:danielshemon@outlook.com"
                    className="text-gray-900 dark:text-gray-300 font-comfortaa  text-lg hover:underline"
                  >
                    danielshemon@outlook.com
                  </a>
                </div>
              </div>
            </div>

            <div className="group flex flex-col justify-center items-center shadow rounded-lg bg-blue-100 dark:bg-blue-900 transform hover:scale-105 transition duration-300">
              <div className="relative flex flex-col h-full">
                <div className="p-4">
                  <FaPhone className="text-5xl font-semibold dark:text-gray-100 mb-4 m-auto" />
                  <span className="text-gray-800 dark:text-gray-100 font-comfortaa   text-lg">
                    (605) 215-4285
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
