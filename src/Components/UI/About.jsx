import React from "react";
import Skills from "./Skills";
import WebDev from '../../Images/1544533340645.jpeg'

const About = () => {
  return (
    <section id="About" className="text-gray-900 pb-20">

      <div className="flex   gap-10 lg:gap-20 items-center">
        <div className="w-full lg:w-1/2">
          <img src={WebDev} className="rounded-lg " alt="" />
        </div>
        <div className="w-1/2">
          <h2 className="text-xl font-bold mb-3 text-gray-800 uppercase">About Me</h2>

          <h3 className="text-3xl font-bold mb-3 text-gray-800">Front-end Developer<br />
            based in Andhra Pradesh, India 📍</h3>
          <p className="mt-5 text-xl text-gray-500">
            Hey, my name is Aravind Busarapu, and I'm a Frontend Developer. My passion is to create and develop clean UI/UX for my users.
          </p>
          <p className="mt-4 text-xl text-gray-500">

            My main stack currently includes React.js, Next.js, Tailwind CSS, and JavaScript.
          </p>
         
        </div>

      </div>
      <Skills />
      {/* <div className="flex space-x-4">
          <div>
            <h3 className="font-bold">Years of Experience</h3>
            <p>3</p>
          </div>
          <div>
            <h3 className="font-bold">Projects Completed</h3>
            <p>12</p>
          </div>
        </div> */}

    </section>
  );
};

export default About;
