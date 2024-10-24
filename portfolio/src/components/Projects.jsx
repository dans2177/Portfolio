import React, { useState, useEffect } from "react";
import { FaRegWindowMaximize } from "react-icons/fa";
import ProjectsPopup from "./ProjectsPopup";
import img1 from "../img_3d_logbook/pi1.png";
import img2 from "../img_3d_logbook/pi2.png";
import img3 from "../img_3d_logbook/pi3.png";
import img4 from "../img_3d_logbook/pi4.png";
import img5 from "../img_3d_logbook/pi5.png";
import img6 from "../img_3d_logbook/pi6.png";
import img7 from "../img_cookbook/pi1.png";
import img8 from "../img_cookbook/pi2.png";
import img9 from "../img_cookbook/pi3.png";
import img10 from "../img_cookbook/pi4.png";

import img11 from "../img_productivity/img1.png";
import img12 from "../img_productivity/img2.png";
import img13 from "../img_productivity/img3.png";
import img14 from "../img_productivity/img4.png";
import img15 from "../img_productivity/img5.png";
import img16 from "../img_productivity/img6.png";

import img17 from "../img_map/pi1.png";
import img18 from "../img_map/pi2.png";
import img19 from "../img_map/pi3.png";
import img20 from "../img_map/pi4.png";
import img21 from "../img_map/pi5.png";

import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import {
  SiRedux,
  SiVite,
  SiTailwindcss,
  SiAuth0,
  SiExpress,
} from "react-icons/si";

import { AiTwotoneApi } from "react-icons/ai";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";

