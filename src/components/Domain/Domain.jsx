import React from "react";
import { FaHandPointRight } from "react-icons/fa";

const Domain = ({ domain }) => {
  return (
    <div
      className="w-full flex justify-evenly items-center py-6"
      // data-aos="fade-right"
      // data-aos-offset="100"
      // data-aos-easing="ease-in-sine"
    >
      <div className={`flex flex-col w-1/2`}>
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-semibold">{domain.heading}</h1>
          {domain.reasons.map((point, idx) => {
            return (
              <div className="flex items-center" key={idx}>
                <span className="p-2">
                  <FaHandPointRight />
                </span>
                <p>{point.content}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`w-1/4`}
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="300"
      >
        <img
          className="rounded-2xl shadow-[20px_20px_5px_5px] shadow-white"
          src={`${domain.img}`}
          alt="img-uploading"
        />
      </div>
    </div>
  );
};

export default Domain;
