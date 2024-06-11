import React from 'react';

const projects = [
  { title: "UIX Portfolio Website", description: "Website landing page for a UI/UX designer portfolio.", codeLink: "#" },
  { title: "LOZAN Ecommerce Web", description: "Ecommerce website for fashion that sells clothing and shoes.", codeLink: "#" },
  { title: "HOMEY Furniture app", description: "Luxury furniture app for selling furniture and home decorations.", codeLink: "#" },
  { title: "CARENT Rental Website", description: "Website for renting and selling cars.", codeLink: "#" },
  { title: "BurgerZing Food Website", description: "Restaurant website for ordering and delivering food.", codeLink: "#" },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white text-gray-900 py-20">

      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-200 p-6 rounded-lg">
            <h3 className="font-bold">{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.codeLink} className="text-purple-700 hover:underline mt-2 block">View Code</a>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Projects;
