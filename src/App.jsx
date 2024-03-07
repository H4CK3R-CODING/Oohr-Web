import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./Footer/Footer";
import WhoWeAre from "./pages/About/WhoWeAre";
import OurTeam from "./pages/About/OurTeam";
import Services from "./components/Services/Services";
import ServicePage from "./pages/Service/ServicePage";
import About from "./pages/About/About";
import AllService from "./utils/Services"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <>

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {AllService[0].patents.map((ele, idx)=>{
          return <Route path={`${ele.path}`} element={<ServicePage content={ele}/>} key={idx}/>
        })}
        {AllService[1].solutions.map((ele, idx)=>{
          return <Route path={`${ele.path}`} element={<ServicePage content={ele}/>} key={idx}/>
        })}
        {AllService[2].patentDoubleHeading.map((ele, idx)=>{
          return <Route path={`${ele.path}`} element={<ServicePage content={ele}/>} key={idx}/>
        })}
        <Route path="/service" element={<Services/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>


      {/* <WhoWeAre/> */}


      {/* ready pages */}

      {/* <Contact/> */}
      {/* <OurTeam/> */}
    </>
  );
}

export default App;
