import React from "react";

const DescSlider = () => {
  return (
    <div className="py-30">
      <div className="text-start py-2 px-2 max-sm:py-1 moveDown flex flex-col items-center justify-center">
        <h1 className="text-[3vw]  max-sm:text-[3.5vw]  font-[font2] leading-[3vw] max-sm:leading-[3.5vw]">
          Design
        </h1>
        <div className="text-[3vw] mt-4 gap-5  max-sm:text-[3.5vw]  font-[font2] leading-[3vw] max-sm:leading-[3.5vw] flex items-center justify-center">
          FrontEnd<div className="h-1 bg-amber-200 w-20"></div>Bakend
        </div>
        <div className="text-[3vw] mt-4 gap-5    max-sm:text-[3.5vw]  font-[font2] leading-[3vw] max-sm:leading-[3.5vw] flex items-center justify-center">
          Optimization<div className="h-1 bg-amber-200 w-20"></div> Database
          <div className="h-1 bg-amber-200 w-20"></div>Performance
        </div>
      </div>
    </div>
  );
};

export default DescSlider;
