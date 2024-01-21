import React from "react";
import { FaDownload } from "react-icons/fa"; // Importing the download icon from React Icons

function Resume() {
  const education = [
    {
      institution: "Grand Canyon University",
      degree: "Bachelor's Degree in Business Administration",
      year: "2021-2025 (Expected)",
      details:
        "Active involvement in recreational sports and community service groups on campus.",
    },
    {
      institution: "Sioux Falls Christian",
      degree: "High School Diploma",
      year: "2017 – 2021",
      details:
        "Graduated with High Honors Roll, participated in sports and debate, and mentored elementary school children.",
    },
  ];

  const certifications = [
    {
      title: "Full-Stack Engineer Career Path",
      issuer: "Codecademy",
      date: "Jun 2023",
    },
    {
      title: "Certified ScrumMaster® (CSM®)",
      issuer: "Scrum Alliance",
      date: "Jun 2023",
      validUntil: "Jun 2025",
      credentialID: "1794821",
    },
  ];

  const volunteer = [
    {
      role: "3D Printer Operator for COVID-19 Relief",
      details:
        "Utilized 3D printing skills to produce medical supplies to be donated, contributing to pandemic relief efforts.",
    },
    {
      role: "Audio Visual Technician ",
      duration: "Jul 2017-22",
      details:
        "Managed sound and visual systems during Sunday worship services at Abiding Savior Lutheran Church.",
    },
    {
      role: "Rotary International",
      details:
        "Participated in events that provided a safe and inclusive space for children with unique needs.",
    },
    {
      role: "The Banquet",
      details:
        "Serving and preparing meals for homeless and low-income families, as well as be someone that will listen to them.",
    },
    {
      role: "Operation Christmas Child",
      details:
        "Participated in a trip to a distribution center, where our group sorted and packed gifts for Operation Christmas Child.",
    },
  ];

  const professionalExperience = [
    {
      role: "Business Operations Intern",
      company: "Highest Health Chiropractic",
      period: "April - August 2023",
      tasks: [
        "Tech Setup during Office Relocation: Coordinated the company's move to a new location, ensuring all tech equipment was set up for a seamless transition.",
        "Going Paperless: Created a plan to switch to digital forms for all office paperwork and finished on schedule.",
        "Data Management: Responsible for data entry tasks, ensuring high levels of accuracy across all systems.",
        "Customer Interaction: Actively engaged with customers to provide professional service and address any concerns.",
      ],
    },
    {
      role: "Team Member",
      company: "GreatLIFE Golf and Fitness",
      period: "December 2019 - July 2021",
      tasks: [
        "Served as the primary point of contact for members and guests, ensuring a smooth check-in and check-out process.",
        "Handled membership sign-ups and liaised with insurance companies to verify coverage for new members.",
        "Effectively resolved customer complaints to maintain a positive environment.",
        "Ensured the facility was clean and compliant with CDC standards.",
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
    {
      role: "AI Workshop Instructor",
      company: "Independent",
      period: "September 2023",
      tasks: [
        "Developed and delivered a comprehensive curriculum to over 100 business professionals, covering the basics and applications of ChatGPT and AI in business.",
        "Provided practical, hands-on training sessions to enhance participants' understanding and skills in using ChatGPT and AI tools.",
        "Ensured each participant's understanding through one-on-one mentoring upon request, tailoring the guidance to meet diverse learning needs.",
      ],
      // Add more professional experiences as needed
    },
  ];

  // Add your download resume logic here
  const handleDownloadResume = () => {
    console.log("Download resume functionality to be implemented");
  };

  return (
    <>
      <div className="container mt-10 mx-auto p-4 max-w-6xl ">
        <h2 className="text-4xl md:text-6xl pl-4 font-prata text-gray-900 dark:text-gray-100 text-center sm:text-left">
          Resume
        </h2>
        {/* Grid Container */}
        <div className="grid grid-cols-1 bg-white dark:bg-black bg-opacity-40 p-4 m-4 border-2 border-black rounded-lg md:grid-cols-3 gap-4 text-white">
          {/* Work Experience Section - takes up two columns on medium screens */}
          <div className="md:col-span-2 border-b md:border-b-0 border-black pb-4 md:pb-0">
            <h2 className="text-xl font-comfortaa text-left p-4 m-4 text-amber-700 dark:text-amber-500 mb-5">
              Work Experience
            </h2>
            {professionalExperience.map((exp, index) => (
              <div
                key={index}
                className="m-6 p-4 shadow-lg rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-amber-600  dark:hover:bg-amber-700 transform transition duration-500 "
              >
                <h3 className="font-bold text-gray-800 dark:text-white hover:text-white text-lg">
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
              </div>
            ))}
          </div>

          {/* Volunteer Section - takes up one column on medium screens */}
          <div className="md:col-span-1 border-b md:border-b-0 border-black pb-4 md:pb-0">
            <h2 className="text-xl font-comfortaa text-left text-purple-800 dark:text-purple-400 m-4 p-4 ">
              Volunteer Work
            </h2>
            {volunteer.map((vol, index) => (
              <div
                key={index}
                className="m-6 p-4 shadow-lg rounded-lg bg-gray-200 dark:bg-gray-800 transform transition duration-500  dark:hover:bg-purple-800 hover:bg-purple-800"
              >
                <h3 className="font-bold text-gray-900 hover:text-white dark:text-white text-lg mb-2">
                  {vol.role}
                </h3>
                <p className="text-gray-900 dark:text-gray-200">
                  {vol.details}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications Section - takes up one column */}
          <div className="md:col-span-1 border-b md:border-b-0 border-black pb-4 md:pb-0">
            <h2 className="text-xl font-comfortaa text-left m-4 p-4 text-blue-600 dark:text-blue-400">
              Certifications
            </h2>
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="m-6 p-4 shadow-lg rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-blue-900 dark:hover:bg-blue-900 transform transition duration-500 "
              >
                <h3 className="font-bold text-gray-900 hover:text-white dark:text-white text-lg mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-900 dark:text-gray-300">
                  {cert.issuer} - {cert.date}
                </p>
              </div>
            ))}
          </div>

          {/* Education Section - takes up two columns on medium screens */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-comfortaa text-left m-4 p-4 text-green-600 dark:text-green-400">
              Education
            </h2>
            {education.map((edu, index) => (
              <div
                key={index}
                className="m-6 p-4 shadow-lg rounded-lg bg-gray-200  dark:bg-gray-800 hover:bg-green-900 transform transition duration-500 "
              >
                <h3 className="font-bold text-gray-800 hover:text-white dark:text-white">
                  {edu.institution}
                </h3>
                <p className="italic text-gray-900 dark:text-gray-400">
                  {edu.year}
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li className="text-gray-900 dark:text-gray-300 pl-4 max-w-3xl">
                    {" "}
                    {edu.degree}{" "}
                  </li>
                  <li className="text-gray-900 dark:text-gray-300 pl-4 max-w-3xl">
                    {" "}
                    {edu.details}{" "}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Download Resume Button - centered below the grid */}
        <div className="flex justify-center ">
          <button
            onClick={handleDownloadResume}
            className="flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-amber-400 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400"
          >
            <FaDownload className="mr-2" />
            Download Resume
          </button>
        </div>
      </div>
    </>
  );
}
export default Resume;
