import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion"; // Removed AnimatePresence as it's unused
import { useInView } from "react-intersection-observer"; // Import Intersection Observer hook
import { FaDownload } from "react-icons/fa6";

const education = [
  {
    institution: "Grand Canyon University",
    degree: "Bachelor's Degree in Business Management",
    gpa: "3.5 GPA",
    year: "August 2021 - December 2024 (Expected)",
    details:
      "Participated in Intramural Sports and Local Outreach. Graduating a semester early.",
  },
  {
    institution: "Sioux Falls Christian",
    degree: "High School Diploma",
    gpa: "3.8 GPA",
    year: "August 2017 - December 2020",
    details:
      "Participated in Debate, Football, Track, Mentorship, and Community Outreach. Graduated with High Honors Roll.",
  },
];

const certifications = [
  {
    title: "Full Stack Software Engineering Certification",
    issuer: "Codecademy",
    dateRange: "November 2022 - June 2023",
  },
  {
    title: "Certified ScrumMaster® (CSM®)",
    issuer: "Scrum Alliance",
    date: "June 2023",
    validUntil: "June 2025",
    credentialID: "1794821",
  },
];

const volunteer = [
  {
    role: "City Hope",
    duration: "March 2023 - ...",
    details:
      "Shopped with locals at a food bank sponsered by Christ Church that is set up as a grocery store so we can connect with individuals as they walk through.",
  },
  {
    role: "Audio Visual Technician",
    duration: "July 2017 - 2022",
    details:
      "Managed sound and visual systems during Sunday worship services at Abiding Savior Lutheran Church.",
  },
  {
    role: "Rotary International",
    details:
      "Participated in events that provided a safe and inclusive space for children with special needs.",
  },
  {
    role: "The Banquet",
    details:
      "Served and prepared meals for homeless and low-income families, and provided a listening ear.",
  },
  {
    role: "Operation Christmas Child",
    details:
      "Participated in a trip to a distribution center, where our group sorted and packed gifts for Operation Christmas Child.",
  },
  {
    role: "3D Printer Operator for COVID-19 Relief",
    details:
      "Utilized 3D printing skills to produce medical supplies to be donated, contributing to pandemic relief efforts.",
  },
];

const professionalExperience = [
  {
    role: "Technical Support Specialist (Tier 2)",
    company: "SKED Software",
    period: "April 2024 - Current",
    tasks: [
      "Promoted to Tier 2 Support swiftly by demonstrating advanced technical skills and a strong development background.",
      "Designed and developed internal applications using JavaScript frameworks to streamline company operations, enhancing productivity and saving hundreds of hours.",
      "Collaborated with the development team to identify, debug, and resolve software issues, thereby improving overall product quality and user satisfaction.",
      "Executed complex database queries and identified data discrepancies to enhance data integrity and optimize application performance.",
      "Developed and tested APIs with Postman to ensure the reliability and efficiency of office server integrations.",
      "Managed and resolved intricate technical support tickets, providing solutions that supported both office operations and customer needs.",
    ],
  },
  {
    role: "AI Workshop Instructor",
    company: "Independent",
    period: "September 2023",
    tasks: [
      "Collaborated with Primerica’s regional president to design and deliver a comprehensive AI curriculum for over 100 financial professionals, effectively simplifying complex concepts through practical software applications.",
      "Led individual and group hands-on training sessions and provided personalized mentoring to enhance participants’ proficiency with AI tools, ensuring diverse learning needs were met and fostering a deep understanding of AI integration in financial services.",
    ],
  },
  {
    role: "Business Operations Intern",
    company: "Highest Health Chiropractic",
    period: "April - November 2023",
    tasks: [
      "Coordinated the company's relocation by managing tech setup.",
      "Head of project for the transition to digital forms, significantly reducing paperwork.",
      "Managed data entry tasks with precision, ensuring accuracy across all systems.",
      "Delivered exceptional customer service, addressing concerns and enhancing satisfaction.",
    ],
  },
  {
    role: "Data Entry Clerk",
    company: "Primerica",
    period: "October 2018 - April 2022",
    tasks: [
      "Accurately transferred client data from paper documents to a digital database, ensuring error-free and timely data entry.",
      "Maintained strict confidentiality and adhered to data privacy regulations.",
      "Conducted regular quality checks to ensure the integrity of database entries.",
      "Worked closely with team members to streamline data entry processes and improve efficiency.",
    ],
  },
  // Uncomment and update if needed
  // {
  //   role: "Team Member",
  //   company: "GreatLIFE Golf and Fitness",
  //   period: "December 2019 - July 2021",
  //   tasks: [
  //     "Served as the primary point of contact for members and guests, ensuring a smooth check-in and check-out process.",
  //     "Handled membership sign-ups and liaised with insurance companies to verify coverage for new members.",
  //     "Effectively resolved customer complaints to maintain a positive environment.",
  //     "Ensured the facility was clean and compliant with CDC standards.",
  //   ],
  // },
];

