import React from "react";
import Card from "./Card";
import { HiBeaker } from "react-icons/hi";
import { IoInformationCircle } from "react-icons/io5";
import { MdSecurity } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";

const CardContainer = () => {
  const data = [
    {
      icon: <HiBeaker />,
      heading: "IP PROSECUTION",
    },
    {
      icon: <IoInformationCircle />,
      heading: "IP LITIGATION",
    },
    {
      icon: <MdSecurity />,
      heading: "IP MANAGEMENT",
    },
    {
      icon: <FaDollarSign />,
      heading: "PARALEGAL",
    },
    {
      icon: <IoSearch />,
      heading: "TECHNOLOGY RESEARCH",
    },
  ];
  const CardStyle = {
    minWidth: "fit-content",
  };
  return (
    <div
      className="flex relative justify-center items-center w-full flex-wrap  py-6 bg-orange-600"
      style={CardStyle}
    >
      <div className="my-12 mx-auto  w-11/12">
        <p className="text-white mx-[2rem] text-center font-bold text-4xl mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          quam?
        </p>
        <p className=" px-8 text-center  mx-[2rem] font-semibold text-md my-4 text-amber-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          corrupti vero pariatur nihil esse mollitia earum officia, placeat
          numquam et reiciendis fugit corporis aspernatur ipsa perferendis.
          Numquam et cum culpa assumenda. Provident, aliquid ratione dolor at et
          tempora fugit quisquam accusantium inventore molestias alias iusto
          expedita eos nemo nisi consectetur?
        </p>
      </div>
      <div className="sm:h-[70px]  lg:h-[200px]"></div>
      <div className="absolute grid   grid-cols-5 my-7 translate-y-[70%] bottom-0 translate-x-[-5%]  md:translate-x-[-1%] px-4">
        {data.map((ele, idx) => {
          return <Card icon={ele.icon} heading={ele.heading} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default CardContainer;
