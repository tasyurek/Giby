import React from "react";
import Applicant from "./Applicant";

const Applicants = props => {
  return (
    <div>
      <div className="widget__header">
        <p>Applicants</p>
        <button className="button button--text" onClick={props.handleRemoveAll}>
          Remove All
        </button>
      </div>
      <div>
        {props.applicants.length == 0 && (
          <p className="widget__message">
            Enter the applicant name to get started.{" "}
          </p>
        )}
      </div>
      <div className="widget-container">
        {props.applicants.map((applicant, index) => (
          <Applicant
            key={index}
            applicantText={applicant.text}
            applicantRank={applicant.rank}
            handleRemoveApplicant={props.handleRemoveApplicant}
          />
        ))}
      </div>
    </div>
  );
};

export default Applicants;
