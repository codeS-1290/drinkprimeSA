import React from "react";
import { animateScroll as scroll } from "react-scroll";
import bottle from "../../assets/Huge Prime.svg";
import explosion from "../../assets/White explo.svg";
import "./hero.css";
import scrollIcon from "../../assets/ScrollHint.svg"; //I don't know where the scroll icon is. Change it if you find it.

function Hero() {
  return (
    <div className="hero-section">
      <div id="heroDiv">
        <div className="hero-head">
          <p>
            Join the Prime Revolution: Sip on the Coolest Drink in South Africa!
          </p>
        </div>

        <div className="explosion">
          <img src={explosion} alt="Experience PRIME's exploding flavours" />
        </div>

        <div className="mover">
          <div className="text">
            <p className="P">P</p>
            <p className="R">R</p>
            <p className="I">I</p>
            <p className="M">M</p>
            <p className="E">E</p>
          </div>
        </div>

        <div style={{ zIndex: "1" }} className="bottle-container">
          <img src={bottle} alt="Introducing Prime" />
        </div>

        <div className="slide-button">
          <button onClick={() => scroll.scrollTo(window.innerHeight)}>
            <img src={scrollIcon} alt="Scroll Down" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;

