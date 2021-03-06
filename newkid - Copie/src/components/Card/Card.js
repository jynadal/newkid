import React from 'react'

const Card = ({ className, id, name, onClick }) => {
  const image = require(`./images/${name}.png`)
  const backImage = require(`./images/carte.png`)

  return image ? (
    <li className={className}>
      <a className="Card__element" onClick={() => onClick(id, name)}>
        <div className="Card__contents Card__contents--back">
        <img src={backImage} alt='back-card' />
        </div>
        <div className="Card__contents Card__contents--front">
          <img src={image} alt={name} />
        </div>
      </a>
    </li>
  ) : null
}

export default Card
