import React from "react";
import ImageSec from "../../components/OurTeam/ImageSec";

const OurTeam = () => {
  const team = [
    {
      name: "MICHAEL BELL",
      position: "Partner and Advisor",
      email: "bell_michael@myoohr.com",
      img: "./Team/michaelbell.jpg",
    },
    {
      name: "MIKE OOHR",
      position: "Founding Partner",
      email: "Mike@myoohr.com",
      img: "./Team/mikeoohr.jpg",
    },
    {
      name: "ISHFAQ KHAN",
      position: "Chief Business Development Executive",
      email: "Ishfaq@myoohr.com",
      img: "./Team/Ishfaqkhan.jpeg",
    },
    {
      name: "DAVID J. BEARDALL",
      position: "Patent Attorney",
      email: "david@myoohr.com",
      img: "./Team/davidjbeardall.png",
    },
    {
      name: "MARTIN REED",
      position: "Senior Business Development Executive",
      email: "martin_reed@myoohr.com",
      img: "./Team/dummy.jpg",
    },
    {
      name: "MATTHEW SMITH",
      position: "Senior Business Development Executive",
      email: "matthew@myoohr.com",
      img: "./Team/dummy.jpg",
    },
    {
      name: "ADVOCATE KUMAR",
      position: "Trademark Attorney",
      email: "trademark@myoohr.com",
      img: "./Team/dummy.jpg",
    },
    {
      name: "PAUL ADEKUNLE ADEDEJI",
      position: "IPR Agent",
      email: "Pauladekunleadedeji@myoohr.com",
      img: "./Team/dummy.jpg",
    },
    {
      name: "BHAT RAYEES",
      position: "Business Development Executive",
      email: "Pauladekunleadedeji@myoohr.com",
      img: "./Team/bhatrayees.jpg",
    },
    {
      name: "SHEIKH ISHFAQ",
      position: "Business Development Executive",
      email: "Pauladekunleadedeji@myoohr.com",
      img: "./Team/sheikhishfaq.jpg",
    },
  ];
  return (
    <div className="p-4">
      <h1 className="text-4xl font-semibold text-center">Our Team</h1>
      <div
        className="flex flex-wrap justify-evenly items-center py-8"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        {team.map((member, idx) => {
          return <ImageSec member={member} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default OurTeam;
