import React from "react";
import Card from "./Card";
import data from "../../utils/Services";
import Card1 from "./Card1";

const Services = () => {
  return (
    <div
      id="services"
      className="flex flex-wrap justify-evenly items-center pb-20"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <h1 className="block w-full text-center mt-6 font-semibold text-4xl">Our Services</h1>
      {data[0].patents.map((ele, idx) => {
        return <Card1 data={ele} key={idx} />;
      })}
      {data[0].patents.map((ele, idx) => {
        return <Card data={ele} key={idx} />;
      })}
      {data[1].solutions.map((ele, idx) => {
        return <Card data={ele} key={idx} />;
      })}
      {data[2].patentDoubleHeading.map((ele, idx) => {
        return <Card data={ele} key={idx} />;
      })}
    </div>
  );
};

export default Services;
