import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = ({setNavbar}) => {
  return (
    <div className='font-[font2] flex flex-col items-center justify-center gap-2 mb-1 max-sm:mb-[8vw] max-sm:flex-row  '>
        <div className='border-3 h-22 flex items-center px-10 max-sm:px-5 border-white rounded-full uppercase hover:text-[#d3FD50] hover:border-[#d3FD50]'>
            <Link className='text-[6vw] mt-3' to='/about'>About me </Link>
        </div>
        <div
         onClick={() => setNavbar(prev => !prev)} 
         className='border-3 h-22 flex items-center px-10 max-sm:px-5 border-white rounded-full uppercase hover:text-[#d3FD50] hover:border-[#d3FD50]'>
            <Link className='text-[6vw] mt-3'>view more</Link>
        </div>
   </div>
  )
}

export default HomeBottomText