import React from 'react'

const LevelLink = ({ children, onClick, type }) => {
  const levelImage = require(`./images/level-${type}.svg`)

  return (
    <a onClick={onClick} className="NewGame__link">
      <img src={levelImage} alt="Level Easy" />

      {children}
    </a>
  )
}

const NewGame = ({
  className,
  onLevelSelect
}) => (
  <div className={className}>
    <h1 className="NewGame__title">
      Select level
    </h1>

    <ul>
      <li>
        <LevelLink
          type="easy"
          onClick={() => onLevelSelect('easy')}
        >
          Facile
        </LevelLink>
      </li>

      <li>
        <LevelLink
          type="medium"
          onClick={() => onLevelSelect('medium')}
        >
          Moyen
        </LevelLink>
      </li>

      <li>
        <LevelLink
          type="hard"
          onClick={() => onLevelSelect('hard')}
        >
          Dure
        </LevelLink>
      </li>

      <li>
        <LevelLink
          type="very-hard"
          onClick={() => onLevelSelect('very-hard')}
        >
          Expert
        </LevelLink>
      </li>
    </ul>
  </div>
)

export default NewGame
