import React, { useState } from "react";
import "../../css/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

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
      <Link to="/" className="w-12 rounded-2xl m-2">
        <img src="./oohr.png" alt="logo" />
      </Link>
      <div id="nav">
        <ul className="navi flex list-none justify-center items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/#services" className="flex items-center justify-center">
              Services <MdOutlineArrowDropDown />
            </Link>
            <div className="dropdown_menu">
              <ul>
                <li>
                  <Link to="#" className="flex items-center justify-center">
                    Patent Services <IoMdArrowDropright />
                  </Link>
                  <div className="dropdown_menu1 ">
                    <ul>
                      <li>
                        <Link to="/patent-maintenance">Patent Maintenance</Link>
                      </li>
                      <li>
                        <Link to="/patent-drafting-illustrations">Patent Drafting</Link>
                      </li>
                      <li>
                        <Link to="/infringement-analysis-claim-charts">Infringement Analysis & Claim Charts</Link>
                      </li>
                      <li>
                        <Link to="/patent-landspace">Patent Landscape & Whitespace Analysis</Link>
                      </li>
                      <li>
                        <Link to="/office-action-response">Office Action Response</Link>
                      </li>
                      <li>
                        <Link to="/patent-filing-service">Patent Filling Service</Link>
                      </li>
                      <li>
                        <Link to="/patent-translation">Patent Translation</Link>
                      </li>
                      <li>
                        <Link to="/prior-art-search">Prior Art Searches</Link>
                      </li>
                      <li>
                        <Link to="/patentability-novelty-searches">Patentability/Novelty Searches</Link>
                      </li>
                      <li>
                        <Link to="/freedom-to-operate-search">Freedom To Operate Search</Link>
                      </li>
                      <li>
                        <Link to="/patent-validity-invalidity-searches">Patent Validity/invalidity Searches</Link>
                      </li>
                      <li>
                        <Link to="/state-art-search">State Of Art Search</Link>
                      </li>
                      <li>
                        <Link to="/chemical-structure-search">Chemical Structure Search</Link>
                      </li>
                      <li>
                        <Link to="/bio-sequence-search">Biological Sequence Search</Link>
                      </li>
                      <li>
                        <Link to="/patent-utility-design-drawings">Patent Utility/Design Drawings</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="#" className="flex items-center justify-center">
                    Solutions <IoMdArrowDropright />
                  </Link>
                  <div className="dropdown_menu1">
                    <ul>
                      <li>
                        <Link to="/ip-firms">TO IP LAW FIRMS</Link>
                      </li>
                      <li>
                        <Link to="/technology-org">TO TECHNOLOGY ORGANIZATIONS</Link>
                      </li>
                      <li>
                        <Link to="/to-college-univ">TO COLLEGES AND UNIVERTIES</Link>
                      </li>
                      <li>
                        <Link to="/ip-consulting">TO IP CONSULTING FIRMS</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="#" className="flex items-center justify-center">
                    Domains <IoMdArrowDropright />
                  </Link>
                  <div className="dropdown_menu1">
                    <ul>
                      <li>
                        <Link to="#">Trademarks</Link>
                      </li>
                      <li>
                        <Link to="/design">Design</Link>
                      </li>
                      <li>
                        <Link to="/copyright">Copyright</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="#" className="flex items-center justify-center">
                  Indian Patent <IoMdArrowDropright />
                  </Link>
                  <div className="dropdown_menu1">
                    <ul>
                      <li>
                        <Link to="#">Secure Your Invention in India</Link>
                      </li>
                      <li>
                        <Link to="#">Design Patent Application</Link>
                      </li>
                      <li>
                        <Link to="#">Opposition Searches</Link>
                      </li>
                      <li>
                        <Link to="#">Licensing & Litigation Support</Link>
                      </li>
                      <li>
                        <Link to="#">India Entry Strategy</Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/about" className="flex items-center justify-center">
              About Us {/* <MdOutlineArrowDropDown /> */}
            </Link>
            {/* <div className="dropdown_menu">
              <ul>
                <li>
                  <Link to="#">Who We Are</Link>
                </li>
                <li>
                  <Link to="#">Our Team</Link>
                </li>
                <li>
                  <Link to="#">Why us</Link>
                </li>
                <li>
                  <Link to="#">Careers</Link>
                </li>
              </ul>
            </div> */}
          </li>
          <li>
            <Link to="/domains">Domains</Link>
          </li>
          {/* <li>
            <Link to="/solutions">Solutions</Link>
          </li> */}
          <li>
            <Link to="#">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/#services" >
              Services 
            </Link>
          </li>
          <li>
            <Link to="/about">
              About Us 
            </Link>
          </li>
          <li>
            <Link to="/domains">Domains</Link>
          </li>
          <li>
            <Link to="#">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
