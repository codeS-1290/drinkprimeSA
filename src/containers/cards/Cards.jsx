import React from "react";
import "./cards.css";

const Cards = ({ imgUrl, title, description, price }) => {
  return (
    <div className="card">
      <div className="img-container">
        <img className="Bottle" src={imgUrl} alt="Prime Drink"></img>
      </div>
      <div className="text-container">
        <h1>{title}</h1>
        <div className="centralize">
          <p className="description">{description}</p>
        </div>

        <p className="price">{price}</p>
      </div>
    </div>
  );
};

export default Cards;
