import React from "react";
import "./navbar.css";

import Logo from "../../assets/logo.svg";
import SA from "../../assets/sa.svg";

function Navbar() {
  return (
    <div className="navbar-section">
      <div className="text-slider">
        <div className="left-text">
          <p>COMING SOON ON TAKEALOT</p>
        </div>
        <div className="logo">
          <img src={Logo} alt="DrinkPrimeSA" />
        </div>
        <div className="right-text">
          <p>
            NATIONWIDE DELIVERY AVAILABLE
            <img className="sa" src={SA} alt="South Africa" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;


