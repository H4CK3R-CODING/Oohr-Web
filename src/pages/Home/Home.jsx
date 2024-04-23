import React, { useEffect, useState } from "react";
import CardContainer from "../../components/Main/Cards/CardContainer";
import Services from "../../components/Services/Services";
import Section2 from "../../components/Main/Section2/Section2";
import CoreValues from "../../components/Main/CoreValues/CoreValues";
import SolutionOffering from "../../components/SolutionOffering/SolutionOffering";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [backImg, setBackImg] = useState("./homebg.jpg");
  const navigate = useNavigate();
  return (
    <div className="">
        {/* <div className="opacity-90 brightness-125 h-[550px] overflow-hidden w-full flex justify-center items-center ">
          <img id="homeImg" className="h-full w-full" src={`${backImg}`} alt="main_page_image" />
          <div id="homepara" className="absolute top-1/4 left-1/4 sm: top-8 left-8 md:left-[150px] lg: left-1/4">
            <h1 className="text-3xl text-white font-semibold sm: mt-4">OUR MOTTO</h1>
            <h2 className="text-3xl text-orange-500 font-bold space-x-2 mt-4">HELPING COMPANIES NAVIGATE CHANGE</h2>
            <p className="text-lg text-white font-semibold sm: mt-4 md:">PROVIDING BEST PATENT PROSECUTION AND LITIGATION SERVICES</p>
          </div>
        </div> */}
        <div className="flex flex-col bg-[#37517e] sm:flex-row lg:h-[600px] items-center"> 
          <div className="w-1/2 flex justify-center items-center p-8">
            <div className="p-2 sm:p-8">
              <h1 className="w-[90vw] text-white font-bold text-4xl my-2 sm:w-1/2">HELPING COMPANIES NAVIGATE CHANGE.</h1>
              <h2 className="text-[#afb9cb] text-xl font-semibold my-2">PROVIDING BEST PATENT PROSECUTION AND LITIGATION SERVICES</h2>
              {/* <button className="text-white font-semibold bg-[#47b2e4] p-2 rounded-lg" onClick={()=>{navigate("/contact")}}>Contact US</button> */}
            </div>
          </div>
          <img className="w-[90vw] sm:w-1/3 animate-bounce" src="./hero-img.png" alt="img" />
        </div>
        <div className="bg-[#e0efff] h-24 flex justify-center items-center">
          <marquee scrollamount="10"><img className="h-20" src="./oohr.png" alt="img-error" /></marquee>
        </div>
      <CardContainer />
      <div className="bg-[#e0efff] w-full flex flex-col justify-center items-center">
        <Section2/>
      </div>
      <CoreValues/>
      {/* <SolutionOffering/> */}
      {/* <Services/> */}
    </div>
  );
};

export default Home;
