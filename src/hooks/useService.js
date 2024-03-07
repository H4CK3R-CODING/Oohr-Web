import React from "react";
import Card from "../components/Contact/Card";

const useService = () => {
  const handleHoverIn = () => {
    // use queryall
    const serviceContainer = document.querySelectorAll(".serviceContainer");
    Array.from(serviceContainer).map((ele) => {
      return ele.addEventListener("mouseover", () => {
        // change heading color
        const serviceHeading = ele.querySelector("#serviceHeading");
        serviceHeading.style.color = "#0ea2bd";
        // zoom image
        const img = ele.querySelector("img");
        img.style.transform = "scale(1.03)";
        // change theme of icon
        const icon = ele.querySelector("#icon");
        icon.style.backgroundColor = "#0ea2bd";
        icon.style.color = "white";
        icon.style.border = "2px solid #0ea2bd";
      });
    });
  };
  
  const handleHoverOut = () => {
    const serviceContainer = document.querySelectorAll(".serviceContainer");
    Array.from(serviceContainer).map((ele) => {
      return ele.addEventListener("mouseout", () => {
        // change heading color
        const serviceHeading = ele.querySelector("#serviceHeading");
        serviceHeading.style.color = "#3d4246";
        // zoom image
        const img = ele.querySelector("img");
        img.style.transform = "scale(1)";
        // change theme of icon
        const icon = ele.querySelector("#icon");
        icon.style.backgroundColor = "white";
        icon.style.color = "#0ea2bd";
        icon.style.border = "2px solid white";
      });
    });
  };

  const handleClick = (path) =>{
    window.location = `${path}`;
    // window.open(`${<Card/>}`,"_parent")
    // window.open(`${<Card/>}`,"_parent");
  }

  return { handleHoverIn, handleHoverOut, handleClick};
};

export default useService;
