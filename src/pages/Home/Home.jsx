import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CardContainer from "../../components/Main/Cards/CardContainer";



const Home = () => {
  const [backImg,setBackImg] = useState("./minbg-1.webp");
  useEffect(()=>{
    AOS.init({
      duration: 2000,
    });
  },[])
  return (
    <div>
      {/* <CardContainer /> */}
      
    </div>
  );
};

export default Home;
