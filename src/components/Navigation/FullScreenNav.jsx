import React from 'react'
import img1 from '../../assets/img1.png'
// import img2 from '../../assets/img2.png'
// import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.jpg'
import { useRef } from 'react'

const FullScreenNav = () => {
    const navGreenRef = useRef(null)
    


  return (
    <div id ='fullscreennav' className=' w-full flex items-center  text-white h-screen bg-black  ' >
        <div id='all-links' className='w-full'>
            <div className='link border-t-1 cursor-pointer  border-white text-center relative '>
                <h1 className='font-[font2] text-[8vw] leading-28 pt-2  uppercase hid'>projects</h1>
                <div className='moveLink absolute flex top-0 bg-[#D3FD50] text-black '>
                    <div className='flex movex  flex-nowrap items-center'>
                        <h2 className=' font-[font2] whitespace-nowrap  text-[8vw] leading-20 mt-2   uppercase'>Pour Tout voir</h2>
                        <img className='h-30 w-96 p-3 object-cover rounded-full shrink-0'  las src={img1} alt="" />
                        <h2 className='font-[font2] whitespace-nowrap text-[8vw] leading-20 mt-2   uppercase'>Pour Tout voir</h2>
                        <img className='h-30 w-90 p-3 object-cover rounded-full shrink-0'  src={img4} alt="" />
                    </div>
                    <div className='flex movex  flex-nowrap items-center'>
                        <h2 className=' font-[font2] whitespace-nowrap  text-[8vw] leading-20 mt-2   uppercase'>Pour Tout voir</h2>
                        <img className='h-30 w-96 p-3 object-cover rounded-full shrink-0'  las src={img1} alt="" />
                        <h2 className='font-[font2] whitespace-nowrap text-[8vw] leading-20 mt-2   uppercase'>Pour Tout voir</h2>
                        <img className='h-30 w-90 p-3 object-cover rounded-full shrink-0'  src={img4} alt="" />
                    </div>
                </div>             
            </div>
             <div className='link border-t-1 cursor-pointer  border-white text-center relative '>
                <h1 className='font-[font2] text-[8vw] leading-28 pt-2  uppercase hid'>Agence</h1>
                <div className='moveLink absolute flex top-0 bg-[#D3FD50] text-black '>
                    <div className='flex movex  flex-nowrap items-center'>
                        <h2 className=' font-[font2] whitespace-nowrap  text-[8vw] leading-20 mt-2   uppercase'>Pour Tout voir</h2>
                        <img className='h-30 w-96 p-3 object-cover rounded-full shrink-0'  las src={img1} alt="" />
                        <h2 className='font-[font2] whitespace-nowrap text-[8vw] leading-20 mt-2   uppercase'>Pour Tout voir</h2>
                        <img className='h-30 w-90 p-3 object-cover rounded-full shrink-0'  src={img4} alt="" />
                    </div>
                    <div className='flex movex  flex-nowrap items-center'>
                        <h2 className=' font-[font2] whitespace-nowrap  text-[8vw] leading-20 mt-2   uppercase'>Pour Tout voir</h2>
                        <img className='h-30 w-96 p-3 object-cover rounded-full shrink-0'  las src={img1} alt="" />
                        <h2 className='font-[font2] whitespace-nowrap text-[8vw] leading-20 mt-2   uppercase'>Pour Tout voir</h2>
                        <img className='h-30 w-90 p-3 object-cover rounded-full shrink-0'  src={img4} alt="" />
                    </div>
                </div>             
            </div>
             <div className='link border-t-1 cursor-pointer  border-white text-center relative '>
                <h1 className='font-[font2] text-[8vw] leading-28 pt-2  uppercase hid'>Contact</h1>
                <div className='moveLink absolute flex top-0 bg-[#D3FD50] text-black '>
                    <div className='flex movex  flex-nowrap items-center'>
                        <h2 className=' font-[font2] whitespace-nowrap  text-[8vw] leading-20 mt-2   uppercase'>Pour Tout voir</h2>
                        <img className='h-30 w-96 p-3 object-cover rounded-full shrink-0'  las src={img1} alt="" />
                        <h2 className='font-[font2] whitespace-nowrap text-[8vw] leading-20 mt-2   uppercase'>Pour Tout voir</h2>
                        <img className='h-30 w-90 p-3 object-cover rounded-full shrink-0'  src={img4} alt="" />
                    </div>
                    <div className='flex movex  flex-nowrap items-center'>
                        <h2 className=' font-[font2] whitespace-nowrap  text-[8vw] leading-20 mt-2   uppercase'>Pour Tout voir</h2>
                        <img className='h-30 w-96 p-3 object-cover rounded-full shrink-0'  las src={img1} alt="" />
                        <h2 className='font-[font2] whitespace-nowrap text-[8vw] leading-20 mt-2   uppercase'>Pour Tout voir</h2>
                        <img className='h-30 w-90 p-3 object-cover rounded-full shrink-0'  src={img4} alt="" />
                    </div>
                </div>             
            </div>
             <div className='link border-y-1 cursor-pointer  border-white text-center relative '>
                <h1 className='font-[font2] text-[8vw] leading-28 pt-2  uppercase hid'>Blouge</h1>
                <div className='moveLink absolute flex top-0 bg-[#D3FD50] text-black '>
                    <div className='flex movex  flex-nowrap items-center'>
                        <h2 className=' font-[font2] whitespace-nowrap  text-[8vw] leading-20 mt-2   uppercase'>Pour Tout voir</h2>
                        <img className='h-30 w-96 p-3 object-cover rounded-full shrink-0'  las src={img1} alt="" />
                        <h2 className='font-[font2] whitespace-nowrap text-[8vw] leading-20 mt-2   uppercase'>Pour Tout voir</h2>
                        <img className='h-30 w-90 p-3 object-cover rounded-full shrink-0'  src={img4} alt="" />
                    </div>
                    <div className='flex movex  flex-nowrap items-center'>
                        <h2 className=' font-[font2] whitespace-nowrap  text-[8vw] leading-20 mt-2   uppercase'>Pour Tout voir</h2>
                        <img className='h-30 w-96 p-3 object-cover rounded-full shrink-0'  las src={img1} alt="" />
                        <h2 className='font-[font2] whitespace-nowrap text-[8vw] leading-20 mt-2   uppercase'>Pour Tout voir</h2>
                        <img className='h-30 w-90 p-3 object-cover rounded-full shrink-0'  src={img4} alt="" />
                    </div>
                </div>             
            </div>
            
        </div>    
    </div>
  )
}

export default FullScreenNav