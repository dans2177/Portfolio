import { useState } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

// Define the array of sections at the top of the file
const sections = [
  {
    title: "The Spark in 7th Grade",
    description:
      "I assembled my first 3D printer from a kit of hundreds of pieces back in 7th grade, technology has always been a hobby. What started as a playful hobby to create fidget toys (that my teachers weren't too fond of) evolved into something I would have a passion for.",
    imgSrc: "/Chapter_1.png",
  },
  {
    title: "The High School Chapter",
    description:
      "In high school, I was recognized for my 3D printing knowledge and was asked to help set up our lab and develop a student lesson plan. But as COVID-19 hit, I pivoted, taking the lab's equipment home to produce and donate medical supplies.",
    imgSrc: "/Chapter_2.png",
  },
  {
    date: "",
    title: "The College Years",
    description:
      " As I transitioned into my college life at Grand Canyon University, my curiosity steered me toward coding. It became more than just an academic endeavor; it became the backbone of several projects I undertook. I fell in love with the process, community, and power of coding.",
    imgSrc: "/Chapter_3.png",
  },
];

function About() {
  const [isTimelineExpanded, setIsTimelineExpanded] = useState(false);
  const toggleTimeline = () => setIsTimelineExpanded(!isTimelineExpanded);

  return (
    <div className="container mt-10 md:mt-20  mx-auto p-4 max-w-6xl ">
      <h2 className="text-4xl md:pl-4 md:text-6xl  font-prata pb-6 f text-transparent bg-clip-text bg-gray-900 dark:bg-gray-200 text-center  sm:text-left">
        About Me
      </h2>
      <div className="max-w-4xl mx-auto sm:justify-center sm:align-middle bg-gray-100 dark:bg-gray-900 p-6 rounded-lg dark:shadow-xl">
        <section className="m-4">
          <div className="flex flex-col sm:flex-row items-center border-b-2 pb-4 border-orange-500">
            <div className="sm:w-1/2">
              {/* Image below the title on small screens */}
              <div className="block sm:hidden">
                <img
                  src="/Handsome.jpg"
                  alt="About Me"
                  className="rounded-full w-80 h-80 mb-4 mx-auto object-cover shadow-lg"
                />
              </div>

              <div className=" dark:bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg">
                <h3 className="text-lg pb-4 font-comfortaa text-gray-900 dark:text-white">
                  I embarked on
                  a self-taught coding journey while pursuing a business
                  management degree at Grand Canyon University.
                  <br />
                  <br />
                  Passionate about technology and servant leadership, I am
                  committed to using my skills to serve and innovate.
                  <br />
                  <br />
                  With a keen attention to detail and a ScrumMaster(CSM)
                  certification, I strive for excellence in every project,
                  aiming to deliver solutions that meet high quality and user
                  experience standards. My dedication to making a positive
                  impact through technology drives my professional journey.
                  <br />
                  <br />
                  This website is to showcase how far I have come...
                </h3>
              </div>
            </div>

            {/* Image on the right for large screens */}
            <div className="hidden sm:block sm:w-1/2 sm:pl-8">
              <img
                src="/Handsome.jpg"
                alt="About Me"
                className="rounded-full w-80 h-80 mb-4 sm:mt-4 md:ml-10 mx-32 sm:mx-0 object-cover shadow-lg"
              />
            </div>
          </div>
        </section>

        <div className="md:mt-10">
          <h2
            onClick={toggleTimeline}
            className="text-2xl md:text-4xl font-prata text-gray-900 hover:text-orange-500 dark:hover:text-orange-500 dark:text-gray-100 cursor-pointer"
          >
            Timeline into Tech
            {/* Icon button to toggle the expand/collapse of the timeline */}
            <button className=" ">
              {isTimelineExpanded ? <MdExpandLess /> : <MdExpandMore />}
            </button>
          </h2>
          <div className="relative border-l-2 border-grey-400 md:mx-12">
            {/* Conditional rendering based on isTimelineExpanded */}
            {isTimelineExpanded && (
              <ol>
                {sections.map((section, index) => (
                  <li
                    key={index}
                    className="mb-10 ml-4 flex flex-col md:flex-row items-center bg-black bg-opacity-10 p-4 m-4 rounded-xl"
                  >
                    <div className="absolute left-0 -ml-3 mt-2 w-6 h-6 bg-orange-600 rounded-full border-2 border-black"></div>

                    <img
                      src={section.imgSrc}
                      alt={section.title}
                      className="rounded-full w-48 h-48 mb-4 md:mb-0 md:ml-4 md:w-64 md:h-64 md:order-last"
                    />

                    <div className="flex flex-col justify-between flex-grow max-w-3xl md:order-first">
                      <h3 className="text-2xl pb-4 font-comfortaa  text-orange-600 dark:text-amber-400">
                        {section.title}
                      </h3>
                      <p className="pt-6 text-lg font-comfortaa dark:text-gray-200">
                        {section.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
