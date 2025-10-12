import React from 'react'
import ProjectCar from '../components/projectCard/ProjectCar'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
const Projects = () => {
    
    const arrImg = [
  {
    img1: "https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b",
    img2: "https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e"
  },
  {
    img1: "https://k72.ca/images/teamMembers/PLP_640x280.jpg?w=640&h=290&s=e675a180832a690a53a22b25ea7fa365",
    img2: "https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5"
  },
  {
    img1: "https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99",
    img2: "https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" // repeat
  },
  {
    img1: "https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e", // repeat
    img2: "https://k72.ca/images/teamMembers/PLP_640x280.jpg?w=640&h=290&s=e675a180832a690a53a22b25ea7fa365" // repeat
  },
  {
    img1: "https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5", // repeat
    img2: "https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" // repeat
  }
];

    gsap.registerPlugin(ScrollTrigger)
    useGSAP(()=>{
        gsap.from('.hero',{
            height:"50px",
            stagger:{
                amount:0.4
            },
            scrollTrigger:{
                trigger:'.lol',
                start:"top 95%",
                end:"top -150%",
                scrub:true,
                // markers:true
            }
        
        })
    })



  return (
    <div className='lg:p-4 p-2 mb-[100vh] bg-amber-50 text-black'>
        <div className='pt-[45vh]'>
            <h2 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase'>projects</h2>
        </div>
        <div className='lg:-mt-5 lol' >
            {arrImg.map((el,idx)=>(
            <div key={idx} className='hero w-full lg:h-[300px] h-[300px] flex lg:flex-row flex-col gap-2 mb-4'><ProjectCar img1={el.img1} img2={el.img2} /></div>
        ))}
        </div>
    </div>
  )
}

export default Projects 