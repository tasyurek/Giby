import React from "react";

const RaffleAction = props => {
  return (
    <div>
      <button onClick={props.raffle}>Draw</button>
    </div>
  );
};

export default RaffleAction;
