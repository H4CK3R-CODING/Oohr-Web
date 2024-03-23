import React from "react";

export default function FeatureBox({ data }) {
  return (
    <div className="flex flex-col m-[0.5rem]  w-3/12">
      <d className="text-[2rem] text-slate-300 font-semibold">{data.heading}</d>
      <p className=" text-black">{data.description}</p>
    </div>
  );
}
