import React from 'react'
import { Link } from 'react-router-dom'

const MainMenu = ({ className }) => (
  <div className={className}>
    <ul>
      <li>
        <Link to="/new-game">Nouveau jeu</Link>
      </li>
      <li>
        <Link to="/game">Reprendre le jeu</Link>
      </li>
    </ul>
  </div>
)

export default MainMenu
