import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import { GiGearHammer } from "react-icons/gi"; // Assuming this for CAD

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
    }, // This represents CAD
  ];

  return (
    <div className="max-w-2xl mx-auto mt-20 p-4 sm:justify-center sm:align-middle">
      <h2 className="text-6xl py-8 font-prata text-amber-400 text-center sm:text-left">
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
  );
}

export default Skills;
