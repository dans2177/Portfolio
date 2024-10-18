// About.jsx
import { useState, useEffect } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { motion, AnimatePresence, useAnimation } from "framer-motion"; // Import Framer Motion components
import { useInView } from "react-intersection-observer"; // Import Intersection Observer hook

// Define the array of sections at the top of the file
const sections = [
  {
    title: "The Spark in 7th Grade",
    description:
      "I assembled my first 3D printer from a kit of hundreds of pieces in 7th grade; technology has always been a hobby of mine. What started as a playful hobby to create fidget toys (that my teachers weren't too fond of) evolved into something I would have a passion for.",
    imgSrc: "/Chapter_1.png",
  },
  {
    title: "The High School Chapter",
    description:
      "In high school, I was recognized for my 3D printing knowledge and was asked to help set up our 3D printing lab and develop a student lesson plan. But as COVID-19 hit, I pivoted, taking the lab's equipment home to produce and donate medical supplies.",
    imgSrc: "/Chapter_2.png",
  },
  {
    date: "",
    title: "The College Years",
    description:
      "As I transitioned into my college life at Grand Canyon University, my curiosity steered me toward coding. It became more than just an academic endeavor; it became the backbone of several projects I undertook. I fell in love with the process, community, and power of coding.",
    imgSrc: "/Chapter_3.png",
  },
];

function About() {
  const [isTimelineExpanded, setIsTimelineExpanded] = useState(false);
  const toggleTimeline = () => setIsTimelineExpanded(!isTimelineExpanded);

  // Animation controls for different sections
  const headingControls = useAnimation();
  const image1Controls = useAnimation();
  const image2Controls = useAnimation();
  const textControls = useAnimation();
  const timelineControls = useAnimation();

  // Intersection Observers for different sections
  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [image1Ref, image1InView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [image2Ref, image2InView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [timelineRef, timelineInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Trigger animations when elements come into view
  useEffect(() => {
    if (headingInView) {
      headingControls.start("visible");
    }
    if (image1InView) {
      image1Controls.start("visible");
    }
    if (image2InView) {
      image2Controls.start("visible");
    }
    if (textInView) {
      textControls.start("visible");
    }
    if (timelineInView && isTimelineExpanded) {
      timelineControls.start("visible");
    }
  }, [
    headingInView,
    headingControls,
    image1InView,
    image1Controls,
    image2InView,
    image2Controls,
    textInView,
    textControls,
    timelineInView,
    timelineControls,
    isTimelineExpanded,
  ]);

  // Define animation variants for different sections
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const timelineVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mt-10 md:mt-20 mx-auto p-4 max-w-6xl">
      {/* Animated Heading */}
      <motion.h2
        ref={headingRef}
        variants={headingVariants}
        initial="hidden"
        animate={headingControls}
        className="text-4xl md:pl-4 md:text-6xl font-prata pb-6 text-transparent bg-clip-text bg-gray-900 dark:bg-gray-200 text-center sm:text-left"
      >
        About Me
      </motion.h2>

      <div className="max-w-4xl mx-auto sm:justify-center sm:align-middle bg-gray-100 dark:bg-gray-900 p-6 rounded-lg dark:shadow-xl">
        <section className="m-4">
          <div className="flex flex-col sm:flex-row items-center border-b-2 pb-4 border-orange-500">
            {/* Animated Image and Text */}
            <motion.div
              ref={image1Ref}
              variants={imageVariants}
              initial="hidden"
              animate={image1InView ? "visible" : "hidden"}
              className="sm:w-1/2"
            >
              {/* Image below the title on small screens */}
              <div className="block sm:hidden">
                <img
                  src="/Handsome.jpg"
                  alt="About Me"
                  className="rounded-full w-80 h-80 mb-4 mx-auto object-cover shadow-lg transform transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="dark:bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg">
                {/* Animated Text */}
                <motion.h3
                  ref={textRef}
                  variants={textVariants}
                  initial="hidden"
                  animate={textInView ? "visible" : "hidden"}
                  className="text-lg pb-4 font-comfortaa text-gray-900 dark:text-white"
                >
                  I'm a driven Software Developer pursuing a Bachelor’s Degree
                  in Business Management, set to graduate early from Grand
                  Canyon University.
                  <br />
                  <br />
                  With a blend of technical expertise and business acumen, I
                  have hands-on experience at a tech startup, managing software
                  launches, handling inquiries, developing internal full-stack
                  tools, contributing to UI/UX design, and participating in
                  Scrum planning.
                  <br />
                  <br />
                  My goal is to leverage my skills in programming, project
                  management, and leadership to drive success and innovation.
                  <br />
                  <br />
                  This website showcases my journey...
                </motion.h3>
              </div>
            </motion.div>

            {/* Image on the right for large screens */}
            <motion.div
              ref={image2Ref}
              variants={imageVariants}
              initial="hidden"
              animate={image2InView ? "visible" : "hidden"}
              className="hidden sm:block sm:w-1/2 sm:pl-8"
            >
              <img
                src="/Handsome.jpg"
                alt="About Me"
                className="rounded-full w-80 h-80 mb-4 sm:mt-4 md:ml-10 mx-32 sm:mx-0 object-cover shadow-lg transform transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          </div>
        </section>

        {/* Animated Timeline Section */}
        <motion.div
          ref={timelineRef}
          className="md:mt-10"
          initial="hidden"
          animate={timelineInView ? timelineControls : "hidden"}
        >
          <h2
            onClick={toggleTimeline}
            className="flex items-center text-2xl md:text-4xl font-prata text-gray-900 hover:text-orange-500 dark:hover:text-orange-500 dark:text-gray-100 cursor-pointer select-none"
          >
            Timeline into Tech
            {/* Icon button to toggle the expand/collapse of the timeline */}
            <motion.button
              className="ml-2 focus:outline-none"
              animate={{ rotate: isTimelineExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isTimelineExpanded ? (
                <MdExpandLess size={24} />
              ) : (
                <MdExpandMore size={24} />
              )}
            </motion.button>
          </h2>
          <AnimatePresence>
            {isTimelineExpanded && (
              <motion.div
                className="relative border-l-2 border-gray-400 md:mx-12 mt-4"
                variants={timelineVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <ol>
                  {sections.map((section, index) => (
                    <motion.li
                      key={index}
                      className="mb-10 ml-4 flex flex-col md:flex-row items-center bg-black bg-opacity-10 p-4 m-4 rounded-xl shadow-md"
                      variants={itemVariants}
                    >
                      <div className="absolute left-0 -ml-3 mt-2 w-6 h-6 bg-orange-600 rounded-full border-2 border-black"></div>

                      <img
                        src={section.imgSrc}
                        alt={section.title}
                        className="rounded-full w-48 h-48 mb-4 md:mb-0 md:ml-4 md:w-64 md:h-64 md:order-last object-cover shadow-lg transform transition-transform duration-500 hover:scale-105"
                      />

                      <div className="flex flex-col justify-between flex-grow max-w-3xl md:order-first">
                        <h3 className="text-2xl pb-4 font-comfortaa text-orange-600 dark:text-amber-400">
                          {section.title}
                        </h3>
                        <p className="pt-6 text-lg font-comfortaa dark:text-gray-200">
                          {section.description}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ol>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default About;