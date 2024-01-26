import React from "react";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import ProjectsPopup from "./ProjectsPopup";
import img1 from "../3d_logbook/pi1.png"
import img2 from "../3d_logbook/pi2.png"
import img3 from "../3d_logbook/pi3.png"
import img4 from "../3d_logbook/pi4.png"
import img5 from "../3d_logbook/pi5.png"
import img6 from "../3d_logbook/pi6.png"

function Projects() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);


  const projects = [
    {
      title: "Filament Tracker",
      description:
        "( Full Stack ) Material monitoring solution for 3D printing enthusiasts to track and manage their filament supplies. It leverages MongoDB, Express.js, React, Redux, Auth0 and Node.js to ensure a responsive and intuitive user experience for efficient inventory management.",
      imageUrl: "/Filament_Tracker.png",
      link: "https://github.com/dans2177/Box3D-Frontend",
      linkType: "github",
      demo: "https://www.3dlogbook.com/",
      images: [ img1, img2, img3, img4, img5, img6],
    },
    {
      title: "Family Cookbook",
      description:
        "( Frontend: Vite + TailwindCSS ) A  digital repository for my family to share and cherish generations of recipes.  Keeping our culinary heritage at our fingertips.",
      imageUrl: "./Shemon_Cookbook.png",
      link: "https://github.com/dans2177/Shemon-Cookbook",
      linkType: "github",
      demo: "https://www.shemoncookbook.com/",
    },
  ];

   const openModal = (project) => {
     setSelectedProject(project);
     setModalOpen(true);
   };

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
            <button
              onClick={() => openModal(project)}
              className="relative flex flex-col h-full text-left" // Styled like a link
            >
              <img
                src={project.imageUrl}
                alt={`Project ${project.title}`}
                className="object-cover w-full h-48 md:h-full rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black rounded-lg bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                {/* Ensure the icon is only visible on hover */}
                <FaGithub className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4 flex flex-col justify-between h-full">
                <h3 className="text-lg pb-4 text-bold font-semibold font-comfortaa dark:text-amber-400 mt-4">
                  {project.title}
                </h3>
                <p className="text-md font-comfortaa text-gray-900 dark:text-gray-200 flex-grow">
                  {project.description}
                </p>
              </div>
            </button>
          </div>
        ))}
      </div>
      {modalOpen && (
        <ProjectsPopup
          project={selectedProject}
          closeModal={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}
export default Projects;
