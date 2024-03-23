import React from "react";
import "../../../css/Card.css";

const Card = ({ icon, heading }) => {
  return (
    <div data-aos="zoom-in">
      <div className="shadowStyle flex flex-col  shadow-[2px_2px_5px_5px] shadow-slate-300 justify-center items-center w-[150px] m-4 rounded-xl p-2  h-[160px] cursor-pointer hover:drop-shadow-2xl">
        <div className="text-3xl m-6">{icon}</div>
        <h1 className="font-semibold text-center">{heading}</h1>
      </div>
    </div>
  );
};

export default Card;
