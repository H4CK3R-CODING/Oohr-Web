import React from "react";
import TeamMember from "./TeamMember";

export default function Team() {
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
      name: "AKASH KUMAR",
      position: "IPR Attorney",
      email: "oohrtrademark@gmail.com",
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
    <div className="text-black bg-white w-full">
      <div className="sm:bg-white flex flex-row justify-center">
        <div className="bg-[#F1C50E] w-[14vw] text-center flex items-center mt-20 lg:h-[150px] h-[50vmax]"></div>

        <div className="bg-white my-4 flex flex-col mx-auto">
          {team.map((member, index) => (
            <div className="flex flex-row flex-wrap lg:flex-nowrap" key={index}>
              <TeamMember data={member} />
            </div>
          ))}
        </div>

        <div className="bg-[#F1C50E] w-[14vw] text-center flex items-center mt-20 lg:h-[150px] h-[50vmax]"></div>
      </div>
    </div>
  );
}
