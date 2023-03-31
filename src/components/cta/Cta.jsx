import React from "react";
import "./cta.css";
import instagram from "../../assets/instagram 1.svg";
import whatsapp from "../../assets/whatsapp.png";

import Blob from "../../assets/Blobs.svg";

function Cta() {
  return (
    <div className="Cta-section">
      <div className="blobs-container">
        <img src={Blob} alt="Blob Background" />
      </div>
      <div className="cta-card-holder">


      <div className="cta-card">
        
        <h1>Order our Prime Drinks Today!</h1>
        <p className="call">To order our prime drinks, simply give us a call or send us an email using the contact details below.</p>
        <div className="outerFlex">


        <div className="flex">
          <img src={whatsapp}></img>
          <p> Message 0722177128 on whatsapp</p>
        </div>
        <div className="flex">
          <img src={instagram}></img>
          <p> Dm @prime_south on Instagram </p>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Cta;
