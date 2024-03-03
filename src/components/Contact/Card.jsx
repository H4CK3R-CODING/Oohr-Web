import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { useAddressContext } from "../../context/AddressContext";


const Card = () => {
  const {address} = useAddressContext();

  return (
    <div>
      <div className="flex items-center">
        <div className="text-3xl m-2 text-sky-500"><CiLocationOn /></div>
        <div className="">
          <h2 className="text-md font-semibold">Location:</h2>
          <p className="text-md text-gray-400">{address.location}</p>
        </div>
      </div>
        <hr className="block m-2 w-full border-solid border-gray-500"/>
      <div className="flex items-center">
        <div className="text-3xl m-2 text-sky-500"><MdOutlineEmail /></div>
        <div className="">
          <h2 className="text-md font-semibold">Email:</h2>
          <p className="text-md text-gray-400">{address.email}</p>
        </div>
      </div>
        <hr className="block m-2 w-full border-solid border-gray-500"/>
      <div className="flex items-center">
        <div className="text-3xl m-2 text-sky-500"><IoCallOutline /></div>
        <div className="">
          <h2 className="text-md font-semibold">Call:</h2>
          <p className="text-md text-gray-400">{address.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
