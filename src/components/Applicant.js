import React from "react";
import DeleteSVG from "../assets/delete.svg";

const Applicant = props => {
  return (
    <div className="widget__content">
      <div className="widget__content__item">
        {props.applicantRank && (
          <span className="widget__content__rank">{props.applicantRank}</span>
        )}
        <span className="widget__content__text">{props.applicantText}</span>
      </div>
      <button
        className="button button--text"
        onClick={() => props.handleRemoveApplicant(props.applicantText)}
      >
        <DeleteSVG className="icon icon--delete" />
      </button>
    </div>
  );
};

export default Applicant;
