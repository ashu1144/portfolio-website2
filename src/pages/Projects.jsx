import React from "react";
import agency from "../assets/projet_imgs/Agency_web.png";
import aiChat from "../assets/projet_imgs/aiChat.png";
import animationWeb from "../assets/projet_imgs/Animation-website.png";
import blinkit from "../assets/projet_imgs/Blinkit.jpeg";
import travel from "../assets/projet_imgs/travel.png";
import ecomerce from "../assets/projet_imgs/ecomerce.png";
import portfolio from "../assets/projet_imgs/portfolio.png";

const projectsArray = [
  { title: "ChatBot", img: aiChat, link: "https://my-api-chatbot.vercel.app/" },
  { title: "Travel Agency", img: travel, link: "https://ashu1144.github.io/Travel-agency-gsap-framer-/" },
  { title: "Agency Material UI Website", img: agency, link: "https://agency-website-kappa.vercel.app/" },
  { title: "Furniture E-commerce", img: ecomerce, link: "https://ashu1144.github.io/Furniture-shop/" },
  { title: "Animation Website", img: animationWeb, link: "https://ashu1144.github.io/Animation-website/" },
  { title: "Blinkit Web Clone", img: blinkit, link: "https://ashu1144.github.io/blinkit_clone/" },
  { title: "Portfolio", img: portfolio, link: "#" },
];

const Projects = () => {
  return (
    <section className="bg-black min-h-screen text-white py-16 start">
      <div className="max-w-[90vw] m-auto px-4">

        {/* Heading */}
        <div className="mb-16 text-left px-4 sm:px-6 space-y-3 animateLeft">
            <p className="text-gray-400 text-lg sm:text-xl">Project</p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-[font2] font-semibold text-zinc-400">
              Academic <span className="text-green-400">Journey</span>
            </h2>

            <p className="text-gray-400 text-lg sm:text-xl max-w-3xl">
              Ideas turned into functional, fast, and beautiful web experiences.
            </p>
        </div>

        {/* Marquee Section */}
        <div className="relative overflow-hidden py-8 sm:py-10 lg:py-12">
          {/* White fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-20 sm:w-24 lg:w-32 bg-gradient-to-r from-black to-transparent opacity-70 z-10"></div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 sm:w-24 lg:w-32 bg-gradient-to-l from-black to-transparent opacity-70 z-10"></div>

          {/* 1️⃣ First marquee (left to right) */}
          <div className="marquee-group hover:paused">
            <div className="flex gap-3 animate-marquee">
              {[...projectsArray, ...projectsArray].map((proj, i) => (
                <a
                  key={i}
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[260px] sm:min-w-[300px] lg:min-w-[340px] xl:min-w-[380px] rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-300 bg-gray-900 border border-gray-800"
                >
                  <img src={proj.img} alt={proj.title} className="w-full h-[150px] sm:h-[170px] lg:h-[200px] xl:h-[220px] object-cover" />
                  <p className="text-center py-2 sm:py-3 bg-gray-900 text-white text-sm sm:text-base lg:text-lg font-semibold">
                    {proj.title}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* 2️⃣ Second marquee (right to left) */}
          <div className="marquee-group hover:paused mt-6 sm:mt-8 lg:mt-10">
            <div className="flex gap-3 animate-marquee-reverse">
              {[...projectsArray, ...projectsArray].map((proj, i) => (
                <a
                  key={`second-${i}`}
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[260px] sm:min-w-[300px] lg:min-w-[340px] xl:min-w-[380px] rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-300 bg-gray-900 border border-gray-800"
                >
                  <img src={proj.img} alt={proj.title} className="w-full h-[150px] sm:h-[170px] lg:h-[200px] xl:h-[220px] object-cover" />
                  <p className="text-center py-2 sm:py-3 bg-gray-900 text-white text-sm sm:text-base lg:text-lg font-semibold">
                    {proj.title}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
