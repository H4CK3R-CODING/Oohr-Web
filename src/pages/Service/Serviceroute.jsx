import React from "react";
import ServicePage from "./ServicePage";
import AllService from "../../utils/Services.js";

export default function Serviceroute() {
  return (
    <div>
      {AllService[0].patents.map((ele, idx) => {
        return (
          <Route
            path={`${ele.path}`}
            element={<ServicePage content={ele} />}
            key={idx}
          />
        );
      })}
      {AllService[1].solutions.map((ele, idx) => {
        return (
          <Route
            path={`${ele.path}`}
            element={<ServicePage content={ele} />}
            key={idx}
          />
        );
      })}
      {AllService[2].patentDoubleHeading.map((ele, idx) => {
        return (
          <Route
            path={`${ele.path}`}
            element={<ServicePage content={ele} />}
            key={idx}
          />
        );
      })}
    </div>
  );
}
