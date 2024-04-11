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
import Domains from "./pages/Domains/Domains";
import Patent from "./pages/Patents/Patent";
import Solutions from "./pages/Solutions/Solutions";
import useSolutions from "./hooks/useSolutions";
// import Solution from "./components/Solution/Solution";


import AllService from "./utils/Services"
import NewPatentData from "./utils/NewPatentData"
import BiologicalSequence from "./components/Services/BiologicalSequence";



function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  // const { solutions } = useSolutions();
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

        <Route path="/bio-sequence-search" element={<BiologicalSequence />} />
        

        {/* Patent New Data */}
        {NewPatentData[0].IndianPatent.map((ele, idx)=>{
          return <Route path={`${ele.path}`} element={<Patent content={ele}/>} key={idx}/>
        })}
        {NewPatentData[1].PatentLitigationCommercialization.map((ele, idx)=>{
          return <Route path={`${ele.path}`} element={<Patent content={ele}/>} key={idx}/>
        })}
        {NewPatentData[2].PatentManagement.map((ele, idx)=>{
          return <Route path={`${ele.path}`} element={<Patent content={ele}/>} key={idx}/>
        })}
        {NewPatentData[3].Trademark.map((ele, idx)=>{
          return <Route path={`${ele.path}`} element={<Patent content={ele}/>} key={idx}/>
        })}
        {NewPatentData[4].ContractLifecycleManagement.map((ele, idx)=>{
          return <Route path={`${ele.path}`} element={<Patent content={ele}/>} key={idx}/>
        })}
        {NewPatentData[5].LegalDocumentationService.map((ele, idx)=>{
          return <Route path={`${ele.path}`} element={<Patent content={ele}/>} key={idx}/>
        })}
        {NewPatentData[6].ParalegalSupport.map((ele, idx)=>{
          return <Route path={`${ele.path}`} element={<Patent content={ele}/>} key={idx}/>
        })}


        {/* <Route path="/service" element={<Services/>}/> */}
        <Route path="/about" element={<About />} />
        <Route path="/domains" element={<Domains />} />



        {/* Solutions are include in the Services Portion */}
        {/* <Route path="/solutions" element={<Solutions />} /> */}
        {/* {solutions.map((ele,idx)=>{
          return <Route path={`${ele.path}`} element={<Solution solution={ele}/>} key={idx}/>
        })} */}



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
