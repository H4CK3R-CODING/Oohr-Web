import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>

      <Navbar/>
      <Home/>
      <Contact/>
      <Footer/>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    </>
  );
}

export default App;
