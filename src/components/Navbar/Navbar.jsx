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
    <div className="nav flex justify-between items-center bg-[#37517e]">
      {/* bg-gradient-to-r from-[#f0cb82] to-[#f0a881] */}
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
                    IP Services <IoMdArrowDropright />
                  </Link>
                  <div className="dropdown_menu1">
                    <ul>
                      <li>
                        <Link to="/patent-maintenance">Patent Prosecution</Link>
                        <div className="dropdown_menu2">
                          <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Home</Link></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link to="/patent-drafting-illustrations">Indian Patent</Link>
                      </li>
                      <li>
                        <Link to="/infringement-analysis-claim-charts">Patent Litigation & Commercialization</Link>
                      </li>
                      <li>
                        <Link to="/patent-landspace">Patent Searches</Link>
                      </li>
                      <li>
                        <Link to="/office-action-response">Patent Management </Link>
                      </li>
                      <li>
                        <Link to="/patent-filing-service">Trademark</Link>
                      </li>
                      <li>
                        <Link to="/patent-translation">Copyright & Design</Link>
                      </li>
                      <li>
                        <Link to="/prior-art-search">Domain Names</Link>
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
                  Indian Patent <IoMdArrowDropright />
                  </Link>
                  <div className="dropdown_menu1">
                    <ul>
                      <li>
                        <Link to="/secure-your-invention-in-india">Secure Your Invention in India</Link>
                      </li>
                      <li>
                        <Link to="/design-patent-application">Design Patent Application</Link>
                      </li>
                      <li>
                        <Link to="/opposition-searches">Opposition Searches</Link>
                      </li>
                      <li>
                        <Link to="/licensing-litigation-support">Licensing & Litigation Support</Link>
                      </li>
                      <li>
                        <Link to="/india-entry-strategy">India Entry Strategy</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="#" className="flex items-center justify-center">
                  Patent Litigation<IoMdArrowDropright />
                  </Link>
                  <div className="dropdown_menu1">
                    <ul>
                      <li>
                        <Link to="/patent-portfolio-ranking">Patent Portfolio Ranking</Link>
                      </li>
                      <li>
                        <Link to="/patent-due-diligence">Patent Due Diligence</Link>
                      </li>
                      <li>
                        <Link to="/licensing-support">Licensing Support</Link>
                      </li>
                      <li>
                        <Link to="/market-research-damage-study">Market Research Damage Study</Link>
                      </li>
                      <li>
                        <Link to="/infringement-contentions">Infringement Contentions</Link>
                      </li>
                      <li>
                        <Link to="/source-code-review">Source Code Review</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="#" className="flex items-center justify-center">
                  Patent Management <IoMdArrowDropright />
                  </Link>
                  <div className="dropdown_menu1">
                    <ul>
                      <li>
                        <Link to="/patent-proofreading">Patent Proofreading</Link>
                      </li>
                      <li>
                        <Link to="/remote-patent-docketing">Remote Patent Docketing</Link>
                      </li>
                      <li>
                        <Link to="/file-history-analysis">File History Analysis</Link>
                      </li>
                      <li>
                        <Link to="/ids-management">IDS Management</Link>
                      </li>
                      <li>
                        <Link to="/data-verification">Data Verification</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="#" className="flex items-center justify-center">
                  Trademark <IoMdArrowDropright />
                  </Link>
                  <div className="dropdown_menu1">
                    <ul>
                      <li>
                        <Link to="/trademark-filing">Trademark Filing</Link>
                      </li>
                      <li>
                        <Link to="/trademark-portfolio-analysis">Trademark Portfolio Analysis</Link>
                      </li>
                      <li>
                        <Link to="/trademark-monitoring">Trademark Monitoring</Link>
                      </li>
                      <li>
                        <Link to="/trademark-search">Trademark Search</Link>
                      </li>
                      <li>
                        <Link to="/trademark-registration">Trademark Registration</Link>
                      </li>
                      <li>
                        <Link to="/trademark-opposition">Trademark Opposition</Link>
                      </li>
                      <li>
                        <Link to="/trademark-renewal">Trademark Renewal</Link>
                      </li>
                      <li>
                        <Link to="/trademark-litigation-enforcement">Trademark Litigation/Enforcement</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="#" className="flex items-center justify-center">
                  Contract Lifecycle Management <IoMdArrowDropright />
                  </Link>
                  <div className="dropdown_menu1">
                    <ul>
                      <li>
                        <Link to="/contract-drafting-creation">Contract Drafting and Creation</Link>
                      </li>
                      <li>
                        <Link to="/contract-negotiation-review">Contract Negotiation and Review</Link>
                      </li>
                      <li>
                        <Link to="/contract-execution-management">Contract Execution and Management</Link>
                      </li>
                      <li>
                        <Link to="/contract-compliance-monitoring">Contract Compliance and Monitoring</Link>
                      </li>
                      <li>
                        <Link to="/contract-renewal-optimization">Contract Renewal and Optimization</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="#" className="flex items-center justify-center">
                  Legal Documentation Service <IoMdArrowDropright />
                  </Link>
                  <div className="dropdown_menu1">
                    <ul>
                      <li>
                        <Link to="/legal-document-drafting">Legal Document Drafting</Link>
                      </li>
                      <li>
                        <Link to="/drafting-legal-notice">Drafting of Legal Notice</Link>
                      </li>
                      <li>
                        <Link to="/commercial-litigation">Commercial Litigation</Link>
                      </li>
                      <li>
                        <Link to="/commercial-law-advisory">Commercial Law Advisory</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="#" className="flex items-center justify-center">
                  ParalegalSupport <IoMdArrowDropright />
                  </Link>
                  <div className="dropdown_menu1">
                    <ul>
                      <li>
                        <Link to="/patent-trademark-docketing">Patent and Trademark docketing</Link>
                      </li>
                      <li>
                        <Link to="/india-patent-trademark-prosecution">Prosecution Support</Link>
                      </li>
                      <li>
                        <Link to="/pta-pte-us-patents">PTA/PTE for US patents</Link>
                      </li>
                      <li>
                        <Link to="/ids-management">IDS Management</Link>
                      </li>
                      <li>
                        <Link to="/recordation">Recordation</Link>
                      </li>
                      <li>
                        <Link to="/proofreading">Proofreading</Link>
                      </li>
                      <li>
                        <Link to="/data-verification">Data verification</Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
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
                  <div className="dropdown_menu1">
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
                  Indian Patent <IoMdArrowDropright />
                  </Link>
                  <div className="dropdown_menu1">
                    <ul>
                      <li>
                        <Link to="/secure-your-invention-in-india">Secure Your Invention in India</Link>
                      </li>
                      <li>
                        <Link to="/design-patent-application">Design Patent Application</Link>
                      </li>
                      <li>
                        <Link to="/opposition-searches">Opposition Searches</Link>
                      </li>
                      <li>
                        <Link to="/licensing-litigation-support">Licensing & Litigation Support</Link>
                      </li>
                      <li>
                        <Link to="/india-entry-strategy">India Entry Strategy</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="#" className="flex items-center justify-center">
                  Patent Litigation<IoMdArrowDropright />
                  </Link>
                  <div className="dropdown_menu1">
                    <ul>
                      <li>
                        <Link to="/patent-portfolio-ranking">Patent Portfolio Ranking</Link>
                      </li>
                      <li>
                        <Link to="/patent-due-diligence">Patent Due Diligence</Link>
                      </li>
                      <li>
                        <Link to="/licensing-support">Licensing Support</Link>
                      </li>
                      <li>
                        <Link to="/market-research-damage-study">Market Research Damage Study</Link>
                      </li>
                      <li>
                        <Link to="/infringement-contentions">Infringement Contentions</Link>
                      </li>
                      <li>
                        <Link to="/source-code-review">Source Code Review</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="#" className="flex items-center justify-center">
                  Patent Management <IoMdArrowDropright />
                  </Link>
                  <div className="dropdown_menu1">
                    <ul>
                      <li>
                        <Link to="/patent-proofreading">Patent Proofreading</Link>
                      </li>
                      <li>
                        <Link to="/remote-patent-docketing">Remote Patent Docketing</Link>
                      </li>
                      <li>
                        <Link to="/file-history-analysis">File History Analysis</Link>
                      </li>
                      <li>
                        <Link to="/ids-management">IDS Management</Link>
                      </li>
                      <li>
                        <Link to="/data-verification">Data Verification</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="#" className="flex items-center justify-center">
                  Trademark <IoMdArrowDropright />
                  </Link>
                  <div className="dropdown_menu1">
                    <ul>
                      <li>
                        <Link to="/trademark-filing">Trademark Filing</Link>
                      </li>
                      <li>
                        <Link to="/trademark-portfolio-analysis">Trademark Portfolio Analysis</Link>
                      </li>
                      <li>
                        <Link to="/trademark-monitoring">Trademark Monitoring</Link>
                      </li>
                      <li>
                        <Link to="/trademark-search">Trademark Search</Link>
                      </li>
                      <li>
                        <Link to="/trademark-registration">Trademark Registration</Link>
                      </li>
                      <li>
                        <Link to="/trademark-opposition">Trademark Opposition</Link>
                      </li>
                      <li>
                        <Link to="/trademark-renewal">Trademark Renewal</Link>
                      </li>
                      <li>
                        <Link to="/trademark-litigation-enforcement">Trademark Litigation/Enforcement</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="#" className="flex items-center justify-center">
                  Contract Lifecycle Management <IoMdArrowDropright />
                  </Link>
                  <div className="dropdown_menu1">
                    <ul>
                      <li>
                        <Link to="/contract-drafting-creation">Contract Drafting and Creation</Link>
                      </li>
                      <li>
                        <Link to="/contract-negotiation-review">Contract Negotiation and Review</Link>
                      </li>
                      <li>
                        <Link to="/contract-execution-management">Contract Execution and Management</Link>
                      </li>
                      <li>
                        <Link to="/contract-compliance-monitoring">Contract Compliance and Monitoring</Link>
                      </li>
                      <li>
                        <Link to="/contract-renewal-optimization">Contract Renewal and Optimization</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="#" className="flex items-center justify-center">
                  Legal Documentation Service <IoMdArrowDropright />
                  </Link>
                  <div className="dropdown_menu1">
                    <ul>
                      <li>
                        <Link to="/legal-document-drafting">Legal Document Drafting</Link>
                      </li>
                      <li>
                        <Link to="/drafting-legal-notice">Drafting of Legal Notice</Link>
                      </li>
                      <li>
                        <Link to="/commercial-litigation">Commercial Litigation</Link>
                      </li>
                      <li>
                        <Link to="/commercial-law-advisory">Commercial Law Advisory</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="#" className="flex items-center justify-center">
                  ParalegalSupport <IoMdArrowDropright />
                  </Link>
                  <div className="dropdown_menu1">
                    <ul>
                      <li>
                        <Link to="/patent-trademark-docketing">Patent and Trademark docketing</Link>
                      </li>
                      <li>
                        <Link to="/india-patent-trademark-prosecution">Prosecution Support</Link>
                      </li>
                      <li>
                        <Link to="/pta-pte-us-patents">PTA/PTE for US patents</Link>
                      </li>
                      <li>
                        <Link to="/ids-management">IDS Management</Link>
                      </li>
                      <li>
                        <Link to="/recordation">Recordation</Link>
                      </li>
                      <li>
                        <Link to="/proofreading">Proofreading</Link>
                      </li>
                      <li>
                        <Link to="/data-verification">Data verification</Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/#services" className="flex items-center justify-center">
              Other IP Services <MdOutlineArrowDropDown />
            </Link>
            <div className="dropdown_menu">
              <ul>
              <li>
                  <ul>
                      <li>
                        <Link to="/trademark">Trademarks</Link>
                      </li>
                      <li>
                        <Link to="/design">Design</Link>
                      </li>
                      <li>
                        <Link to="/copyright">Copyright</Link>
                      </li>
                    </ul>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/#services" className="flex items-center justify-center">
              Services <MdOutlineArrowDropDown />
            </Link>
            <div className="dropdown_menu">
              <ul>
              <li>
                  <ul>
                      <li>
                        <Link to="/trademark">IP Services</Link>
                      </li>
                      <li>
                        <Link to="/design">Legal Support</Link>
                      </li>
                    </ul>
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
            <Link to="/#services" className="flex items-center justify-center" >
              Services <MdOutlineArrowDropDown />
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
