import React from "react";
import ImageSec from "../../components/OurTeam/ImageSec";
import TeamMembers from "../../components/OurTeam/TeamMembers";
import Team from "../../components/OurTeam/Team";

const OurTeam = () => {
  // const team = [
  //   {
  //     name: "MICHAEL BELL",
  //     position: "Partner and Advisor",
  //     email: "bell_michael@myoohr.com",
  //     img: "./Team/michaelbell.jpg",
  //   },
  //   {
  //     name: "MIKE OOHR",
  //     position: "Founding Partner",
  //     email: "Mike@myoohr.com",
  //     img: "./Team/mikeoohr.jpg",
  //   },
  //   {
  //     name: "ISHFAQ KHAN",
  //     position: "Chief Business Development Executive",
  //     email: "Ishfaq@myoohr.com",
  //     img: "./Team/Ishfaqkhan.jpeg",
  //   },
  //   {
  //     name: "DAVID J. BEARDALL",
  //     position: "Patent Attorney",
  //     email: "david@myoohr.com",
  //     img: "./Team/davidjbeardall.png",
  //   },
  //   {
  //     name: "MARTIN REED",
  //     position: "Senior Business Development Executive",
  //     email: "martin_reed@myoohr.com",
  //     img: "./Team/dummy.jpg",
  //   },
  //   {
  //     name: "MATTHEW SMITH",
  //     position: "Senior Business Development Executive",
  //     email: "matthew@myoohr.com",
  //     img: "./Team/dummy.jpg",
  //   },
  //   {
  //     name: "AKASH KUMAR",
  //     position: "IPR Attorney",
  //     email: "oohrtrademark@gmail.com",
  //     img: "./Team/dummy.jpg",
  //   },
  //   {
  //     name: "PAUL ADEKUNLE ADEDEJI",
  //     position: "IPR Agent",
  //     email: "Pauladekunleadedeji@myoohr.com",
  //     img: "./Team/dummy.jpg",
  //   },
  //   {
  //     name: "BHAT RAYEES",
  //     position: "Business Development Executive",
  //     email: "Pauladekunleadedeji@myoohr.com",
  //     img: "./Team/bhatrayees.jpg",
  //   },
  //   {
  //     name: "SHEIKH ISHFAQ",
  //     position: "Business Development Executive",
  //     email: "Pauladekunleadedeji@myoohr.com",
  //     img: "./Team/sheikhishfaq.jpg",
  //   },
  // ];
  return (
    <div className="sm:p-4 w-full">
      <h1 className="text-5xl font-bold text-center font-Roboto mt-8">OUR PERFECT TEAM</h1>
      <div
        className="flex flex-wrap justify-evenly items-center py-8 w-full"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        {/* {team.map((member, idx) => {
          // return <Team member={member} key={idx} />;
          return <TeamMembers member={member} key={idx} />;
          return <ImageSec member={member} key={idx} />;
        })} */}
        <Team />;
      </div>
    </div>
  );
};

export default OurTeam;
