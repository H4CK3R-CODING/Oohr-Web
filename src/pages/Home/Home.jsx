import React, { useEffect, useState } from "react";
import CardContainer from "../../components/Main/Cards/CardContainer";
import Services from "../../components/Services/Services";

const Home = () => {
  const [backImg, setBackImg] = useState("./minbg-1.webp");
  return (
    <div>
      {/* <div className="h-[500px] overflow-hidden w-full flex justify-center items-center"><img id="homeImg" src={`${backImg}`} alt="main_page_image" /></div> */}
      <CardContainer />
      <Services/>
    </div>
  );
};

export default Home;
