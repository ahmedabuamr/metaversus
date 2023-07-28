import React from "react";

const StartSteps = ({ item, number }) => {
  return (
    <div key={item} className="flex justify-center items-center flex-row ">
      <div className="h-[70px] w-[70px] rounded-[24px] flex justify-center items-center bg-[#323F5D]">
        <h2 className=" font-bold text-[20px] text-white"> {number}</h2>
      </div>
      <p className=" flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
        {item}
      </p>
    </div>
  );
};

export default StartSteps;
