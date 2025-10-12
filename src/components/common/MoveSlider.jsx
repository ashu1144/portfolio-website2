import React from 'react'

const MoveSlider = ({title , color ,movement}) => {
  return (
    <div className= {`overflow-hidden flex gap-5 ${color} -rotate-2  h-full w-full`}>
        <h2 className={` ${movement} font-[font2] whitespace-nowrap  text-[25vw] lg:text-[5vw]  leading-19 lg:eading-22 pt-5 lg:pt-2   uppercase`}>{title} </h2>
        <h2 className={` ${movement} font-[font2] whitespace-nowrap  text-[25vw] lg:text-[5vw]  leading-19 lg:eading-22 pt-5 lg:pt-2   uppercase`}>{title} </h2>
        <h2 className={` ${movement} font-[font2] whitespace-nowrap  text-[25vw] lg:text-[5vw]  leading-19 lg:eading-22 pt-5 lg:pt-2   uppercase`}>{title} </h2>
        <h2 className={` ${movement} font-[font2] whitespace-nowrap  text-[25vw] lg:text-[5vw]  leading-19 lg:eading-22 pt-5 lg:pt-2   uppercase`}>{title} </h2>
        <h2 className={` ${movement} font-[font2] whitespace-nowrap  text-[25vw] lg:text-[5vw]  leading-19 lg:eading-22 pt-5 lg:pt-2   uppercase`}>{title} </h2>
        <h2 className={` ${movement} font-[font2] whitespace-nowrap  text-[25vw] lg:text-[5vw]  leading-19 lg:eading-22 pt-5 lg:pt-2   uppercase`}>{title} </h2>

    </div>
  )
}

export default MoveSlider