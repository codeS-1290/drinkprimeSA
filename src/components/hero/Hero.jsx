import React, { useRef, useEffect } from "react";
import bottle from "../../assets/Huge Prime.svg";
import explosion from "../../assets/White explo.svg";
import "./hero.css";
import scrollIcon from "../../assets/ScrollHint.svg";

function Hero() {
  const productsRef = useRef(null);

  const handleClick = () => {
    if (productsRef.current) {
      window.scrollTo({
        top: productsRef.current.offsetTop,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const button = document.querySelector(".slide-button button");
    button.addEventListener("click", handleClick);
    return () => button.removeEventListener("click", handleClick);
  }, []);

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
          <button>
            <img src={scrollIcon} alt="Scroll Down" />
          </button>
        </div>
      </div>
      <div ref={productsRef}></div>
    </div>
  );
}

export default Hero;

