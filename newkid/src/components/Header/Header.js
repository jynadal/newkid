import React from 'react'
import { NavLink } from 'react-router-dom'

const logoKid = require('./img/logoKid.png')

const Header = ({ className }) => (
  <header className={className}>
    <div className="Header__logo">
      <img
        alt="logo"
        className="Header__logoImage"
        src={logoKid}
      />

    Memory Game
    </div>

    <NavLink to="/menu" className="backToMenuLink">
      Retour au menu principale
    </NavLink>
  </header>
)

export default Header
