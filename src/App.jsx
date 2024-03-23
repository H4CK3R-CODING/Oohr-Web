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
import AllService from "./utils/Services";
import Domains from "./pages/Domains/Domains";
import Solutions from "./pages/Solutions/Solutions";
import useSolutions from "./hooks/useSolutions";
import Serviceroute from "./pages/Service/Serviceroute";
// import Solution from "./components/Solution/Solution";

// function App() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1200,
//     });
//   }, []);

//   // const { solutions } = useSolutions();
//   return (
//     <div className="bg-lime-50">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {AllService[0].patents.map((ele, idx) => {
//           return (
//             <Route
//               path={`${ele.path}`}
//               element={<ServicePage content={ele} />}
//               key={idx}
//             />
//           );
//         })}
//         {AllService[1].solutions.map((ele, idx) => {
//           return (
//             <Route
//               path={`${ele.path}`}
//               element={<ServicePage content={ele} />}
//               key={idx}
//             />
//           );
//         })}
//         {AllService[2].patentDoubleHeading.map((ele, idx) => {
//           return (
//             <Route
//               path={`${ele.path}`}
//               element={<ServicePage content={ele} />}
//               key={idx}
//             />
//           );
//         })}
//         {/* <Route path="/service" element={<Services/>}/> */}
//         <Route path="/about" element={<About />} />
//         <Route path="/domains" element={<Domains />} />
//         <Route path="/#services" element={<Serviceroute />} />
//         <Route path="/contact" element={<Contact />} />
//         {/* Solutions are include in the Services Portion */}
//         {/* <Route path="/solutions" element={<Solutions />} /> */}
//         {/* {solutions.map((ele,idx)=>{
//           return <Route path={`${ele.path}`} element={<Solution solution={ele}/>} key={idx}/>
//         })} */}
//       </Routes>
//       <Footer />

//       {/* <WhoWeAre/> */}

//       {/* ready pages */}

//       {/* <Contact/> */}
//       {/* <OurTeam/> */}
//     </div>
//   );
// }
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  // const { solutions } = useSolutions();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {AllService[0].patents.map((ele, idx) => {
          return (
            <Route
              path={`${ele.path}`}
              element={<ServicePage content={ele} />}
              key={idx}
            />
          );
        })}
        {AllService[1].solutions.map((ele, idx) => {
          return (
            <Route
              path={`${ele.path}`}
              element={<ServicePage content={ele} />}
              key={idx}
            />
          );
        })}
        {AllService[2].patentDoubleHeading.map((ele, idx) => {
          return (
            <Route
              path={`${ele.path}`}
              element={<ServicePage content={ele} />}
              key={idx}
            />
          );
        })}
        <Route path="/services" element={<Serviceroute />} />
        <Route path="/about" element={<About />} />
        <Route path="/domains" element={<Domains />} />

        {/* Solutions are include in the Services Portion */}
        {/* <Route path="/solutions" element={<Solutions />} /> */}
        {/* {solutions.map((ele,idx)=>{
          return <Route path={`${ele.path}`} element={<Solution solution={ele}/>} key={idx}/>
        })} */}

        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

      {/* <WhoWeAre/> */}

      {/* ready pages */}

      {/* <Contact/> */}
      {/* <OurTeam/> */}
    </>
  );
}
export default App;
