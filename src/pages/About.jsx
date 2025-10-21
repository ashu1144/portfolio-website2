import React from 'react'
import { Education } from '../components/extra/Education'
import Skills from '../components/Skills/Skills'
import ContactSection from '../components/AboutUs/ContactSection'
import Hero from '../components/hero/Hero'
import Projects from './Projects'
import TextReveal from '../components/common/TextReveal'
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const About = () => {
  
  useGSAP(() => {

   ScrollTrigger.batch(".animateLeft", {
    onEnter: (batch) => {
    gsap.from(batch, {
      y: -100,
      opacity: 0,
      duration: 0.6,
      ease: "power1.out"});},
      start: "center 60%",
    });

  }, []);
  
  return (
    <div id="about" className="bg-[#0f0f10]">
      {/* Hero Section */}
      <Hero />

      {/* Text Reveal Section */}
      <TextReveal />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Education Section */}
      <Education />

      {/* Contact Section */}
      <ContactSection />

      {/*
        Move Slider 2:
        Additional move slider can be added here
      */}
    </div>
  )
}

export default About
