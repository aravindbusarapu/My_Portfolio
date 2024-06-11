import React from "react";
import ProfileImg from "../../Images/p3.jpg";
import ReactLogo from '../../Images/React.png'
import Next from '../../Images/nextjs-icon-512x512-y563b8iq.png'
import Javascript from '../../Images/js.png'
import Tailwind from '../../Images/tailwind.png'
import HTML from '../../Images/free-html-5-1-1175208.png'
import CSS from '../../Images/css-hd-logo.png'
import Bootstrap from '../../Images/Bootstrap_logo.png'
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

const SocialShareData = [
  {
    Icon: FaGithub,
    url: 'https://github.com/Aravind505-stack?tab=repositories',
  },
  {
    Icon: IoLogoLinkedin,
    url: 'https://www.linkedin.com/in/aravind-busarapu-41389a1a3/',
  },
];

const Hero = () => {
  return (
    <section className="py-28 min-h-screen  ">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left">
          <h2 className="text-2xl font-semibold text-gray-500">Hello 👋 ,</h2>
          <h1 className="text-6xl mt-2 font-extrabold text-blue">
            I'm a web Developer.
          </h1>
          <p className="mt-3 text-3xl font-semibold text-gray-700">
            I build things for the web.
          </p>
          <div className="flex space-x-6 mt-8">
            {SocialShareData.map((each, index) => (
              <a
                key={index}
                href={each.url}

                target="_blank"
                rel="noopener noreferrer"
              >
                <each.Icon className="text-gray-800 hover:text-gray-600 text-[24px]" />
              </a>
            ))}

          </div>
        </div>
        {/* <div className="w-1/2">
          <div class="animated-container">
            <div class="circle-container">
              <div class="circle"></div>
            </div>
            <div class="image-container"></div>
          </div>
        </div> */}

        <div className="border-[24px] border-gray-400 w-1/2 shadow-xl rounded-lg  h-[350px]">
          <div className="-mt-5 w-full flex items-center justify-center">
            <div className="h-5 w-5 rounded-full bg-gray-100 border-[7px] border-gray-800"> </div>
          </div>
          <div className="w-full h-full bg-cover bg-center object-cover" style={{ backgroundImage: `url(${ProfileImg})` }}>
    </div>

        </div>
      </div>
      <div className="mt-20 ">
        <h2 className="text-xl text-center mb-8 font-bold text-gray-700">Tech Stack</h2>

        <div class="scroll-container">
          <div class="scroll-content gap-10 md:gap-20 xl:gap-32">
            <img src={ReactLogo} alt="React" className="h-12" />
            <img src={Next} alt="Next" className="h-12" />
            <img src={Javascript} alt="Javascript" className="h-12" />
            <img src={Tailwind} alt="Tailwind" className="h-10" />
            <img src={HTML} alt="HTML" className="h-12" />
            <img src={CSS} alt="CSS" className="h-12" />
            <img src={Bootstrap} alt="Bootstrap" className="h-12" />
            {/*  Repeat content for infinite effect */}
            <img src={ReactLogo} alt="React" className="h-12" />
            <img src={Next} alt="Next" className="h-12" />
            <img src={Javascript} alt="Javascript" className="h-12" />
            <img src={Tailwind} alt="Tailwind" className="h-10" />
            <img src={HTML} alt="HTML" className="h-12" />
            <img src={CSS} alt="CSS" className="h-12" />
            <img src={Bootstrap} alt="Bootstrap" className="h-12" />
            {/*  Repeat content for infinite effect */}
            <img src={ReactLogo} alt="React" className="h-12" />
            <img src={Next} alt="Next" className="h-12" />
            <img src={Javascript} alt="Javascript" className="h-12" />
            <img src={Tailwind} alt="Tailwind" className="h-10" />
            <img src={HTML} alt="HTML" className="h-12" />
            <img src={CSS} alt="CSS" className="h-12" />
            <img src={Bootstrap} alt="Bootstrap" className="h-12" />
          </div>
        </div>





      </div>
    </section>
  );
};

export default Hero;
