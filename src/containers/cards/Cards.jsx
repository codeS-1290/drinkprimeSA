import React from "react";
import "./cards.css";


const Cards = ({imgUrl, title, description}) => {

  return (
    <div className="card">
      <h1>{title}</h1>
      <div style={{ display: "flex", alignItems: "center" }}></div>
      <img src={imgUrl} alt='Prime Drink'></img>
      <p>{description}</p>
    </div>
  );
}

export default Cards;