function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Animation controls for the Projects section
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Disable scrolling when the modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to ensure scroll is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);

  // Define animation variants for the Projects container
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  // Define animation variants for each project card
  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const getTechIcon = (tech) => {
    switch (tech) {
      case "React":
        return <FaReact size={28} className="text-blue-500" />;
      case "Node.js":
        return <FaNodeJs size={28} className="text-green-600" />;
      case "MongoDB":
        return <FaDatabase size={28} className="text-green-700" />;
      case "Redux":
        return <SiRedux size={28} className="text-purple-600" />;
      case "Vite":
        return <SiVite size={28} className="text-blue-600" />;
      case "TailwindCSS":
        return <SiTailwindcss size={28} className="text-teal-400" />;
      case "Auth0":
        return <SiAuth0 size={28} className="text-orange-500" />;
      case "Mapbox API":
        return <AiTwotoneApi size={28} className="text-blue-500" />;
      case "Express.js":
        return (
          <SiExpress
            size={28}
            className="text-yellow-800 dark:text-yellow-200"
          />
        );
      default:
        return null;
    }
  };

  const projects = [
    {
      title: "Provider Map",
      description:
        "A web application that serves as a landing page and map to help users find office locations for a company. It provides an intuitive interface where users can search for offices by ZIP code and view detailed information about each location.",
      imageUrl: "./Provider_Map.webp",
      link: "https://github.com/dans2177/Map",
      demo: "https://map-seven-phi.vercel.app/",
      linkType: "website",
      images: [img17, img18, img19, img20, img21],
      techStack: ["React", "TailwindCSS", "Mapbox API"],
    },
    {
      title: "Habit Logbook",
      description:
        "This productivity app, built with MongoDB, Express.js, React, Redux, Auth0, and Node.js, showcases a modern approach to full-stack development, integrating essential technologies and coding concepts for a seamless user experience.",
      features: [
        {
          name: "JWT Authentication with Auth0",
          details:
            "The app leverages JSON Web Tokens (JWT) for secure authentication and authorization. By integrating Auth0, the app ensures user data is protected while providing a smooth login experience.",
        },
        {
          name: "CRUD Operations",
          details:
            "The app employs RESTful API principles to manage Create, Read, Update, and Delete (CRUD) operations across various features like Projects, Daily To-Do, Journal, and more. MongoDB serves as the NoSQL database, efficiently handling these operations.",
        },
        {
          name: "Asynchronous Programming with Node.js",
          details:
            "The server-side logic is built using asynchronous patterns in Node.js, ensuring non-blocking operations, especially for I/O-bound tasks. This contributes to the app's performance and scalability.",
        },
        {
          name: "State Management with Redux",
          details:
            "Redux is used to manage the application state across different components, ensuring a predictable and consistent data flow. This is particularly important for features like the Focus Timer, Daily To-Do, and Projects, where real-time updates are crucial.",
        },
        {
          name: "Modular Architecture",
          details:
            "The app follows a modular architecture, with different modules handling specific functionalities like task management, journaling, and project tracking. This separation of concerns makes the codebase more maintainable and scalable.",
        },
        {
          name: "Responsive Design with React",
          details:
            "The front-end is built with React, ensuring a responsive and intuitive user interface. Tailwind CSS is utilized for styling, allowing for rapid UI development with a clean and modern design.",
        },
        {
          name: "Middleware for Enhanced Functionality",
          details:
            "Express.js middleware is used to handle tasks such as logging, error handling, and input validation, ensuring a robust and secure back-end.",
        },
        {
          name: "Data Persistence with MongoDB",
          details:
            "MongoDB's flexible schema design allows for the efficient storage and retrieval of user data, supporting the app’s diverse features like the Backlog, Food Logbook, and Project management.",
        },
        {
          name: "Task Scheduling",
          details:
            "The app incorporates task scheduling techniques to reset daily habits and to-do lists at midnight, ensuring users start each day fresh. This could involve the use of cron jobs or similar scheduling utilities in Node.js.",
        },
        {
          name: "Pending Features with Future Enhancements",
          details:
            "The architecture is designed to accommodate upcoming features like the Fitness Tracker and Budget Tracker, ensuring the app remains extendable and adaptable to future needs.",
        },
      ],
      imageUrl: "./productivity.webp",
      link: "https://github.com/dans2177/ProducitivyPlanner-Frontend",
      linkType: "github",
      demo: "https://www.habitlogbook.com/",
      images: [img12, img11, img13, img15, img14, img16],
      techStack: [
        "MongoDB",
        "Express.js",
        "React",
        "Redux",
        "Auth0",
        "Node.js",
      ],
    },
    {
      title: "Filament Tracker",
      description:
        "( Full Stack ) Material monitoring solution for 3D printing enthusiasts to track and manage their filament supplies. It leverages MongoDB, Express.js, React, Redux, Auth0, and Node.js to ensure a responsive and intuitive user experience for efficient inventory management.",
      imageUrl: "/Filament_Tracker.png",
      link: "https://github.com/dans2177/Box3D-Frontend",
      linkType: "github",
      demo: "https://www.3dlogbook.com/",
      images: [img1, img2, img3, img4, img5, img6],
      techStack: [
        "MongoDB",
        "Express.js",
        "React",
        "Redux",
        "Auth0",
        "Node.js",
      ],
    },
    {
      title: "Family Cookbook",
      description:
        "( Frontend: Vite + TailwindCSS ) A digital repository for my family to share and cherish generations of recipes. Keeping our culinary heritage at our fingertips.",
      imageUrl: "./Shemon_Cookbook.webp",
      link: "https://github.com/dans2177/Shemon-Cookbook",
      linkType: "github",
      demo: "https://www.shemoncookbook.com/",
      images: [img7, img8, img9, img10],
      techStack: ["Vite", "TailwindCSS"],
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 pt-20 sm:justify-center items-center sm:align-middle ">
      {/* Animated Projects Heading */}
      <motion.h2
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="text-4xl md:pl-4 md:text-6xl pb-8 font-prata text-gray-900 dark:text-gray-200 text-center sm:text-left"
      >
        Projects
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group flex flex-col rounded-lg bg-white shadow-lg dark:bg-gray-900"
            variants={projectVariants}
            whileHover={{ scale: 1.05 }} // Smooth hover scaling with Framer Motion
            transition={{ type: "spring", stiffness: 300 }}
          >
            <button
              onClick={() => openModal(project)}
              className="relative flex flex-col h-full text-left w-full"
            >
              <motion.img
                src={project.imageUrl}
                alt={`Project ${project.title}`}
                className="object-cover w-full h-48 md:h-48 rounded-t-lg"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 bg-black rounded-lg bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon only visible on hover */}
                <FaRegWindowMaximize className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <div className="p-4 flex flex-col justify-between h-full w-full">
                <h3 className="text-xl pb-4 text-center font-semibold font-comfortaa dark:text-amber-400 mt-4">
                  {project.title}
                </h3>
                <div className="flex flex-col justify-start h-full pt-4 pb-2">
                  <div className="flex flex-wrap gap-3 justify-center">
                    {/* Tech Stack Icons */}
                    {project.techStack.map((tech, idx) => (
                      <div
                        key={idx}
                        className="flex justify-center items-center"
                      >
                        <div className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-lg">
                          <div className="w-6 h-6 flex justify-center items-center">
                            {getTechIcon(tech.trim())}
                          </div>
                          <span className="text-xs md:text-sm dark:text-gray-200">
                            {tech.trim()}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal Popup with AnimatePresence for smooth entry and exit */}
      <AnimatePresence>
        {modalOpen && selectedProject && (
          <ProjectsPopup
            project={selectedProject}
            closeModal={() => setModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Projects;
