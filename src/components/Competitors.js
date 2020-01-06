import React from "react";
import Compoetitor from "./Competitor";

const Competitors = props => {
  return (
    <div>
      <button>Remove All</button>
      {props.competitors.map((competitor, index) => (
        <Compoetitor key={index} competitor={competitor} />
      ))}
    </div>
  );
};

export default Competitors;
