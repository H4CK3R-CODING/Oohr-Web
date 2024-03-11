import React from "react";
import useDomains from "../../hooks/useDomains";
import Domain from "../../components/Domain/Domain";

const Domains = () => {
  const {domains} = useDomains();
  return (
    <div>
      <span className="py-4"><h1 className="py-5 text-center text-2xl font-semibold ">TECHNOLOGY DOMAINS</h1></span>
      {Array.from(domains).map((domain, idx) => {
        return <Domain domain={domain} key={idx}/>;
      })}
    </div>
  );
};

export default Domains;
