import React from "react";
import Applicant from "./Applicant";

const Applicants = props => {
  return (
    <div>
      <button onClick={props.removeAll}>Remove All</button>

      {props.applicants.map((applicant, index) => (
        <Applicant key={index} applicant={applicant} />
      ))}
    </div>
  );
};

export default Applicants;