function Resume() {
  // Animation controls for different sections
  const headingControls = useAnimation();
  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const workControls = useAnimation();
  const [workRef, workInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const volunteerControls = useAnimation();
  const [volunteerRef, volunteerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const certificationsControls = useAnimation();
  const [certificationsRef, certificationsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const educationControls = useAnimation();
  const [educationRef, educationInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Trigger animations when elements come into view
  useEffect(() => {
    if (headingInView) {
      headingControls.start("visible");
    }
    if (workInView) {
      workControls.start("visible");
    }
    if (volunteerInView) {
      volunteerControls.start("visible");
    }
    if (certificationsInView) {
      certificationsControls.start("visible");
    }
    if (educationInView) {
      educationControls.start("visible");
    }
  }, [
    headingInView,
    headingControls,
    workInView,
    workControls,
    volunteerInView,
    volunteerControls,
    certificationsInView,
    certificationsControls,
    educationInView,
    educationControls,
  ]);

  // Define animation variants for different sections
  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <div className="container mt-10 mx-auto sm:p-4 max-w-6xl">
      {/* Animated Resume Heading with Download Button */}
      <motion.div
        ref={headingRef}
        variants={headingVariants}
        initial="hidden"
        animate={headingControls}
        className="flex flex-row justify-center sm:justify-start  items-center mb-8"
      >
        <h2 className="text-4xl md:text-6xl pl-4 font-prata text-gray-900 dark:text-gray-100 text-center sm:text-left">
          Resume
        </h2>
        <a href="./Daniel Shemon - Resume .pdf" download>
          <button className="bg-blue-500 ml-5 w-8 h-8 rounded-full transition duration-300">
            <FaDownload className="inline " />
          </button>
        </a>
      </motion.div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 bg-white dark:bg-black bg-opacity-40 p-4 m-4 border-2 gap-0.5 border-black rounded-lg md:grid-cols-3 lg:gap-4 text-white">
        {/* Work Experience Section - takes up two columns on medium screens */}
        <motion.div
          ref={workRef}
          variants={sectionVariants}
          initial="hidden"
          animate={workControls}
          className="md:col-span-2 border-b md:border-b-0 border-black pb-4 md:pb-0"
        >
          <h2 className="text-xl font-comfortaa text-left m-4 text-amber-700 dark:text-amber-500 hover:text-amber-600 dark:hover:text-amber-700 mb-5">
            Work Experience
          </h2>
          {professionalExperience.map((exp, index) => (
            <motion.div
              key={index}
              className="m-6 p-4 rounded-lg bg-gray-200 dark:bg-gray-800 hover:shadow-lg transform transition duration-500"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <h3 className="font-bold text-gray-800 dark:text-white text-lg">
                {exp.role} - {exp.company}
              </h3>
              <p className="italic text-gray-700 dark:text-gray-400">
                {exp.period}
              </p>
              <ul className="list-disc list-inside space-y-2">
                {exp.tasks.map((task, taskIndex) => (
                  <li
                    key={taskIndex}
                    className="text-gray-900 dark:text-gray-200 pl-4 max-w-3xl"
                  >
                    {task}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Volunteer Section - takes up one column on medium screens */}
        <motion.div
          ref={volunteerRef}
          variants={sectionVariants}
          initial="hidden"
          animate={volunteerControls}
          className="md:col-span-1 border-b md:border-b-0 border-black pb-4 md:pb-0"
        >
          <h2 className="text-xl font-comfortaa text-left text-purple-800 dark:text-purple-400 dark:hover:text-purple-600 hover:text-purple-700 m-4">
            Volunteer Work
          </h2>
          {volunteer.map((vol, index) => (
            <motion.div
              key={index}
              className="m-6 p-4 rounded-lg bg-gray-200 dark:bg-gray-800 hover:shadow-lg transform transition duration-500"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                {vol.role}
              </h3>
              <p className="text-gray-900 dark:text-gray-200">{vol.details}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section - takes up one column */}
        <motion.div
          ref={certificationsRef}
          variants={sectionVariants}
          initial="hidden"
          animate={certificationsControls}
          className="md:col-span-1 border-b md:border-b-0 border-black pb-4 md:pb-0"
        >
          <h2 className="text-xl font-comfortaa text-left m-4 text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-900">
            Certifications
          </h2>
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="m-6 p-4 rounded-lg bg-gray-200 dark:bg-gray-800 hover:shadow-lg transform transition duration-500"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-900 dark:text-gray-300">
                {cert.issuer} - {cert.date}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Section - takes up two columns on medium screens */}
        <motion.div
          ref={educationRef}
          variants={sectionVariants}
          initial="hidden"
          animate={educationControls}
          className="md:col-span-2"
        >
          <h2 className="text-xl font-comfortaa text-left m-4 text-green-600 dark:text-green-400 hover:text-green-900 dark:hover:text-green-600">
            Education
          </h2>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="m-6 p-4 rounded-lg bg-gray-200 dark:bg-gray-800 hover:shadow-lg transform transition duration-500"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <h3 className="font-bold text-gray-800 dark:text-white">
                {edu.institution}
              </h3>
              <p className="italic text-gray-900 dark:text-gray-400">
                {edu.year}
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-gray-900 dark:text-gray-200 pl-4 max-w-3xl">
                  {edu.degree}
                </li>
                <li className="text-gray-900 dark:text-gray-200 pl-4 max-w-3xl">
                  {edu.details}
                </li>
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* References Section - centered below the grid */}
      <div className="flex justify-center">
        <p className="text-black dark:text-white">
          References available upon request.
        </p>
      </div>
    </div>
  );
}

export default Resume;
