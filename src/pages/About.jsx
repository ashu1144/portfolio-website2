import React from 'react'
import myimg from '../assets/myImg.jpg'
import { Education } from '../components/extra/Education'
import Skills from '../components/Skills/Skills'
import ContactSection from '../components/AboutUs/ContactSection'
import MoveSlider from '../components/common/MoveSlider'
import TextReveal from '../components/common/TextReveal'
import Hero from '../components/hero/Hero'
import Projects from './Projects'
const About = () => {
  return (
    <div id="about" className="">
      {/* ======= Intro Section ======= */}
      <Hero></Hero>
      
     

      {/* ======= Text Reveal Section ======= */}
         <TextReveal />
      {/* ======= Skills Section ======= */}
      <Skills />

      {/* ======= Move Slider 1 ======= */}
      <MoveSlider
        movement="movex"
        title="Studied Computer Science — learned to craft exceptional user experiences."
        color="bg-[#D3fd50]"
      />

      {/* ======= Education Section ======= */}
      <Education />

      <Projects></Projects>

      {/* ======= Move Slider 2 ======= */}
      <MoveSlider
        movement="movex"
        title="Let’s connect and build something impactful"
        color="bg-[#D3fd50]"
      />

      {/* ======= Contact Section ======= */}
      <ContactSection />
    </div>
  )
}

export default About
