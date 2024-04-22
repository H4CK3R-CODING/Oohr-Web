import React from "react";
import "./SolutionCard.css";
import { useNavigate } from "react-router-dom";

const SolutionCard = ({ heading, backimg, content, link }) => {
  const navigate = useNavigate();
  const redirect = () => {
    console.log("hello");
    navigate(link);
  };
  return (
    <div className="flip-card" onClick={redirect}>
      <div className="flip-card-inner">
        <div
          className="flip-card-front"
          style={{
            width: "100%",
            backgroundImage: `url(${backimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            height: "100%",
            borderRadius: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <pre
            style={{
              fontSize: "25px",
              color: "white",
              fontWeight: "700",
              backfaceVisibility: "hidden",
            }}
          >
            {heading}
          </pre>
        </div>
        <div
          className="flip-card-back"
          style={{
            width: "100%",
            backgroundImage: `url(${backimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            height: "100%",
            borderRadius: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ wordWrap: "break-word" }}>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
