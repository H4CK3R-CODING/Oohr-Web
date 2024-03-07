import React from 'react'
import Card from './Card'
import { HiBeaker } from "react-icons/hi";
import { IoInformationCircle } from "react-icons/io5";
import { MdSecurity } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";

const CardContainer = () => {
    const data = [
        {
            icon:<HiBeaker />, 
            heading: "IP PROSECUTION",
        },
        {
            icon:<IoInformationCircle />, 
            heading: "IP LITIGATION",
        },
        {
            icon:<MdSecurity />, 
            heading: "IP MANAGEMENT",
        },
        {
            icon:<FaDollarSign />, 
            heading: "PARALEGAL",
        },
        {
            icon:<IoSearch />, 
            heading: "TECHNOLOGY RESEARCH",
        },
    ];
    const CardStyle={
        minWidth: "fit-content",
    };
  return (
    <div className='flex justify-center items-center w-full flex-wrap bg-[#f3f5fa] py-6' style={CardStyle}>
        {data.map((ele)=>{
            return <Card icon={ele.icon} heading={ele.heading}/>
        })}
    </div>
  )
}

export default CardContainer
