import React from "react";
import  "./products.css";

import { Cards } from "../../containers";

import {
  Meta,
  KSI,
  Tropical,
  Rasberry,
  Pink,
  Ice,
  Lemon,
  Grape,
  Orange,
  Anti,
  Arrow,
  Coconut,
  Electro,
  Vitamin,
  Muscle,
} from "./imports";

function Products() {
  return (
    <div className="product-section">
      <div className="product-title">
        <h1 className="head">Products</h1>
      </div>

      <div className="nutrient-items">
        <buttons className="Anti"><img src={Anti} alt="Antioxidants" /></buttons>
        <buttons className="Coco"><img src={Coconut} alt="Coconut" /></buttons>
        <buttons className="Electro"><img src={Electro} alt="Electro" /></buttons>
        <buttons className="Vitamins"><img src={Vitamin} alt="Vitamins" /></buttons>
        <buttons className="Muscle"><img src={Muscle} alt="Strength" /></buttons>
      </div>
      
      <div className="arrow">
        <img src={Arrow} alt="Down Arrow" />
      </div>
<div className="productHolder">
      <Cards
        title={"Meta Moon"}
        description={
          <span>
            <span style={{ color: "#e3dada", fontFamily: "Monument Extended Black", fontWeight: "800" }}>Meta Moon</span> is packed with
            electrolytes and essential vitamins to keep you <span style={{fontFamily: "Monument Extended Regular", fontWeight: "400" }}>feeling your best</span>,
            and it tastes great too!
          </span>
        }
        imgUrl={Meta}
        price={"R300"}
      />
      <Cards
        title={
        <span>
        <span style={{color: "#EE9B1F",fontFamily: "Monument Extended Regular",fontWeight: "400",}}>Orange</span> <span style={{color: "#E6EA38",fontFamily: "Monument Extended Regular",    fontWeight: "400",   }}>Mango</span>
      </span>}
        description={
          <span>
            Introducing <span style={{  fontFamily: "Monument Extended Regular", fontWeight: "400" }}>KSI's Black Prime - a UK exclusive </span> <span style={{  color: "#EE9B1F",fontFamily: "Monument Extended Black", fontWeight: "800" }}>orange</span> and <span style={{  color: "#E6EA38",fontFamily: "Monument Extended Black", fontWeight: "800" }}>mango</span> flavored drink featuring the YouTuber's iconic bandana print on the bottle.
          </span>
        }
        imgUrl={KSI}
        price={"R600"}
      />
      <Cards
        title={ <span>
          <span style={{color: "#F00606",fontFamily: "Monument Extended Regular",fontWeight: "400",}}>Tropical Punch</span> 
          </span>
          }
        description={
          <span style={{marginTop: "-17px"}}>
            Unleash a wave of  <span style={{ color: "#F00606", fontFamily: "Monument Extended Black", fontWeight: "800" }}>Tropical Paradise</span> with Prime's refreshing blend of <span style={{fontFamily: "Monument Extended Regular", fontWeight: "400" }}>tantalizing ingredients and juicy flavors</span>, guaranteed to quench your thirst with every sip.
          </span>
          
        }
        imgUrl={Tropical}
        price={"R250"}
      />
      <Cards
        title={<span>
               <span style={{color: "#62C0EF",fontFamily: "Monument Extended Regular",fontWeight: "400",}}>Blue Raspberry</span>
          </span>
        }
        description={
          <span style={{marginTop: "-25px"}}>
            Prime Hydration Drink Sports Beverage <span style={{color: "#62C0EF",fontFamily: "Monument Extended Black",fontWeight: "800",}}>“BLUE RASPBERRY"</span>, Naturally Flavored, 10% Coconut Water, 250mg BCAAs, B Vitamins, Antioxidants, 835mg Electrolytes, 25 Calories per 16.9 Fl Oz Bottle
          </span>
        }
        imgUrl={Rasberry}
        price={"R250"}
      />
      <Cards
        title={<span>
          <span style={{color: "#ED78AA",fontFamily: "Monument Extended Regular",fontWeight: "400",}}>Strawberry Watermelon</span>
             </span>}
        description={
          <span style={{marginTop: "-25px"}}>
         Deliciously sweet and hydrating drink infused with <span style={{color: "#ED78AA",fontFamily: "Monument Extended Black",fontWeight: "800",}}>Ripe Strawberries</span>and fresh watermelon taste for a year-round<span style={{fontFamily: "Monument Extended Regular",fontWeight: "400",}}> Summertime feel.</span>
        </span>
          }
        imgUrl={Pink}
        price={"R300"}
      />
      <Cards
        title={<span>
          <span style={{color: "#E22A2E",fontFamily: "Monument Extended Regular",fontWeight: "400",}}>Ice</span> <span style={{color: "#3CC2F7",fontFamily: "Monument Extended Regular",    fontWeight: "400",   }}>Pop</span>
        </span>}
        description={
          <span style={{marginTop: "-25px"}}>
          A <span style={{fontFamily: "Monument Extended Regular",fontWeight: "400",}}>better-for-you</span> hydration option where <span style={{color: "#DB1C22",fontFamily: "Monument Extended Black",fontWeight: "800",}}>function</span> and <span style={{color: "#2DBDF4",fontFamily: "Monument Extended Black",fontWeight: "800",}}>Taste</span>  come first. Each bottle contains 10% coconut water, zero sugar, BCAAs, antioxidants, electrolytes, and zinc for immunity
         </span>
        }
        imgUrl={Ice}
        price={"R300"}
      />
      <Cards
        title={<span>
          <span style={{color: "#8BC92A",fontFamily: "Monument Extended Regular",fontWeight: "400",}}>Lemon Lime</span>
             </span>}
        description={
          <span style={{marginTop: "-23px"}}>
            <span style={{fontFamily: "Monument Extended Regular",fontWeight: "400",}}>Refresh and Recharge</span> with KSI x Logan Paul's DrinkPrime! Bursting with <span style={{color: "#93CE50",fontFamily: "Monument Extended Black",fontWeight: "800",}}>Real Lemon</span> and lime juice, this zesty drink is the perfect way to stay hydrated and energized all day long.
          </span>
        }
        imgUrl={Lemon}
        price={"R250"}
      />
      <Cards
        title={<span>
          <span style={{color: "#8E57CF",fontFamily: "Monument Extended Regular",fontWeight: "400",}}>Grape</span>
             </span>}
        description={
          <span style={{marginTop: "-25px"}}>
             Savor the <span style={{fontFamily: "Monument Extended Regular",fontWeight: "400",}}>irresistible taste</span> of KSI x Logan Paul's <span style={{color: "#8E57CF",fontFamily: "Monument Extended Black",fontWeight: "800",}}>Grape Prime!</span> Combining succulent grapes with premium ingredients, this drink delivers a delightful symphony of flavors that will elevate your taste buds to new heights.
          </span>
          }
        imgUrl={Grape}
        price={"R250"}
      />
      <Cards
        title={<span>
          <span style={{color: "#F66442",fontFamily: "Monument Extended Regular",fontWeight: "400",}}>Orange</span>
             </span>}
        description={
          <span style={{marginTop: "-25px"}}>
            <span style={{fontFamily: "Monument Extended Regular",fontWeight: "400",}}>DrinkPrimeSA's</span> <span style={{color: "#F66442",fontFamily: "Monument Extended Black",fontWeight: "800",}}>Orange</span> flavor drink is a <span style={{fontFamily: "Monument Extended Regular",fontWeight: "400",}}>tantalizingly tangy and refreshing</span> beverage. Bursting with juicy citrus notes, this invigorating elixir will quench your thirst and leave you feeling revitalized.
          </span>
        }
        imgUrl={Orange}
        price={"R250"}
      />
    </div>
    </div>
    
  );
}

export default Products;
