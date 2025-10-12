import React, { useEffect, useRef } from 'react'
import myimg from '../assets/myImg.jpg'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap'
import { Education } from '../components/extra/Education';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';

const About = () => {

  
    let start = undefined
    if (window.innerWidth <= 480) {
    start = "-20% 20%";
    } else if (window.innerWidth <= 1200) {
    start = "80% 0";
    } else {
    start = "100% 0"; // or another default
    }

console.log("START VALUE:", start);


    const triggrStart = useRef()

   useGSAP(() => {
    const tl3 = gsap.timeline();
    gsap.registerPlugin(ScrollTrigger)

      tl3.from('.about', {
        y:10,
        height:0,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay:1.8,
        
    })
    tl3.from('.desc1', {
        y:-10,
        height:0,
        opacity: 0,
        duration: 1,
        ease: "power2.out",

    });
    
    const tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: triggrStart.current,
      start: start,
      // markers: true,
    }
    });
    
  tl4.from('.descLines', {
        opacity: 0,
        x:50,
        y: -50,
        duration: 1,
        stagger: 0.3, 
        ease: "power2.out",
        delay:0,

    });

    }, []);




  return (
    <div id="#about" className="bg-black min-h-screen px-0 md:px-0 py-10">
      <div>
        {/* Title */}
        <div>
          <h1 className="about text-[10vw] max-sm:text-[15vw] font-[font2] leading-[10vw] px-5 max-sm:px-2 capitalize text-white">
            about
          </h1>
        </div>

        {/* Divider Line */}
        <div className="w-full h-1 bg-white my-4"></div>

        {/* Sub Headings */}
        <div className="desc1 text-end py-4 px-4 max-sm:py-2">
          <h1 className="text-[3vw] max-sm:text-[4vw] font-[font2] leading-[3vw] max-sm:leading-[4vw] text-white">
            I WRITE ROBUST, TESTABLE CODE
          </h1>
          <h1 className="text-[3vw] max-sm:text-[4vw] font-[font2] leading-[3vw] max-sm:leading-[4vw] text-white">
            BUILD FAST, RELIABLE SYSTEMS
          </h1>
          <h1 className="text-[3vw] max-sm:text-[4vw] font-[font2] leading-[3vw] max-sm:leading-[4vw] text-white">
            SHIP SCALABLE, CLEAN SOLUTIONS
          </h1>
        </div>

        {/* Main Content: Image + Text */}
        <div className="flex flex-col md:flex-row items-center justify-between py-10 gap-8">

          {/* Image */}
          <div className="w-full md:w-[30vw] aspect-[4/5] flex items-center justify-center p-4">
            <img
              src={myimg}
              className="w-full h-full bg-green-500 rounded-[10%] object-cover hover:scale-105 duration-300 ease-in-out"
              alt="About"
            />
          </div>

          {/* Text Content */}
          <div ref={triggrStart} className="flex flex-col justify-center gap-4 px-2 md:px-6 w-full text-zinc-300">
            <div className="descLines text-[1.5vw] max-sm:text-[4vw] font-[font-1] flex gap-2">
              <span className="text-[4vw]">*</span>
              Obsessed with building fast, intuitive apps — from pixel-perfect React UIs
              to bulletproof serverless backends. Every line of code is a promise of quality users can feel.
            </div>
            <div className="descLines text-[1.2vw] max-sm:text-[3vw] font-[font-1] flex items-center gap-2">
                <span className="text-[1.3vw] max-sm:text-[2.5vw]">💡</span> I am a Full-Stack Developer with expertise in frontend technologies like HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS.
                </div>
                <div className="descLines text-[1.2vw] max-sm:text-[3vw] font-[font-1] flex items-center gap-2">
                <span className="text-[1.3vw] max-sm:text-[2.5vw]">🛠️</span> Skilled in backend technologies including Express, Python, and MySQL.
                </div>
                <div className="descLines text-[1.2vw] max-sm:text-[3vw] font-[font-1] flex items-center gap-2">
                <span className="text-[1.3vw] max-sm:text-[2.5vw]">📱</span> Hands-on experience building responsive, user-focused web applications.
                </div>
                <div className="descLines text-[1.2vw] max-sm:text-[3vw] font-[font-1] flex items-center gap-2">
                <span className="text-[1.3vw] max-sm:text-[2.5vw]">🔗</span> Proficient in integrating REST APIs and working with Git for version control.
                </div>
                <div className="descLines text-[1.2vw] max-sm:text-[3vw] font-[font-1] flex items-center gap-2">
                <span className="text-[1.3vw] max-sm:text-[2.5vw]">🚀</span> Experienced in Agile methodologies and collaborative team environments.
                </div>
                <div className="descLines text-[1.2vw] max-sm:text-[3vw] font-[font-1] flex items-center gap-2">
                <span className="text-[1.3vw] max-sm:text-[2.5vw]">🧠</span> Efficient problem solver, quick learner, and passionate about continuous improvement.
                </div>
          </div>
        </div>
      </div>

      {/* skills section */}
      <SkillsSection />
      {/* skills section ends */}
      
      {/* education section */}
       <Education />
      {/* education section ends */}

      {/* contact section */}
      <ContactSection></ContactSection>




    </div>
  )
}

export default About