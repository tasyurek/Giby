import React from "react";

const RaffleAction = props => {
  return (
    <div>
      <div>
        <button
          className="button big-button"
          disabled={props.handleEmpty() || props.handleCompleted()}
          onClick={() => {
            props.handleRaffle();
          }}
        >
          {props.handleCompleted() ? "Completed" : "Draw"}
        </button>
      </div>
    </div>
  );
};

export default RaffleAction;
