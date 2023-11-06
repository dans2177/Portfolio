import React from 'react';

function Projects() {
  // Dummy projects data
  const projects = [
    { title: 'Project One', description: 'This is a description for project one.' },
    { title: 'Project Two', description: 'This is a description for project two.' },
    // ...more projects
  ];

  return (
    <section className="p-4">
      <h2 className="text-xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="p-4 shadow rounded bg-white">
            <h3 className="font-semibold">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
