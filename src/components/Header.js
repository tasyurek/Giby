import React from "react";

const Header = props => {
  return (
    <div className="header">
      <div className="container">
        <h1 className="header__title">Raffle App</h1>
        <h2 className="header__subtitle">
          Just draw lots to determine the ranking.
        </h2>
      </div>
    </div>
  );
};

export default Header;
