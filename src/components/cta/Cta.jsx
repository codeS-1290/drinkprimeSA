import React from "react";
import "./cta.css";

import Blob from "../../assets/Blobs.svg";

function Cta() {
  return (
    <div className="Cta-section">
      <div className="blobs-container">
        <img src={Blob} alt="Blob Background" />
      </div>
      <div className="cta-card-holder">


      <div className="cta-card">
        <p className="call">Are You Ready?</p>
        <h1>Elevate your thirst game with DrinkPrimeSA!</h1>

        <button className="buy">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <p>How to Buy</p>
        </button>
        </div>
      </div>
    </div>
  );
}

export default Cta;
