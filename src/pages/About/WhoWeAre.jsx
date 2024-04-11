import React from "react";
import { FaHandPointRight } from "react-icons/fa";

const WhoWeAre = () => {
  const points = [
    "Best quality work",
    "Less turnaround time",
    "Expert Team",
    "Customizable solution",
    "Cost-effective services",
  ];
  return (
    <>
      <div className="p-4">
        <h1 className="text-3xl font-semibold ">WHO WE ARE</h1>
        <p className="p-2">
          Oohr Intellectual Research is a technology consulting firm aims to be
          a leader in rendering value-added services to a global clientele offer
          strategic, and a comprehensive suite of IP support services to
          attorneys, law firms, research institutions, and corporations around
          the world. We are diligent, transparent, and stop at nothing to help
          our clients make smart and informed IP decisions most
          cost-effectively.
        </p>
        <p className="p-2">
          Our clientele includes technology enterprises, law firms, start-ups,
          individual lawyers, patent brokerage firms, and individual inventors.
          With our services, we help our clients make smarter business decisions
          based on critical insights into IP opportunities.
        </p>
        <p className="p-2">
          We powered by a technically brilliant talent pool of patent and
          management professionals (in diverse technology areas including
          Medicine, Core-Engineering, Automotive, Life Sciences, Chemistry, and
          several others) processes are consonant with the client’s methodology
          and aim at providing an extended workstation approach that requires
          minimum supervision, thus maintaining the highest standard of client
          service and value.
        </p>
      </div>
      <div className="p-4">
        <h1 className="text-3xl font-semibold ">OUR MISSION</h1>
        <p className="p-2">
          Intellectual property is the most valuable asset of anyone in this
          digital world. Technology is rapidly changing according to human life
          and necessity, protection of those inventions, ideas discoveries is an
          essential task. Our mission is to protect each
          idea/creation/invention/discovery with the best quality expertise in
          every IP service, and deliver valuable and expert solutions to each
          client for every IP assistance.
        </p>
        {points.map((point, idx) => {
          return (
            <div className="p-2 flex items-center" key={idx}>
              <span>
                <FaHandPointRight />
              </span>
              <span className="px-2">{point}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WhoWeAre;
