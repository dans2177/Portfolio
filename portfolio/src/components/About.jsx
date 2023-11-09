import React from "react";

// Define the array of sections at the top of the file
const sections = [
  {
    title: "The Spark in 7th Grade",
    description:
      "Ever since I assembled my first 3D printer from a kit of hundreds of pieces back in 7th grade, technology has been more than just a passion—it's been my calling. What started as a playful hobby to create fidget toys (that my teachers weren't too fond of) evolved into something far greater.",
    imgSrc: "/Chapter_1.png",
  },
  {
    title: "The High School Chapter",
    description:
      "In high school, I mastered 3D printing, helping set up our school's lab and planning to develop a student lesson plan. But as COVID-19 hit, I pivoted, taking the lab's equipment home to produce and donate medical supplies. This shift turned a global crisis into a personal opportunity to contribute meaningfully.",
    imgSrc: "/Chapter_2.png",
  },
  {
    date: "",
    title: "The College Years",
    description:
      "As I transitioned into my college life at Grand Canyon University, my curiosity steered me toward coding. It became more than just an academic endeavor; it became the backbone of several projects I undertook. My most notable project? A sophisticated filament tracker for 3D printers.",
    imgSrc: "/Chapter_3.png",
  },
];

function About() {
  return (
    <div className="max-w-2xl mt-40 mx-auto sm:justify-center sm:align-middle bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-xl">
      <section className="m-4">
        <h2 className="text-6xl pb-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600 text-center sm:text-left">
          About Me
        </h2>

        <div className="flex flex-col-reverse sm:flex-row items-center mt-4">
          {/* Text on the left for large screens and below image for small screens */}
          <div className="sm:w-1/2 sm:pr-8">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg">
              <ul className="list-disc space-y-4 font-semibold text-gray-100 text-lg text-center sm:text-left pl-5">
                <li>Business Management Major</li>
                <li>Self-taught Developer</li>
                <li>3D Printing Expert</li>
                <li>Innovative Problem Solver</li>
                <li>
                  Driven by Dedication, and Dedicated to Servant Leadership
                </li>
              </ul>
            </div>
          </div>
          {/* Image on the right for large screens and on top for small screens */}
          <div className="flex-shrink-0 sm:w-1/2 sm:pl-8">
            <img
              src="/Handsome.jpeg"
              alt="About Me"
              className="rounded-full w-64 h-64 mb-4 sm:mb-0 mx-auto sm:mx-0 object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      <ol className="relative border-l-2 border-grey-400 mt-20">
        <h2 className=" text-4xl p-6 font-prata text-amber-400">
          Timeline into Tech
        </h2>
        {sections.map((section, index) => (
          <li
            key={index}
            className="mb-10 ml-4 flex flex-col md:flex-row items-center bg-black bg-opacity-40 p-4 m-4 rounded-xl"
          >
            <div className="absolute left-0 -ml-3 mt-2 w-6 h-6 bg-amber-400 rounded-full border-2 border-black"></div>

            <img
              src={section.imgSrc}
              alt={section.title}
              className="rounded-full w-48 h-48 mb-4 md:mb-0 md:ml-4 md:w-64 md:h-64 md:order-last"
            />

            <div className="flex-grow max-w-3xl md:order-first">
              <h3 className="text-lg font-semibold font-prata text-amber-400">
                {section.title}
              </h3>
              <p className="text-base font-prata text-gray-200">
                {section.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default About;
