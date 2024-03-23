import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import HighlightText from "./HighlightText";
import CTAButton from "./Button";
import { TypeAnimation } from "react-type-animation";

export default function Codeblocks({
  children,
  alignment,
  button1,
  button2,
  text_part1,
  text_part2,
  heading,
  code,
  codeColor,
  bggradient,
}) {
  return (
    <div
      className={`${alignment} gap-2  flex-wrap relative mt-[8rem] mx-auto w-auto `}
    >
      {/* section 1 */}
      <div className="w-5/12 mx-auto ">
        <div className="text-4xl font-bold  mb-6 text-black font-semibold">
          <p>
            {text_part1} <HighlightText text={heading} /> {text_part2}
          </p>
        </div>
        <div className="text-[1rem]  text-black ">
          <p>{children}</p>
        </div>
        <div className="text-center flex justify-start gap-3 w-9/12  b mt-8 items-center flex-row flex-wrap">
          <CTAButton active={button1.active} route={button1.route}>
            {button1.text}{" "}
            <div className="text-center items-center m-2 ">
              <FaLongArrowAltRight />
            </div>
          </CTAButton>
          <CTAButton active={button2.active} route={button2.route}>
            {button2.text}
          </CTAButton>
        </div>
      </div>
      {/* section2 */}
      <div
        className={`w-5/12 mx-auto relative overflow-hidden p-1 border-black border-[1.5px] ${codeColor} flex flex-row `}
      >
        {bggradient}
        <div className="p-1 m-2 text-center">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
        </div>
        <div className="p-1 m-2">
          <TypeAnimation
            sequence={[code, 1000, ""]}
            repeat={Infinity}
            speed={50}
            omitDeletionAnimation="true"
            style={{ fontsize: `2em`, whiteSpace: "pre-line" }}
            // cursor={true}
          />
        </div>
      </div>
    </div>
  );
}
