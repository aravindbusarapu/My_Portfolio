import React from 'react';

const experiences = [
  {
    company: "Hyno",
    role: "Frontend Developer",
    duration: "Jul. 2022 – Present",
    location: "Hyderbad",
    tasks: [
      "Developed the entire frontend application using React, React Storybook, and Tailwind CSS.",
      "Ensured the website was fully responsive, adapting to various devices and screen sizes based on company requirements.",
      "Implemented a front design system, including buttons, fonts, and colors, to maintain consistent typography and design across the website.",
      "Explored and utilized Tailwind CSS to enhance the website’s design and responsiveness.",
      "Demonstrated familiarity with RESTful APIs and their integration.",
      "Applied knowledge of modern authorization mechanisms, such as JSON Web Token (JWT)."
    ]
  },
  {
    company: "Hyno",
    role: "Associate Software Engineer",
    duration: "Jul. 2024 – Present",
    location: "Hyderbad",
    tasks: [
      "Developed the entire frontend application for the website using HTML, CSS, Bootstrap, and JavaScript.",
      "Ensured the website was fully responsive, adapting to different devices and screen sizes, based on company requirements.",
      "Implemented SEO best practices, writing code with appropriate SEO tags.",
      "Developed consistent typography and maintained design consistency across the website.",
      "Significantly increased the website’s SEO score from a very low initial score to 95%.",
      "Explored and utilized Bootstrap to enhance the website’s design and responsiveness.",
      "Utilized REST APIs to display dynamic data on the website.",
      "Optimized the code for better performance and maintainability."
    ]
  },
  {
    company: "Plover",
    role: "Frontend Developer",
    duration: "Feb. 2023 – Feb. 2024",
    location: "Hyderbad",
    tasks: [
      "Developed the entire frontend application for a remote jobs website using Next.js, ensuring a seamless and responsive user interface.",
      "Created and implemented filters to enhance the user experience, allowing for efficient job searching and sorting.",
      "Utilized REST APIs to fetch, edit, and update data from the backend.",
      "Implemented a CV generator feature, enabling users to create and download professional resumes.",
      "Collaborated with backend developers to integrate frontend with backend services.",
      "Developed authentication features, including Google OAuth and manual login, ensuring secure access for users."
    ]
  }
];

const Experience = () => {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold">{exp.role} at {exp.company}</h3>
          <p className="italic">{exp.duration} | {exp.location}</p>
          <ul className="list-disc list-inside">
            {exp.tasks.map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
