import React from 'react'

const ProjectCar = ({img1,img2 ,title1 , title2 ,link1 , link2}) => {


  return (
         <>
                <div className=' lg:w-1/2 w-full h-full group relative bg-green-300 overflow-hidden rounded-none hover:rounded-[70px] transition-all ease-in-out '>
                    <img className='h-full w-full object-cover' src={img1} alt="" />
                    <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 bg-black/50 h-full w-full flex items-center justify-center  '>
                        <a href={link1} className='uppercase text-3xl font-[font1] border-2 rounded-full text-white  pt-2 px-4 '>{title1}</a>
                    </div>
                </div>
                <div className=' lg:w-1/2 w-full h-full group relative bg-green-300 overflow-hidden rounded-none hover:rounded-[70px] transition-all ease-in-out '>
                    <img className='h-full w-full object-cover' src={img2} alt="" />
                    <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 bg-black/50 h-full w-full flex items-center justify-center  '>
                        <a href={link2} className='uppercase text-3xl font-[font1] border-2 rounded-full text-white  pt-2 px-4 '>{title2}</a>
                    </div>
                </div>
            </>
  )
}

export default ProjectCar