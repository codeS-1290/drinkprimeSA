import React from 'react'
import styles from './products.css'; 
 
import Cards from '../../containers/cards/Cards';

function Products() {
  

  const cards = [{title: "Meta Moon", description: "Meta Moon is packed with electrolytes and essential vitamins to keep you feeling your best, and it tastes great too!", imgName: "img" }, {title: "Orange  Mango", description: "Introducing KSI's Black Prime - a UK exclusive orange and mango flavored drink featuring the YouTuber's iconic bandana print on the bottle.", imgName: "img" }, {title: "Tropical Punch", description: "Unleash a wave of tropical paradise with Prime's refreshing blend of tantalizing ingredients and juicy flavors, guaranteed to quench your thirst with every sip.", imgName: "img" }];

  return (
    <div className='productHolder'>
      {cards.map((card) => <Cards title={card.title} description={card.description} img={card.image} />)}
    </div>
  )
}

export default Products