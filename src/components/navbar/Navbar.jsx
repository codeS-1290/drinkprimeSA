import React from 'react'
import './navbar.css'

import {Logo} from '../../assets/Logo Proper.png'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src={Logo} alt="DrinkPrimeSA" />
      </div>
      <div className="text-slider">
        
      </div>
    </div>
  )
}

export default Navbar
