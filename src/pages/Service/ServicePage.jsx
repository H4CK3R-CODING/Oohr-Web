import React from "react";
import { FaHandPointRight } from "react-icons/fa";

const ServicePage = ({ content }) => {
  return (
    <div className="w-full bg-[#e0efff]">
      {/* bg-gradient-to-r from-[#00E3Cd] to-[#32B89C] */}
    <div className=" w-1/2 flex flex-col justify-center items-start m-auto p-10">
      <h1 className="text-[#e05133] font-bold text-5xl text-center leading-10 my-14 m-auto">
        {content.heading}
      </h1>
      <p className="font-semibold text-[#8a8aa3] my-8">{content.para.map((ele,idx)=>{
        return (<div className="my-2 py-2" key={idx}>
          {ele}
        </div>)
      })}</p>
      {content.listPara
        ? content.listPara.map((line, idx) => {
            return (
              <div key={idx} className="flex justify-items-start py-1">
                <span className="inline m-2">
                  <FaHandPointRight />
                </span>
                <p>{line}</p>
              </div>
            );
          })
        : ""}
      <p>{content.specialPara ? content.specialPara : ""}</p>
      {content.secHeading ? (
        <h1 className="text-[#455560] font-bold text-2xl leading-10 my-6">
          {content.secHeading}
        </h1>
      ) : (
        ""
      )}
      {content.secHeading
        ? content.secondPara.map((para, idx) => {
            return (
              <div key={idx} className="font-semibold text-[#455560]">
                {para}
              </div>
            );
          })
        : ""}
    </div>
    </div>
  );
};

export default ServicePage;
