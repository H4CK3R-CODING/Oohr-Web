import React from "react";
import { BsArrowDownCircleFill } from "react-icons/bs";
import useService from "../../hooks/useService";
import { Link } from "react-router-dom";

const Card1 = ({data}) => {

  const {handleHoverIn, handleHoverOut, handleClick} = useService();
  
  return (
    <div onMouseEnter={handleHoverIn} onMouseOut={handleHoverOut} onClick={()=>{handleClick(data.path)}} className="cursor-pointer">
      <div className="relative rounded-xl my-12 max-w-[400px] flex flex-col p-4 justify-center items-center border-black border-[1px]" >
        <h1 className="pb-2 font-semibold text-[#e35b3c]">{data.heading}</h1>
        <p className="pb-2 text-gray-500">{data.brief}</p>
        <Link className="text-blue-500 p-1 border-b-2 border-black" to={`${data.path}`}>Read More</Link>
      </div>
    </div>
  );
};

export default Card1;
