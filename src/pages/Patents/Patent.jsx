import React from "react";

const Patent = ({ content }) => {
  return (
    <div className="w-full bg-[#e0efff] flex justify-center items-center min-h-[500px]">
      {/* bg-gradient-to-r from-[#00E3Cd] to-[#32B89C] */}
      <div className=" w-full flex flex-col justify-center items-start p-10 md:w-[80vw]">
        <h1 className="text-[#e05133] font-bold text-3xl text-center leading-10 my-0 sm:text-5xl my-14">
          {content.heading}
        </h1>
        <p className="font-semibold text-[#8a8aa3] my-8">{content.para}</p>
      </div>
    </div>
  );
};

export default Patent;
