import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { education } from "../../constants";

export const Education = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1280);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 1280);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-white mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      <div className="relative">
        <div className="absolute xl:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {education.map((edu, index) => {
          const controls = useAnimation();
          const [ref, inView] = useInView({
            threshold: 0.3,
            triggerOnce: false,
          });

          const initialX = isDesktop ? [150, -150] : [0, 0];

          useEffect(() => {
            if (inView) {
              controls.start({ opacity: 1, x: 0 });
            } else {
              controls.start({
                opacity: 1,
                x: index % 2 === 0 ? initialX[0] : initialX[1],
              });
            }
          }, [inView, controls]);

          return (
            <div
              key={edu.id}
              className={`flex flex-col sm:flex-row items-center mb-16 ${
                index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute xl:left-[33.8vw] left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 xl:w-16 xl:h-16 rounded-full flex justify-center items-center z-10">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Education Card with enhanced gradient design */}
              <motion.div
                ref={ref}
                animate={controls}
                transition={{
                  ease: [0, 0.55, 0.45, 1],
                  duration: 0.3,
                }}
                className={`w-full mt-10 xl:max-w-md p-1 sm:p-0 rounded-3xl ${
                  index % 2 === 0 ? "xl:ml-[-6vw]" : "xl:mr-[-6vw]"
                } xl:ml-45 xl:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105 shadow-2xl`}
              >
                <div className="card bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 rounded-3xl shadow-xl border border-purple-800 overflow-hidden text-white">
                  <div className="content py-7 px-6 md:py-8 md:px-8">
                    
                    {/* School Info */}
                    <div className="flex gap-5 items-center mb-5">
                      <div className="w-[70px] h-[70px] flex-shrink-0 rounded-lg overflow-hidden border-2 border-white shadow-md">
                        <img
                          src={edu.img}
                          alt={edu.school}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h1 className="text-lg md:text-xl font-extrabold capitalize drop-shadow-lg">
                          {edu.school}
                        </h1>
                        <p className="text-sm font-semibold text-purple-300 mt-1">
                          Grade: {edu.grade}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm md:text-base text-purple-100 leading-relaxed drop-shadow-md">
                      {edu.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
