import React from "react";
import { FaHandPointRight } from "react-icons/fa";

const BioPara = ({ para }) => {
  return (
    <div className="my-4 w-[80vw]">
      <h1 className="text-2xl font-semibold">{para.heading}</h1>
      <p className="mt-4">{para.para}</p>
      {para.secheading ? (
        <h1 className="text-lg mt-4 font-semibold">{para.secheading}</h1>
      ) : (
        ""
      )}
      {para.listpara && (
        <p>
          {para.listpara.map((line, idx) => {
            return (
              <div key={idx} className="flex my-1">
                <span className="inline mx-2">
                  <FaHandPointRight />
                </span>
                <p>{line}</p>
              </div>
            );
          })}
        </p>
      )}
      {
        para.secpara && <p className="mt-6">{para.secpara}</p>
      }
    </div>
  );
};

export default BioPara;
