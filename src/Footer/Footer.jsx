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
      gmap: "https://www.google.com/maps/place/2931+Hickory+Pl,+Fullerton,+CA+92835,+USA/@33.904642,-117.889405,16z/data=!4m6!3m5!1s0x80dcd5a8af4e0947:0x1b58310e47fef63b!8m2!3d33.9046415!4d-117.8894049!16s%2Fg%2F11cpd8yzw6?hl=en&entry=ttu",
    },
    {
      heading: "US OFFICE 2",
      location: "416 West 40 South Providence UTAH 84332",
      phone: "+1 714-882-1896",
      email: "matthew@myoohr.com",
      gmap: "https://www.google.com/maps/place/416+W+40+S,+Providence,+UT+84332,+USA/@41.707291,-111.828343,14z/data=!4m6!3m5!1s0x87547e4b9f21d481:0x595298596b977eec!8m2!3d41.707291!4d-111.828343!16s%2Fg%2F11qg1193x_?hl=en&entry=ttu",
    },
    {
      heading: "INDIA OFFICE",
      location: "Suit-102, Dehradun, Uttarakhand India, 248001",
      phone: "+91 60063-75267",
      email: "martin_reed@myoohr.com",
      gmap: "https://www.google.com/maps?ll=30.279295,77.780929&z=10&t=m&hl=en&gl=IN&mapclient=embed&q=Dehradun+Uttarakhand",
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
