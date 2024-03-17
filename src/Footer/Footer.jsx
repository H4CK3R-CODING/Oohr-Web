import React from "react";
import FooterCol from "./FooterCol";
import Socail from "./Socail";
import "../css/Footer.css";

const Footer = () => {
  const data = [
    {
      heading: "US OFFICE 1",
      location: "2931 Hickory Place, Fullerton, California 92835,United State",
      phone: "+1 714-882-1896",
      email: "mike@gmail.com",
    },
    {
      heading: "US OFFICE 2",
      location: "416 West 40 South Providence UTAH 84332",
      phone: "+1 714-882-1896",
      email: "matthew@myoohr.com",
    },
    {
      heading: "INDIA OFFICE",
      location: "Suit-102, Dehradun, Uttarakhand India, 248001",
      phone: "+91 60063-75267",
      email: "martin_reed@myoohr.com",
    },
  ];

  return (
    <div>
      <div id="foot_content" className="bg-[#485664] p-6 flex justify-evenly">
          {data.map((e, idx) => {
            return <div className="foot_content_id " key={idx} ><FooterCol data={e}/></div>;
          })}
          <div className="extra_container">
            <Socail />
          </div>
      </div>
      <div className="bg-[#3a4753] h-20 flex justify-evenly items-center">
        <p className="text-white text-center">
          &copy; Copyright{" "}
          <span className="font-semibold">OOHR INTELLECTUAL RESEARCH.</span> All
          Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
