import React from 'react';

function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'];

  return (
    <section className="p-4">
      <h2 className="text-xl font-bold">Skills</h2>
      <ul className="list-disc pl-5">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
