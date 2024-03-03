import React from "react";
import "../../../css/Card.css"

const Card = ({ icon, heading }) => {
  return (
    <div data-aos="zoom-in">
    <div className="shadowStyle flex flex-col justify-center items-center w-[250px] m-4 rounded-xl h-60 cursor-pointer hover:drop-shadow-2xl">
      <div className="text-3xl m-6">{icon}</div>
      <h1 className="font-semibold text-center">{heading}</h1>
    </div>
    </div>
  );
};

export default Card;
