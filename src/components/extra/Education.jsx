import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { education } from "../../constants";

export const Education = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1280);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 1280);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="education"
      className="relative py-16 sm:py-20 lg:py-24 px-4 font-serif text-white bg-black overflow-hidden min-h-screen"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        src="/videos/education-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40 max-sm:hidden"
      />

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent via-black/70 to-black"></div>

      {/* Content */}
      <div className="relative max-w-[90vw] m-auto flex flex-col xl:flex-row items-start gap-8 sm:gap-10 lg:gap-12 z-10">
        {/* Left side - content */}
        <div className="flex-1 order-2 xl:order-1">
          <div className="mb-12 sm:mb-14 lg:mb-16 text-left px-4 sm:px-6 space-y-3 animateLeft">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-[font2] font-semibold text-zinc-400">
              Academic <span className="text-green-400">Journey</span>
            </h2>

            <p className="text-gray-400 text-lg sm:text-xl max-w-3xl">
              Ideas turned into functional, fast, and beautiful web experiences.
            </p>
        </div>

          {/* Timeline */}
          <div className="relative pl-8 border-l-2 border-white/30">
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
                    opacity: 0,
                    x: index % 2 === 0 ? initialX[0] : initialX[1],
                  });
                }
              }, [inView, controls]);

              return (
                <motion.div
                  key={edu.id}
                  ref={ref}
                  animate={controls}
                  transition={{
                    ease: [0.25, 0.46, 0.45, 0.94],
                    duration: 0.5,
                  }}
                  className="mb-8 sm:mb-10 lg:mb-12 xl:mb-14 relative pl-8"
                >
                  <div className="absolute left-0 top-2 w-5 h-5 rounded-full bg-white border-2 border-black shadow-sm" />
                  <h3 className="text-xl sm:text-2xl font-semibold mb-1">{edu.school}</h3>
                  <p className="italic text-gray-400 mb-2 text-sm sm:text-base">Grade: {edu.grade}</p>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed">{edu.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right side - Full height video */}
        <div className="flex-shrink-0 order-1 xl:order-2 w-full xl:w-[30vw] h-[60vh] sm:h-[70vh] xl:h-[80vh] mt-8 sm:mt-12 lg:mt-15 max-sm:hidden">
          <video
            src="/profileVideo.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover rounded-2xl shadow-2xl"
          ></video>
        </div>
      </div>
    </section>
  );
};
