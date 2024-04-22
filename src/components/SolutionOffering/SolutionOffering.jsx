import React from "react";
import SolutionCard from "./SolutionCard";
import { useMediaQuery,useTheme } from "@mui/material";

const SolutionOffering = () => {

  const theme=useTheme();
  let isMatch=useMediaQuery(theme.breakpoints.down('md'));
  const SolutionCards = [
    {
      heading: ` TO IP
LAWFIRMS`,
      backimg: "./SolutionOffering/law2.jpg",
      content:
        "We strengthen your Services with our vast Technology Expertise and IP experience – Get your Searches, Drafting, Proof Reading, Illustrations ….",
      link: "/to_ip_lawfirms",
    },
    {
      heading: `TO TECHNOLOGY
ORGANIZATIONS`,
      backimg: "./SolutionOffering/tech.jpg",
      content:
        "Services -Technology Landscapes & Insights, White space analysis, FTO, Infringement Analysis, Rapid Novelty Searches, and IP Admin Services ….",
      link: "/to_tech_organization",
    },
    {
      heading: `TO IP CONSULTINGFIRMS`,
      backimg: "./SolutionOffering/consulting.jpg",
      content:
        "We provide our help and assistance to other IP consulting companies in managing their IP projects, and to produce a variety of patent and technology ….",
      link: "/to_ip_consulting",
    },
    {
      heading: `TO COLLEGES AND
  UNIVERSITIES`,
      backimg: "./SolutionOffering/uni.jpg",
      content:
        "College students always have new inventions and some futuristic ideas. We provide our support to Patent Monetization Services, Licensing Support ….",
      link: "/to_colleges_universities",
    },
  ];

  return (
    <div
      style={{
        margin: "auto",
        width: "100%",
        background: "#F5F5F5",
      }}
    >
      <h1
        style={{
          fontFamily: "sans-serif",
          fontWeight: "500",
          textTransform: "uppercase",
          textAlign: "center",
        }}
        className="text-4xl pt-4"
      >
        Solutions Offerings
      </h1>
      <br/>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexFlow: "wrap",
            padding: "3%",
            paddingTop:"0",
            gap: "25px",
            height: "fit-content",
            width: isMatch?"370px":"910px",
          }}
        >
          {SolutionCards.map((el, index) => (
            <SolutionCard
              heading={el.heading}
              backimg={el.backimg}
              content={el.content}
              key={index}
              link={el.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionOffering;
