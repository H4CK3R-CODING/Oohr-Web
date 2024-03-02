import React, { useEffect } from "react";
import { Bs123 } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(()=>{
    AOS.init({
      duration: 2000,
    });
  },[])
  return (
    <div>
      <p className="underline">
        Home
        <span className="text-fuchsia-800 text-4xl">
          <Bs123 />
        </span>
      </p>
      <div className="box bg-red-500 w-7" data-aos="fade-up">s</div>
      <div className="box bg-blue-200 w-7"  data-aos="zoom-in-down">g</div>
    </div>
  );
};

export default Home;
