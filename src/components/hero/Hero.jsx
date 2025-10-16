import React from 'react'
import myimg from '../../assets/myImg.jpg'
import { useGSAP } from "@gsap/react";  // <-- import like this
import { gsap } from "gsap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {

 useGSAP(() => {
  const tl = gsap.timeline();

  tl.from('.about', {
    y:20,
    duration: 0.2,      
    ease: "power2.inOut",  
    delay: 1.6,
  })
  .from('.desc1', {
    x:100,
    opacity:0,
    ease: "power2.inOut",
    stagger:0.5
  },);  

  return () => tl.kill();
}, []);



  return (
         <section className="bg-[#111]">
        {/* Title */}
        <h1 className="about overflow-hidden text-[10vw] max-sm:text-[15vw] pt-5 font-[font2] leading-[10vw] px-5 max-sm:px-2 capitalize text-white translate-y-0 ease-in-out duration-300">
          about
        </h1>

        {/* Divider */}
        <div className="w-full h-1 bg-white my-4"></div>

        {/* Subheadings */}
        <div className="text-end py-4 px-4 max-sm:py-2 overflow-hidden">
          <h1 className=" desc1 text-[3vw] max-sm:text-[4vw] font-[font2] leading-tight text-white">
            I WRITE ROBUST, TESTABLE CODE
          </h1>
          <h1 className="desc1 text-[3vw] max-sm:text-[4vw] font-[font2] leading-tight text-white">
            BUILD FAST, RELIABLE SYSTEMS
          </h1>
          <h1 className="desc1 float-end flex items-center gap-1 sm:gap-4 text-[3vw] max-sm:text-[4vw] font-[font2] leading-tight text-white">
              LET'S CONNECT
              <a href="https://github.com/ashu1144" target="_blank" rel="noopener noreferrer" className="text-white  scale-180 mr-1 hover:text-green-400  text-xl transition-colors  max-sm:scale-100 max-sm:mr-0">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/shaik-mohammad-ashan-b7a864322/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 text-xl scale-180 transition-colors max-sm:scale-100 max-sm:mr-0">
                <FaLinkedin />
              </a>
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-between py-10 gap-8 px-4">
          {/* Image */}
          <div className="w-full md:w-[30vw] aspect-[4/5] flex items-center justify-center p-4">
            <img
              src={myimg}
              className="w-full h-full bg-green-500 rounded-[10%] object-cover hover:scale-105 duration-300 ease-in-out"
              alt="About"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center gap-4 w-full text-zinc-300 px-2 md:px-6">
            <div className="descLines text-[1.5vw] max-sm:text-[4vw] font-[font-1] flex gap-2">
              <span className="text-[4vw]">*</span>
              Obsessed with building fast, intuitive apps — from pixel-perfect React UIs
              to bulletproof serverless backends. Every line of code is a promise of quality users can feel.
            </div>

            {/* Bullet Points */}
            {[
              { icon: '💡', text: 'I am a Full-Stack Developer with expertise in frontend technologies like HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS.' },
              { icon: '🛠️', text: 'Skilled in backend technologies including Express, Python, and MySQL.' },
              { icon: '📱', text: 'Hands-on experience building responsive, user-focused web applications.' },
              { icon: '🔗', text: 'Proficient in integrating REST APIs and working with Git for version control.' },
              { icon: '🚀', text: 'Experienced in Agile methodologies and collaborative team environments.' },
              { icon: '🧠', text: 'Efficient problem solver, quick learner, and passionate about continuous improvement.' },
            ].map((item, index) => (
              <div
                key={index}
                className="descLines text-[1.2vw] max-sm:text-[3vw] font-[font-1] flex items-center gap-2"
              >
                <span className="text-[1.3vw] max-sm:text-[2.5vw]">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
        
      </section>
  )
}

export default Hero