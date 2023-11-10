import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPrint, // Importing the assumed 3D printing icon
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
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
      icon: <SiTailwindcss className="text-green-600" size="4em" />,
    },
    {
      skill: "Node.js",
      icon: <FaNodeJs className="text-green-500" size="4em" />,
    },
    {
      skill: "MongoDB",
      icon: <SiMongodb className="text-green-400" size="4em" />,
    },
    {
      skill: "CAD",
      icon: <GiGearHammer className="text-gray-600" size="4em" />,
    },
    // Adding the 3D Printing skill
    {
      skill: "3D Printing",
      icon: <FaPrint className="text-purple-600" size="4em" />, // Using FaPrint as the 3D printing icon
    },
  ];

  return (
    <div className="max-w-2xl mt-20 mx-auto sm:justify-center sm:align-middle bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-xl">
      <div className="m-4">
        <h2 className="text-6xl pb-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600 text-center sm:text-left">
          Skills
        </h2>
        <ul className="list-none flex flex-wrap justify-center">
          {skillSet.map((skillItem, index) => (
            <li
              key={index}
              className="flex flex-col items-center p-4 transition-transform duration-300 hover:scale-110"
            >
              {skillItem.icon}
              <span className="mt-2">{skillItem.skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
