import React from "react";
import AstronomicalLogo from "../../assets/Group 53.png";

const FrontPage = () => {
  return (
    <div className="frontpage-rect">
      <img src={AstronomicalLogo} alt="AstronomicalLogo" />
      <div>
        <p>Perceiving the</p>
        <p>Universe</p>
        <p>through the star-studded eyes of oblivion</p>
      </div>
    </div>
  );
};

export default FrontPage;
