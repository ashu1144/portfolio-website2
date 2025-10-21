import React from 'react'
import { useRef } from 'react'
const Navbar = ({setNavbar}) => {
  const navGreenRef = useRef(null)
  return (
    <div className=' z-12 py-5  w-full fixed'>

      <div className=' max-w-[90vw] m-auto flex justify-between items-start'>
       
          <div className='w-20'>
            <h className = "text-4xl">Ashan</h>
          </div>

          <div onClick={() => setNavbar(prev => !prev)} className=' p-3 rounded-full  bg-zinc-600  flex items-center justify-center cursor-pointer'>
            <div className='flex flex-col justify-center items-end gap-1.5'>

            <div className='h-0.5 w-5 max-sm:w-5 bg-white'></div>
            <div className='h-0.5 w-5 bg-white'></div>
            <div className='h-0.5 w-5 bg-white'></div>

          </div>
          
      
      </div>
      

    </div>



    </div>
  )
}

export default Navbar