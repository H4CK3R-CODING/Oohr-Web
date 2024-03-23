import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

const FooterCol = ({ data }) => {
  return (
    <div className="m-2   p-2">
      <h1 className="text-2xl font-semibold text-white pl-3">{data.heading}</h1>
      <div className="flex items-center">
        <div className="text-3xl m-2 text-sky-500">
          <CiLocationOn />
        </div>
        <p className="text-white text-sm">{data.location}</p>
      </div>
      <div className="flex items-center">
        <div className="text-3xl m-2 text-sky-500">
          <MdOutlineEmail />
        </div>
        <p className="text-white text-sm">{data.email}</p>
      </div>
      <div className="flex items-center">
        <div className="text-3xl m-2 text-sky-500">
          <IoCallOutline />
        </div>
        <p className="text-white text-sm">{data.phone}</p>
      </div>
    </div>
  );
};

export default FooterCol;
