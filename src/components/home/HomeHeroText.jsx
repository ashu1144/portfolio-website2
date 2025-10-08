import React from 'react'
import Video from './video'
import { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const HomeHeroText = () => {

    const profileRef = useRef(null)
    const profileContainer = useRef(null)

    useGSAP(() => {
    const tl1 = gsap.timeline();

    // Slide container up
    tl1.from(profileContainer.current, {
        y: -200,
        scale:0,     
        duration:0.6,
        opacity:0,
        delay:1.8
    });
    // Pop the profile image
    tl1.from(profileRef.current, {
        scale: 0,
        y: 200,
        duration:0.6,
        opacity: 0
    }, '-=0.2'); // optional delay after previous
    }, []);





  return (
    <div className=' flex-1 font-[font1] flex flex-col items-center justify-center pt-2  h-full'>
        <div ref={profileContainer} className='w-60 h-60 bg-blue-200/80 rounded-full p-5 relative container '>
            <img src="/profilemg.png" alt="" className='absolute left-0 rounded-[15vw] mt-[-43%] max-sm:mt-[-43%] max-sm:rounded-[50vw] z-10 profile-img ' ref={profileRef} />
        </div>
        <div className='text-[4vw] max-sm:text-[6vw] uppercase leading-[5vw] flex items-center justify-center max-sm:mt-5 '>Shaik Mohammad Ashan</div>
        <div className='text-[4vw] max-sm:text-[6vw] uppercase leading-[5vw] flex items-center justify-center '>i am&nbsp;<div className='h-[7vw] w-[16vw]  -mt-1 rounded-full overflow-hidden '><Video></Video></div><div className="text-[4vw] max-sm:text-[6vw] text-[#d3FD50]">
      <TypeAnimation
        sequence={[
        //   'Hello World 🌍', 1500,
          'Frontend ⚛️', 1500,
          'Backend', 1500,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}/></div> </div>
        
        <div className='text-[4vw] max-sm:text-[6vw] uppercase leading-[5vw] flex items-center justify-center'>Developer</div>
    </div>
  )
}

export default HomeHeroText