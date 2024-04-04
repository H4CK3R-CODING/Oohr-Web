import React, { useState } from "react";
import "../../css/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";

const Navbar = () => {
  const [hamberger, setHamberger] = useState(true);
  const changeHamburgerIcon = () => {
    setHamberger((curr) => {
      return !curr;
    });
    const x = document.querySelector(".hami");
    x.classList.toggle("ham");
    console.log(x.classList);
  };
  return (
    // bg-[#E87461]
    <div className="nav flex justify-between items-center  bg-gradient-to-r from-[#f0cb82] to-[#f0a881]">
      {/* <div className="w-12 rounded-2xl m-2">
        <img src="./oohrlogo.webp" alt="logo" />
      </div> */}
      <a href="/" className="w-12 rounded-2xl m-2">
        <img src="./oohr.png" alt="logo" />
      </a>
      <div id="nav">
        <ul className="navi flex list-none justify-center items-center">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#services" className="flex items-center justify-center">
              Services {/* <MdOutlineArrowDropDown /> */}
            </a>
            {/* <div className="dropdown_menu">
              <ul>
                <li>
                  <a href="#" className="flex items-center justify-center">
                    Patent Services <IoMdArrowDropright />
                  </a>
                  <div className="dropdown_menu1 ">
                    <ul>
                      <li>
                        <a href="#">Patent Maintenance</a>
                      </li>
                      <li>
                        <a href="#">Patent Drafting</a>
                      </li>
                      <li>
                        <a href="#">Infringement Analysis & Claim Charts</a>
                      </li>
                      <li>
                        <a href="#">Patent Landscape & Whitespace Analysis</a>
                      </li>
                      <li>
                        <a href="#">Office Action Response</a>
                      </li>
                      <li>
                        <a href="#">Patent Filling Service</a>
                      </li>
                      <li>
                        <a href="#">Patent Translation</a>
                      </li>
                      <li>
                        <a href="#">Prior Art Searches</a>
                      </li>
                      <li>
                        <a href="#">Patentability/Novelty Searches</a>
                      </li>
                      <li>
                        <a href="#">Freedom To Operate Search</a>
                      </li>
                      <li>
                        <a href="#">Patent Validity/invalidity Searches</a>
                      </li>
                      <li>
                        <a href="#">State Of Art Search</a>
                      </li>
                      <li>
                        <a href="#">Chemical Structure Search</a>
                      </li>
                      <li>
                        <a href="#">Biological Sequence Search</a>
                      </li>
                      <li>
                        <a href="#">Patent Utility/Design Drawings</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center">
                    Domains <IoMdArrowDropright />
                  </a>
                  <div className="dropdown_menu1">
                    <ul>
                      <li>
                        <a href="#">Trademarks</a>
                      </li>
                      <li>
                        <a href="#">Design</a>
                      </li>
                      <li>
                        <a href="#">Copyright</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div> */}
          </li>
          <li>
            <a href="/about" className="flex items-center justify-center">
              About Us {/* <MdOutlineArrowDropDown /> */}
            </a>
            {/* <div className="dropdown_menu">
              <ul>
                <li>
                  <a href="#">Who We Are</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Why us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div> */}
          </li>
          <li>
            <a href="/domains">Domains</a>
          </li>
          {/* <li>
            <a href="/solutions">Solutions</a>
          </li> */}
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
      <div
        id="hamburger"
        className="text-3xl text-white cursor-pointer m-4 transition-all duration-300"
        onClick={changeHamburgerIcon}
      >
        {hamberger ? <GiHamburgerMenu /> : <RxCross2 />}
      </div>
      <div className="hami">
      <ul className="navi flex flex-col list-none justify-center items-center">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#services" >
              Services 
            </a>
          </li>
          <li>
            <a href="/about">
              About Us 
            </a>
          </li>
          <li>
            <a href="/domains">Domains</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
