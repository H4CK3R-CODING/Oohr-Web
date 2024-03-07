import React from "react";
import Card from "./Card";
import data from "../../utils/Services";

const Services = () => {
  return (
    <div className="flex flex-wrap justify-evenly items-center pb-20" data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
      {data[0].patents.map((ele,idx)=>{
        return <Card data={ele} key={idx}/>
      })}
      {data[1].solutions.map((ele,idx)=>{
        return <Card data={ele} key={idx}/>
      })}
      {data[2].patentDoubleHeading.map((ele,idx)=>{
        return <Card data={ele} key={idx}/>
      })}
    </div>
  );
};

export default Services;
