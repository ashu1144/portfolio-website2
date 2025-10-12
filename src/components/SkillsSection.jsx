import React, { useEffect, useRef } from "react";
import { SkillsInfo } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const sectionRef = useRef(null);
  let start = undefined
  if (window.innerWidth <= 480) {
    start = "bottom 80%";
    } else if (window.innerWidth <= 1200) {
    start = "bottom center";
    } else {
    start = "bottom center"; // or another default
    }
  



  useEffect(() => {
    const el = sectionRef.current;

    if (!el) return;

    gsap.to(el, {
      height:"10vw", 
      ease:  "power2.inOut",
      stagger:0.8,
      scrollTrigger: {
        trigger: el,
        start: start,
        end: "+=300 -10%",
        scrub:true, 
        // markers:true // 
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="skillsSection bg-black py-20 px-4 md:px-8 overflow-hidden h-full">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="skills-title text-[8vw] max-sm:text-[12vw] font-[font2] leading-[8vw] max-sm:leading-[12vw] text-white uppercase">
          Skills
        </h2>
        <div className="w-24 h-1 bg-white mx-auto mt-4"></div>
      </div>

      {/* Full Width Vertical Stack */}
      <div className="flex flex-col gap-4 w-full">
        {SkillsInfo.map((stack, index) => (
          <div
            key={index}
            className="skill-stack relative group border border-gray-800 rounded-lg overflow-hidden w-full"
          >
            <div className="bg-gray-900 text-white cursor-pointer p-4 flex justify-between items-center hover:bg-gray-800 transition-colors duration-300">
              <span className="text-lg font-semibold uppercase">{stack.title}</span>
              <span className="text-xl">+</span>
            </div>

            <div className="bg-gray-800 text-white overflow-hidden max-h-0 group-hover:max-h-screen transition-all duration-500">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4">
                {stack.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-12 h-12 mb-2 object-contain"
                    />
                    <p className="text-sm text-white">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-16">
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Continuously learning and adapting to new technologies to deliver cutting-edge solutions and exceptional user experiences.
        </p>
      </div>
      <div className="h-[20vh] max-sm:hidden"></div>
    </div>
  );
};

export default SkillsSection;
