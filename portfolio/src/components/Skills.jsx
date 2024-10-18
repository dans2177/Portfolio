import React, {useEffect} from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaLock,
  FaPrint,
  FaGithub,
  FaAws,
  FaMobileAlt, // For React Native
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";



import { SiTailwindcss, SiMongodb, SiRedux, SiFirebase } from "react-icons/si";
import { GiGearHammer } from "react-icons/gi";

function Skills() {
  const skillSet = [
    { skill: "HTML", icon: <FaHtml5 className="text-red-600" size="2em" /> },
    { skill: "CSS", icon: <FaCss3Alt className="text-blue-600" size="2em" /> },
    {
      skill: "JavaScript",
      icon: <FaJsSquare className="text-yellow-600" size="2em" />,
    },
    { skill: "React", icon: <FaReact className="text-blue-400" size="2em" /> },
    {
      skill: "React Native",
      icon: <FaMobileAlt className="text-indigo-500" size="2em" />,
    },
    {
      skill: "Tailwind",
      icon: <SiTailwindcss className="text-blue-600" size="2em" />,
    },
    {
      skill: "Node.js",
      icon: <FaNodeJs className="text-green-500" size="2em" />,
    },
    {
      skill: "MongoDB",
      icon: <SiMongodb className="text-green-600" size="2em" />,
    },
    {
      skill: "Redux",
      icon: <SiRedux className="text-purple-600" size="2em" />,
    },
    {
      skill: "Auth0",
      icon: <FaLock className="text-orange-500" size="2em" />,
    },
    {
      skill: "SQL",
      icon: <FaDatabase className="text-blue-500" size="2em" />,
    },
    {
      skill: "Firebase",
      icon: <SiFirebase className="text-yellow-500" size="2em" />,
    },
    {
      skill: "AWS",
      icon: <FaAws className="text-orange-600" size="2em" />,
    },
    {
      skill: "3D Printing",
      icon: <FaPrint className="text-purple-600" size="2em" />,
    },
    {
      skill: "CAD",
      icon: <GiGearHammer className="text-orange-600" size="2em" />,
    },
    {
      skill: "GitHub",
      icon: <FaGithub className="text-gray-600" size="2em" />,
    },
  ];

 const controls = useAnimation();
 const [ref, inView] = useInView({
   threshold: 0.2, // Trigger when 20% of the component is visible
   triggerOnce: true, // Only trigger once
 });

 useEffect(() => {
   if (inView) {
     controls.start("visible");
   }
 }, [controls, inView]);

 // Define animation variants for the Skills container
 const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
     opacity: 1,
     transition: {
       staggerChildren: 0.1, // Faster stagger for quicker appearance
       duration: 0.5,
     },
   },
 };

 // Define animation variants for each skill item
 const itemVariants = {
   hidden: { opacity: 0, y: 20 },
   visible: { opacity: 1, y: 0 },
 };


  return (
    <div className="container mt-10 mx-auto  max-w-6xl">
      <h2 className="text-4xl pb-4 md:text-6xl sm:pl-4 font-prata text-gray-900 dark:text-gray-100 text-center sm:text-left">
        Skills
      </h2>
      <div className="max-w-5xl py-4 mx-auto sm:justify-center sm:align-middle bg-gray-100 dark:bg-gray-900  px-6 rounded-lg dark:shadow-xl">
        <motion.div
          className="m-4"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          <ul className="list-none flex flex-wrap justify-center">
            {skillSet.map((skillItem, index) => (
              <motion.li
                key={index}
                className="flex flex-col items-center p-4"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }} // Subtle hover scaling
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl mb-2 text-orange-600 dark:text-amber-400">
                  {skillItem.icon}
                </div>
                <span className="mt-2 text-gray-900 dark:text-gray-200">
                  {skillItem.skill}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
