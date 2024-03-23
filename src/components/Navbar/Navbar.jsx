import React from "react";
import "../../css/Navbar.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex justify-between px-[5rem]  fontstyle items-center bg-[#E87461] border-b-[2px] border-red-700 ">
      {/* <div className="w-12 rounded-2xl m-2">
        <img src="./oohrlogo.webp" alt="logo" />
      </div> */}
      <a href="#" className="w-12 rounded-2xl   ">
        <img src="./oohrlogo.webp" alt="logo" />
      </a>
      <div className=" text-[1.2rem] flex flex-wrap flex-row text-center font-bold">
        <ul className="navi flex list-none justify-center items-center">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/services" className="flex items-center justify-center">
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
    </div>
  );
};

export default Navbar;
