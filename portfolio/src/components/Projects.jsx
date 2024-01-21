import React from "react";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Family Cookbook",
      description:
        "A private digital repository for our family to share and cherish generations of recipes. A simple family phrase unlocks the ability to add and edit, keeping our culinary heritage at our fingertips.",
      imageUrl: "./Shemon_Cookbook.png",
      link: "https://github.com/dans2177/Shemon-Cookbook",
      linkType: "github",
    },
    {
      title: "Filament Tracker",
      description:
        "Material monitoring solution for 3D printing enthusiasts to track and manage their filament supplies. It leverages MongoDB, Express.js, React, and Node.js to ensure a responsive and intuitive user experience for efficient inventory management.",
      imageUrl: "/Filament_Tracker.png",
      link: "https://github.com/dans2177/Box3D-Frontend",
      linkType: "github",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 pt-20 sm:justify-center sm:align-middle">
      <h2 className="text-4xl md:pl-4 md:text-6xl pb-8 font-prata text-gray-900 dark:text-gray-200 text-center sm:text-left">
        Projects
      </h2>
      <div className="max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group flex flex-col  rounded-lg bg-white shadow-lg dark:bg-gray-900 transform hover:scale-95 transition duration-300"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex flex-col h-full" // Ensure the anchor has a full height
            >
              <img
                src={project.imageUrl}
                alt={`Project ${project.title}`}
                className="object-cover w-full h-48 md:h-full rounded-t-lg"
              />
              <div className="p-4 flex flex-col justify-between h-full">
                <h3 className="text-lg pb-4 text-bold font-semibold font-comfortaa dark:text-amber-400 mt-4">
                  {project.title}
                </h3>
                <p className="text-md font-comfortaa text-gray-900 dark:text-gray-200 flex-grow">
                  {project.description}
                </p>
              </div>

              <div className="absolute inset-0 bg-black rounded-lg bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                {/* Ensure the icon is only visible on hover */}
                <FaGithub className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Projects;
