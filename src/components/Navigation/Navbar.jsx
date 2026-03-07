import React from 'react'
import { useRef } from 'react'
import Time from '../Time'
const Navbar = () => {
  const navGreenRef = useRef(null)
  return (
    <div className=' z-12 py-5  w-full'>

      <div className=' max-w-[90vw] m-auto flex justify-between items-start'>
       
          <div className='w-20'>
            <h1 className = "text-4xl text-white">Ashan</h1>
          </div>

          <div className=' p-3 rounded-full text-white  bg-zinc-600  flex items-center justify-center cursor-pointer'>
            <div className='flex flex-col justify-center items-end gap-1.5'>

              <Time/>

          </div>
          
      
      </div>
      

    </div>



    </div>
  )
}

export default Navbar