import React, { useEffect, useState } from "react";
import CardContainer from "../../components/Main/Cards/CardContainer";
import Services from "../../components/Services/Services";

const Home = () => {
  const [backImg, setBackImg] = useState("./homebg.jpg");
  return (
    <div>
        <div className="opacity-90 brightness-125 h-[550px] overflow-hidden w-full flex justify-center items-center">
          <img id="homeImg" src={`${backImg}`} alt="main_page_image" />
          <div id="homepara" className="absolute top-1/4 left-1/4">
            <h1 className="text-3xl text-white font-semibold">OUR MOTTO</h1>
            <h2 className="text-3xl text-orange-500 font-bold space-x-2">HELPING COMPANIES NAVIGATE CHANGE</h2>
            <p className="text-lg text-white font-semibold">PROVIDING BEST PATENT PROSECUTION AND LITIGATION SERVICES</p>
          </div>
        </div>
      <CardContainer />
      <Services/>
    </div>
  );
};

export default Home;
