import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaLock,
  FaPrint, // Importing the assumed 3D printing icon
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiRedux } from "react-icons/si";
import { GiGearHammer } from "react-icons/gi";

function Skills() {
  const skillSet = [
    { skill: "HTML", icon: <FaHtml5 className="text-red-600" size="4em" /> },
    { skill: "CSS", icon: <FaCss3Alt className="text-blue-600" size="4em" /> },
    {
      skill: "JavaScript",
      icon: <FaJsSquare className="text-yellow-600" size="4em" />,
    },
    { skill: "React", icon: <FaReact className="text-blue-400" size="4em" /> },
    {
      skill: "Tailwind",
      icon: <SiTailwindcss className="text-blue-600" size="4em" />,
    },
    {
      skill: "Node.js",
      icon: <FaNodeJs className="text-green-500" size="4em" />,
    },
    {
      skill: "MongoDB",
      icon: <SiMongodb className="text-green-600" size="4em" />,
    },

    {
      skill: "Redux",
      icon: <SiRedux className="text-purple-600" size="4em" />, // Assuming SiRedux is the icon for Redux
    },
    {
      skill: "Auth0",
      icon: <FaLock className="text-orange-500" size="4em" />, // Using FaLock as a placeholder for Auth0
    },
    {
      skill: "SQL",
      icon: <FaDatabase className="text-blue-500" size="4em" />, // Using FaDatabase for SQL
    },
    {
      skill: "3D Printing",
      icon: <FaPrint className="text-purple-600" size="4em" />, // Using FaPrint as the 3D printing icon
    },
    {
      skill: "CAD",
      icon: <GiGearHammer className="text-orange-600" size="4em" />,
    },
  ];

  return (
    <div className="container mt-10 mx-auto  sm:p-4 max-w-6xl ">
      <h2 className="text-4xl pb-4 md:text-6xl sm:pl-4 font-prata text-gray-900 dark:text-gray-100 text-center sm:text-left ">
        Skills
      </h2>
      <div className="max-w-4xl mx-auto sm:justify-center sm:align-middle bg-gray-100 dark:bg-gray-900 p-6 rounded-lg dark:shadow-xl">
        <div className="m-4 transform transition duration-500">
          <ul className="list-none flex flex-wrap justify-center">
            {skillSet.map((skillItem, index) => (
              <li
                key={index}
                className="flex flex-col items-center p-4 transition-transform duration-300 hover:scale-110"
              >
                {skillItem.icon}
                <span className="mt-2 text-gray-900 dark:text-gray-200">
                  {skillItem.skill}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
