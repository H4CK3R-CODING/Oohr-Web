import React from "react";

const Patent = ({ content }) => {
  return (
    <div className="w-full">
      {/* bg-gradient-to-r from-[#00E3Cd] to-[#32B89C] */}
      <div className=" w-1/2 flex flex-col justify-center items-start m-auto p-10">
        <h1 className="text-[#455560] font-bold text-5xl text-center leading-10 my-14 m-auto">
          {content.heading}
        </h1>
        <p className="font-semibold text-[#455560] my-8">{content.para}</p>
      </div>
    </div>
  );
};

export default Patent;
