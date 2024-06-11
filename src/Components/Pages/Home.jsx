import React from "react";
import profileImage from "../../Images/1694838247880.jpeg";
import Experience from "../UI/Experience";
import About from "../UI/About";
import Education from "../UI/Education";
import Skills from "../UI/Skills";
import Projects from "../UI/Projects";
import Contact from "../UI/Contact";
import Footer from "../UI/Footer";
import Hero from "../UI/Hero";

const Home = () => {
  return (
    <div className="bg-gray-50" >
      <main className="container mx-auto px-6">
        <Hero />
        <About />
        <Projects />
       
      </main>
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
