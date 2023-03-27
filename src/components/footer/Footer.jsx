import React from 'react'
import './footer.css'
import LogoWhite from '../../assets/Logo - White.png'
import Instagram from '../../assets/instagram 1.svg'
import Facebook from '../../assets/facebook 1.svg'
import Heart from '../../assets/heart.svg'

function Footer() {
  return (
    <div>
      <div className="footer-section">
       <div className="footer-links">
         <div className="footer-logo">
          <img src={LogoWhite} alt="DrinkPrimeSA" />
        </div>

        <div className="footer-about">
          <h1>About DrinkprimeSA</h1>
          <p>At DrinkPrimeSA, we believe that great taste and functionality should never be compromised. That's why we've brought together a team of exceptional individuals who shared the vision of delivering a drink that was not previously available in South Africa. Our bold and thirst-quenching flavors will refresh, replenish, and refuel you, giving you the perfect boost for any activity.</p>
        </div>

        <div className="footer-socials">
          <h1>Media</h1>
          <div className="button-container">
          <button style={{marginRight: "15px"}}><a href="https://www.instagram.com/prime_south/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="Instagram" /></a></button>
          <button><a href="https://www.facebook.com/profile.php?id=100085976126418&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="Facebook" /></a></button>
          </div>
        </div>
       </div>
       <div className="footer-closing">
       <p>© 2023, DrinkPrimeSA | Made with <img className='Heart' src={Heart} alt="Love" /> By &nbsp; <span>codeS</span></p>
       </div>
       
      </div>
    </div>
  )
}

export default Footer
