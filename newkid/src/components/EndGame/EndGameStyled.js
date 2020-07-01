import styled from 'styled-components'

import EndGame from './EndGame.js'
import { colors } from '../../styles/variables.js';
const EndGameStyled = styled(EndGame)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.orange};
  font-weight: bold;
  font-size: 50px;
  line-height: 1.5;
  
  .youWonImage {
    width: 100px;
  }
  
  .youWonText {
    display: block;
    text-align: center;
  }
  
  .newGameLink {
    color: ${colors.orange};
    text-decoration: none;
    font-weight: bold;
    
    &:hover {
      opacity: .7
    }
  }
`

export default EndGameStyled
