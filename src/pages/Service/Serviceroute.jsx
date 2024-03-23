import React from "react";
import ServicePage from "./ServicePage";
import AllService from "../../utils/Services.js";
import CardContainer from "../../components/Main/Cards/CardContainer";
import Services from "../../components/Services/Services";
export default function Serviceroute() {
  return (
    <div>
      <CardContainer />
      <Services />
    </div>
  );
}
