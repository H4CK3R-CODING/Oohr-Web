import React from "react";
import { BsArrowDownCircleFill } from "react-icons/bs";
import useService from "../../hooks/useService";

const Card = ({data}) => {

  const {handleHoverIn, handleHoverOut, handleClick} = useService();
  
  return (
    <div onMouseEnter={handleHoverIn} onMouseOut={handleHoverOut} onClick={()=>{handleClick(data.path)}} className="cursor-pointer">
      <div className="serviceContainer relative rounded-xl my-12 max-w-[400px] flex" data-aos="zoom-in-down">
        <img className="aspect-square transition-all duration-500 rounded-xl w-fit h-fit" src="./minbg-1.webp" alt="team_member" />
        <div className="bg-white p-2 w-[80%] h-1/3 opacity-85 drop-shadow-2xl rounded-2xl text-center absolute top-full left-1/2 translate-y-[-50%] translate-x-[-50%]">
          <div id="icon" className="text-[50px] transition-all duration-500 border-4 border-white opacity-[10] rounded-[50%] bg-white text-[#0ea2bd] absolute top-0 left-1/2 translate-y-[-50%] translate-x-[-50%]"><BsArrowDownCircleFill /></div>
          <div className="pt-6">
            <h1 id="serviceHeading" className="text-[#3d4246] font-bold opacity-100 text-md">{data.heading}</h1>
            <p className="text-[#a5a6a9] font-semibold opacity-100">{data.brief}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
