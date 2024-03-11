import React, { useEffect, useState } from "react";
import CardContainer from "../../components/Main/Cards/CardContainer";
import Services from "../../components/Services/Services";

const Home = () => {
  const [backImg, setBackImg] = useState("./minbg-1.webp");
  return (
    <div>
      {/* <img id="homeImg" src={`${backImg}`} alt="main_page_image" /> */}
      <CardContainer />
      <Services/>
    </div>
  );
};

export default Home;
