import React, { useEffect, useState } from "react";
import CardContainer from "../../components/Main/Cards/CardContainer";

const Home = () => {
  const [backImg, setBackImg] = useState("./minbg-1.webp");
  return (
    <div>
      {/* <img id="homeImg" src={`${backImg}`} alt="main_page_image" /> */}
      <CardContainer />
    </div>
  );
};

export default Home;
