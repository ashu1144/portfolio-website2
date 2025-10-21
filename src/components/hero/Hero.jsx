import React from 'react'
import myimg from '../../assets/myImg.jpg'
import { useGSAP } from "@gsap/react";  // <-- import like this
import { gsap } from "gsap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {

 useGSAP(() => {
  const tl = gsap.timeline();

  tl.fromTo(
  ".Proimg",
  { scale: 0.1, opacity: 0 }, // initial state
  { scale: 1, opacity: 1, delay: 1.2, duration: 0.6, ease: "power1.out" });
  tl.from('.desc1', {
    x:100,
    opacity:0,
    ease: "power2.inOut",
    stagger:0.5
  },);
  tl.fromTo(
  ".btn",
  { scale: 0.1, opacity: 0 }, // initial state
  { scale: 1, opacity: 1, duration: 0.3, ease: "power1.out", stagger:-0.5 });


  return () => tl.kill();
}, []);



  return (
       <section className="min-h-screen bg-black text-white flex items-center justify-center px-4 relative font-[font1]">
      <div className="md:max-w-[80vw] w-full flex flex-col md:flex-row items-center justify-center  md:gap-[5vw] md:mt-10 ">
        
        {/* Profile Image */}
        <div className="Proimg  w-60 h-80 md:w-120 md:h-150 rounded-[300px] overflow-hidden mb-5 md:mb-0 group transition-all duration-300 shrink-0">
          <img
            src={myimg}
            alt="Profile"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left space-y-3 md:space-y-4 max-w-md md:max-w-none">
          <h1 className=" desc1 text-2xl sm:text-5xl md:text-6xl font-extrabold leading-tight font-[font2] transition-colors duration-300 ">
             From idea to interface  smooth,scalable, and scroll-stopping websites
          </h1>
          <p className=" desc1 text-lg sm:text- xl font-semibold text-gray-300 font-[font2] transition-colors duration-300">
            Need a frontend that actually feels alive? <br /> Let’s build it.
          </p>

          {/* Buttons and Icons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4">
            <button className=" btn bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200 active:scale-95 transition-transform duration-200">
              LET'S CONNECT
            </button>

            {/* GitHub Icon */}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className=" btn text-2xl hover:text-gray-400 transition-colors duration-200"
            >
              <FaGithub />
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-2xl hover:text-blue-400 transition-colors duration-200"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-6 text-gray-400 text-sm animate-bounce">
        ↓ Scroll Down
      </div>
    </section>
  )
}

export default Hero