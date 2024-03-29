import React from "react";
import { FaHandPointRight } from "react-icons/fa";

const Domain = ({ domain }) => {
  return (
    <div
      className="w-full sm:flex flex-col md:flex-row justify-evenly items-center py-6 "
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <div className={`flex flex-col sm:w-[90vw] my-6 items-center`}>
        <div className="flex flex-col items-start">
          <h1 className="sm:my-3 w-[80vw] md:w-1/2 lg:text-2xl font-semibold ">
            {domain.heading}
          </h1>
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
        className={`sm:w-[80vw] p-5 md:w-1/2`}
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
      >
        <img
          className="sm:w-[80vw] rounded-2xl md:w-full"
          src={`${domain.img}`}
          alt="img-uploading"
        />
      </div>
    </div>
  );
};

export default Domain;
