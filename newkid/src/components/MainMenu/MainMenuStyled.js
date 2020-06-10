import styled from 'styled-components';

import { colors } from '../../styles/variables.js';
import MainMenu from './MainMenu.js';

const MainMenuStyled = styled(MainMenu)`
  width: 100%;
  text-align: center;
  line-height: 2;
  text-decoration: none;
  list-style-type: none;
  
  a {
    color: ${colors.white};
    font-size: 30px;
    text-decoration: underline;
    list-style-type: none;
    
    &:hover {
      color: ${colors.orange};
    }
  }
`;

export default MainMenuStyled;
