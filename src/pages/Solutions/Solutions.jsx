import React from "react";
import Solution from "../../components/Solution/Solution";


const Solutions = ({solutions}) => {
  
  return (
    <div>
      {/* {solutions.map((solution, idx)=>{
        return (
            <div key={idx}>
                <Solution solution={solution}/>
            </div>
        )
    })} */}
      {/* <Solution solution={solutions[1]} /> */}
    </div>
  );
};

export default Solutions;
