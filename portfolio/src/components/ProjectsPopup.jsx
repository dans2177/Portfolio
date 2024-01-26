import React from "react";
import { Slide } from "react-slideshow-image";
import { FaPlay, FaGithub, FaTimes } from "react-icons/fa";
import "react-slideshow-image/dist/styles.css";

function ProjectPopup({ project, closeModal }) {
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg max-w-4xl w-full m-4">
        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="text-xl mb-4 p-1 bg-red-100 rounded-full text-red-500"
          >
            <FaTimes />
          </button>
        </div>
        {/* Adjusted grid layout */}
        <div className="grid grid-cols-1 gap-4">
          <div className="slide-container">
            <Slide {...properties}>
              {project.images.map((each, index) => (
                <div key={index} className="each-slide">
                  <img
                    src={each}
                    alt={`Slide ${index}`}
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              ))}
            </Slide>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 font-comfortaa">
              {project.title}
            </h3>
            <p className="mb-4 font-comfortaa">{project.description}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
              >
                <FaPlay className="mr-2" /> Demo
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900 transition"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPopup;
