import styled from 'styled-components';

import { colors } from '../../styles/variables.js';
import MainLayout from './MainLayout.js';

const backGroundImage = require(`./fond.jpg`)
const MainLayoutStyled = styled(MainLayout)`
  // background-color: ${colors.void};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  background-image: url(${backGroundImage});
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default MainLayoutStyled;
