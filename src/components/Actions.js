import React from "react";

const Actions = props => {
  return (
    <div className="actions">
      <button
        className="button big-button big-button--reset"
        onClick={props.handleReset}
      >
        Reset
      </button>

      <button
        className="button big-button big-button--draw"
        disabled={props.handleEmpty() || props.handleCompleted()}
        onClick={() => {
          props.handleRaffle();
        }}
      >
        {props.handleCompleted() ? "Completed" : "Draw"}
      </button>
    </div>
  );
};

export default Actions;
