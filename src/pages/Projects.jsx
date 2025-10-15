import React from 'react'
import ProjectCar from '../components/projectCard/ProjectCar'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';

import agency from "../assets/projet_imgs/Agency_web.png"
import aiChat from '../assets/projet_imgs/aiChat.png'
import animationWeb from "../assets/projet_imgs/Animation-website.png"
import blinkit from "../assets/projet_imgs/Blinkit.jpeg"
import travel from "../assets/projet_imgs/travel.png"
import ecomerce from '../assets/projet_imgs/ecomerce.png'
import portfolio from '../assets/projet_imgs/portfolio.png'


const Projects = () => {

  const projectsArray = [
  {
    title1: "ChatBot",
    img1:aiChat,
    link1:"https://my-api-chatbot.vercel.app/",
    title2: "Travel Agency",
    img2:travel,
    link2:"https://ashu1144.github.io/Travel-agency-gsap-framer-/",
  },
  {
    title1: "Agency Material UI Website",
    img1: agency,
    link1:"https://agency-website-kappa.vercel.app/",
    title2: "Furniture E-commerce",
    img2: ecomerce,
    link2:"https://ashu1144.github.io/Furniture-shop/"
  },
  {
    title1: "Social Media",
    img1: ecomerce,
    link1:"",
    title2: "Animation Website",
    img2: animationWeb,
    link2:"https://ashu1144.github.io/Animation-website/"
  },
  {
    title1: "Blinkit Web Clone",
    img1: blinkit,
    link1:"https://ashu1144.github.io/blinkit_clone/",
    title2: "Portfilio",
    img2:portfolio,
    link2:""
  },
];






    

    gsap.registerPlugin(ScrollTrigger)
    useGSAP(()=>{
        gsap.from('.hero',{
            height:"50px",
            stagger:{
                amount:0.2
            },
            scrollTrigger:{
                trigger:'.lol',
                start:"top 130%",
                end:"top -150%",
                scrub:true,
                // markers:true
            }
        
        })
    })



  return (
    <div className='lg:p-4 p-2 bg-[#fdf6e3] text-black '>
        <div className='pt-[20vh]'>
            <h2 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase lol'>projects</h2>
        </div>
        <div className='lg:-mt-5' >
            {projectsArray.map((el,idx)=>(
            <div key={idx} className='hero w-full lg:h-[300px] h-[300px] flex lg:flex-row flex-col gap-2 mb-4'><ProjectCar img1={el.img1} img2={el.img2} title1={el.title1}  title2={el.title2} link1={el.link1} link2={el.link2} /></div>
        ))}
        </div>
    </div>
  )
}

export default Projects 