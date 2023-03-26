import React from 'react'
import  './cards.css';

function Cards(props) {
  return (<div className='card'>
    <h1>{props.title}</h1>
    <div style={{display: 'flex', alignItems: 'center'} }></div>
    <img src={props.imgName}></img>
    <p>{props.description}</p>
    
  </div>);
}

export default Cards
