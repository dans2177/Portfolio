import React from 'react';

// Define the array of sections at the top of the file
const sections = [
  {
    date: '',
    title: 'The Spark in 7th Grade',
    description: "Ever since I assembled my first 3D printer from a kit of hundreds of pieces back in 7th grade, technology has been more than just a passion—it's been my calling. What started as a playful hobby to create fidget toys (that my teachers weren't too fond of) evolved into something far greater.",
    imgSrc: '/path-to-your-first-image.jpg',
  },
  {
    date: '',
    title: 'The High School Chapter',
    description:"In high school, I mastered 3D printing, helping set up our school's lab and planning to develop a student lesson plan. But as COVID-19 hit, I pivoted, taking the lab's equipment home to produce and donate medical supplies. This shift turned a global crisis into a personal opportunity to contribute meaningfully.",
    imgSrc: '/path-to-your-second-image.jpg',
  },
  {
    date: '',
    title: 'The College Years',
    description: "As I transitioned into my college life at Grand Canyon University, my curiosity steered me toward coding. It became more than just an academic endeavor; it became the backbone of several projects I undertook. My most notable project? A sophisticated filament tracker for 3D printers.",
    imgSrc: '/path-to-your-third-image.jpg',
  },
  // Add another object here for the fourth section
];

function About() {
  return (
    <div className='flex justify-center align-middle mt-4'>
      <section className="p-4 m-4">
        <h2 className="text-4xl font-bold font-prata">About Me</h2>
        <p>I am a software developer with a passion for building web applications...</p>

        <ol className="relative border-l border-gray-200 mt-2">
          {sections.map((section, index) => (
            <li key={index} className="mb-10 ml-4 flex">
              <div className="flex-grow max-w-3xl">
                <time className="mb-1 text-sm font-normal leading-none text-gray-400">{section.date}</time>
                <h3 className="text-lg font-semibold font-comfortaa text-gray-900">{section.title}</h3>
                <p className="mb-4 text-base font-comfortaa text-gray-500">{section.description}</p>
              </div>
              <img src={section.imgSrc} alt={section.title} className="w-24 h-24 rounded-full object-cover ml-4" />
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

export default About;
