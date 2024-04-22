import React from "react";

const Patent = ({ content }) => {
  return (
    <div className="w-full bg-[#e0efff] min-h-[500px]">
      {/* bg-gradient-to-r from-[#00E3Cd] to-[#32B89C] */}
      <div className=" w-1/2 flex flex-col justify-center items-start m-auto p-10">
        <h1 className="text-[#e05133] font-bold text-5xl text-center leading-10 my-14 m-auto">
          {content.heading}
        </h1>
        <p className="font-semibold text-[#8a8aa3] my-8">{content.para}</p>
      </div>
    </div>
  );
};

export default Patent;
