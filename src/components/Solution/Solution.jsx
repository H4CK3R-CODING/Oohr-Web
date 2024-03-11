import React from "react";

const Solution = ({ solution }) => {
  return (
    <div className="m-6">
      <h1 className="text-2xl font-semibold">{solution.heading}</h1>
      {solution.para.map((para,idx)=>{
        return (
            <div key={idx}><p className="text-lg py-4">{para.content}</p></div>
        )
      })}
      <p className="italic font-semibold mb-12">{solution.headpara}</p>
      {/* para heading  */}
      {solution.points
        ? solution.points.map((obj, idx) => {
            {
              return obj.heading ? <h1 key={idx} className="font-semibold my-2">{obj.heading}</h1> : "";
            }
          })
        : ""}
        {/* para points */}
      {solution.points
        ? solution.points.map((obj, idx) => {
            return <h1 className="italic" key={idx}>{obj.point}</h1>;
          })
        : ""}
    </div>
  );
};

export default Solution;
