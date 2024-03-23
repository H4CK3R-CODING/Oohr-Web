import React from "react";
import { Link } from "react-router-dom";
export default function CTAButton({ children, route, active, className }) {
  return (
    <Link to={route} className={`w-auto `}>
      <div
        className={` ${
          active ? "bg-yellow-500 text-black" : "bg-slate-800 text-white "
        } font-bold drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] ${className} p-2 w-full m-2 hover:p-2 scale-95 text-center items-center flex justify-center flex-row transition-all duration-200 rounded-lg hover:drop-shadow-[0]`}
      >
        {children}
      </div>
    </Link>
  );
}
