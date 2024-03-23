import React, { useState } from "react";
import "../../css/Contact.css";
import ContactForm from "../../components/Contact/ContactForm";
import Address from "../../components/Contact/Address";
import { Route, Routes } from "react-router-dom";
import useContact from "../../hooks/useContact";

const Contact = () => {
  const { handleIndiaAddress, handleUniteStateAddress, handleUTHAAddress } =
    useContact();

  return (
    <>
      <h1 className="text-center text-4xl font-semibold my-7">Contact US</h1>
      <div className="flex flex-row justify-center p-4 w-11/12 px-4 mx-auto">
        <button
          className="p-3 m-2 rounded-[20px] bg-gray-300"
          onClick={handleIndiaAddress}
        >
          India Office
        </button>
        <button
          className="p-3 m-2 rounded-[20px]  bg-gray-300"
          onClick={handleUniteStateAddress}
        >
          California Office
        </button>
        <button
          className="p-3 m-2 rounded-[20px]  bg-gray-300"
          onClick={handleUTHAAddress}
        >
          UTAH Office
        </button>
      </div>
      <div
        className="response_map w-11/12 mx-auto"
        data-aos="zoom-in"
        data-aos-delay="100"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
      >
        <iframe
          id="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d881637.8070937915!2d78.017135!3d30.325427999999995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1709465368186!5m2!1sen!2sin"
          width="650"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex flex-wrap justify-evenly items-center mt-8">
        <Address />
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
