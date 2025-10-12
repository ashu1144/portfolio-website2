import React from 'react'
import { useRef } from 'react'
const Navbar = ({setNavbar}) => {
  const navGreenRef = useRef(null)
  return (
    <div className=' z-12  w-full fixed flex top-0 items-start justify-between'>
      <div className='w-20'>
        {/* <img src="/Logo.png" alt="" className='pl-2 pt-1' /> */}
      </div>
      
    <div
    onClick={() => setNavbar(prev => !prev)} 
    onMouseEnter={()=>{navGreenRef.current.style.height = "100%" }} 
     onMouseLeave={()=>{navGreenRef.current.style.height = "0%" }}
    className='h-10 w-[16vw] bg-black  flex items-center justify-center relative'>
      <div className='flex flex-col justify-center items-end relative z-10 w-full px-4 gap-0.5 '>
        <div className='h-1 w-20 max-sm:w-5 bg-white'></div>
        <div className='h-1 w-10 bg-white'></div>
        <div className='h-1 w-5 bg-white'></div>
      </div>
      <div ref={navGreenRef} className='h-0 w-full absolute top-0 bg-[#D3fd50] transition-all duration-300 ease-in-out   '>
        
      </div>
    </div>

    </div>
  )
}

export default Navbar