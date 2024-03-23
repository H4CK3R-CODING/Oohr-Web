import React, { useEffect, useState } from "react";
import CardContainer from "../../components/Main/Cards/CardContainer";
import Services from "../../components/Services/Services";
import Codeblocks from "../../components/Home/CodeBlocks";
import FeatureBox from "../../components/Home/FeatureBox";

const Home = () => {
  const [backImg, setBackImg] = useState("./minbg-1.webp");
  const data = [
    {
      heading: "We provide safety.",
      description: ` Our IP lawyers have extraordinary abilities, decades of experience – and internationally credentialed sidekicks to support them.
  We killed the
  billable hour.
  `,
    },
    {
      heading: "We provide safety.",
      description: ` 
  The traditional law firm model is unpredictable and inefficient. We offer transparent project-based pricing for all services.
  We are
  creators, too.
  `,
    },
    {
      heading: "We provide safety.",
      description: ` 
  Many of our lawyers also are inventors and artists. We understand the creative vision and the need to protect it.
  `,
    },
  ];
  return (
    <div>
      {/* <img id="homeImg" src={`${backImg}`} alt="main_page_image" /> */}
      <CardContainer />
      <div className="bg-lime-5 py-[2rem]">
        <Codeblocks
          heading="Coding Skills"
          alignment="flex flex-row"
          button1={{ text: "Try it Yourself", route: "/Signup", active: true }}
          button2={{ text: "Learn more", route: "/About", active: false }}
          text_part1="Unlock Your"
          text_part2="with our online courses"
          code={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
          codeColor="text-black font-semibold"
          bggradient={<div className="codeBlock1 absolute"></div>}
        >
          Our courses are designed and taught by industry experts who have years
          of experience in coding and are passionate about sharing their
          knowledge with you.
        </Codeblocks>
        <Codeblocks
          heading="Coding in seconds"
          alignment=" flex flex-row-reverse"
          button1={{ text: "Continue Lesson", route: "/Signup", active: true }}
          button2={{ text: "Learn more", route: "/About", active: false }}
          text_part1="Start"
          code={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
          codeColor="text-yellow-900 font-semibold"
          bggradient={<div className="codeBlock2 absolute"></div>}
        >
          Go ahead, give it a try. Our hands-on learning environment means
          you'll be writing real code from your very first lesson.
        </Codeblocks>
      </div>
      <div className="py-[2rem] border-[2px] overflow-hidden sm:pb-[8rem]  md:pb-[2rem] mx-auto  h-auto w-full relative">
        <img
          src="https://www.pixelstalk.net/wp-content/uploads/images2/Green-Wallpapers-Photo.jpg"
          className="rotate-45  max-h-[500px] sm:scale-150 scale-125 sm:scale-150 w-full object-cover"
        />

        <div className="flex flex-row flex-wrap absolute top-8">
          <div className="text-center  w-full text-4xl font-bold text-black">
            Why Choose Oohr?
          </div>
          <div className="flex flex-row flex-wrap  w-full justify-evenly m-[1rem] items-center">
            {data.map((da) => (
              <FeatureBox data={da} />
            ))}
          </div>
        </div>
        <div className="h-[200px] bg-yellow-200 lg:h-auto"></div>
      </div>
    </div>
  );
};

export default Home;
