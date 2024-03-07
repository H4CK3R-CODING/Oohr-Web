import React from "react";
import { FaHandPointRight } from "react-icons/fa";

const ServicePage = ({ content }) => {
  return (
    <div className="flex flex-col justify-center items-start m-10 p-10">
      <h1 className="text-[#3d4246] font-bold text-2xl leading-10 my-6">
        {content.heading}
      </h1>
      <p className="font-semibold">{content.para}</p>
      {content.listPara
        ? content.listPara.map((line, idx) => {
            return (
              <div key={idx} className="flex justify-items-start items-center">
                <span className="inline m-2">
                  <FaHandPointRight />
                </span>
                <p>{line}</p>
              </div>
            );
          })
        : ""}
      <p>{content.specialPara ? content.specialPara : ""}</p>
      {content.secHeading ? (<h1 className="text-[#3d4246] font-bold text-2xl leading-10 my-6">{content.secHeading}</h1>) : ""}
      {content.secHeading ? content.secondPara.map((para,idx)=>{
        return (
          <div key={idx} className="font-semibold">
            {para}
          </div>
        );
      }) : ""}
    </div>
  );
};

export default ServicePage;
