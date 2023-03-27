import React from "react";
import styles from "./products.css";

import {Cards} from "../../containers";

import { Meta, KSI, Tropical } from "./imports";

function Products() {

  return (
    <div className="productHolder">
      <Cards
        title={"Meta Moon"}
        description={
          "Meta Moon is packed with electrolytes and essential vitamins to keep you feeling your best, and it tastes great too!"
        }
        imgUrl={Meta}
      />
      <Cards
        title={"Orange  Mango"}
        description={
          "Introducing KSI's Black Prime - a UK exclusive orange and mango flavored drink featuring the YouTuber's iconic bandana print on the bottle."
        }
        imgUrl={KSI}
      />
      <Cards
        title={"Tropical Punch"}
        description={
          "Unleash a wave of tropical paradise with Prime's refreshing blend of tantalizing ingredients and juicy flavors, guaranteed to quench your thirst with every sip."
        }
        imgUrl={Tropical}
      />
    </div>
  );
}

export default Products;
