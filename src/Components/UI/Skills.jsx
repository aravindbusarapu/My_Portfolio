import React from "react";

const skills = [
  "React.js",
  "JavaScript",
  "Next.js",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Bootstrap",
  "SQL",
  "Responsive Design",
  "SEO",
];

const Skills = () => {
  return (
    <section id="Skills" className="text-gray-900 mt-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold  text-gray-700">My Skills</h2>
        <ul className="flex flex-wrap gap-5  mt-4 ">
          {skills.map((skill, index) => (
            <li key={index} className="bg-gray-200 font-medium text-gray-700 p-2.5 rounded">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
