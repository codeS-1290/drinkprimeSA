import React from 'react'
import bottle from '../../assets/Huge Prime.svg'
import explosion from '../../assets/White explo.svg'
import styles from '../hero/hero.css'
import scroll from '../../assets/Arrow 1.svg' //I don't know where the scroll icon is. Change it if you find it.

function Hero() {
  return (
    
    <div id="heroDiv">
      <br />
      <br />
      <p className='heroText'>Join the Prime Revolution: Sip on the Hottest Drink in South Africa!</p>
      <div id="HeroMainContainer">
        <p className='heroMainText'>PRIME</p>
      <img src={bottle} id='bottleImage'/>
      <img src={explosion} id='explosionImage' />
      <img src={scroll} id='scrollImage' />
      </div>
      
    </div>
  )
}

export default Hero
