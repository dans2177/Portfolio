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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center ">
      <div className="max-w-4xl w-full m-4">
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg max-h-[85vh] overflow-y-auto shadow-inner-xl">
          <div className="flex justify-end">
            {" "}
            <button
              onClick={closeModal}
              className="text-xl m-2  p-1 bg-gray-200  hover:bg-gray-400 self-end dark:bg-red-100 dark:hover:bg-red-500 rounded-full text-red-500 dark:hover:text-red-800"
            >
              <FaTimes />
            </button>{" "}
          </div>
          <div className="grid grid-cols-1 gap-4 p-4">
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
              <h3 className="text-xl font-bold mb-2 font-comfortaa dark:text-white">
                {project.title}
              </h3>
              <p className="mb-4 font-comfortaa dark:text-white">
                {project.description}
              </p>
              {project.features && (
                <>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    Key Features:
                  </h4>
                  <ul className="list-none mb-4 text-gray-800 dark:text-gray-300 space-y-4">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div>
                          <strong className="text-blue-600 dark:text-blue-400">
                            {feature.name}:
                          </strong>
                          <span className="ml-1">{feature.details}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                  >
                    <FaPlay className="mr-2" size={22} /> Demo
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-900 transition"
                  >
                    <FaGithub className="mr-2" size={28} /> GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPopup;
