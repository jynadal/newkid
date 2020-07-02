import styled from 'styled-components'

import Header from './Header.js'

const HeaderStyled = styled(Header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 10px 40px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ff7f00;
  color: #0080ff;
  font-weight: bold;
  font-size: 25px;
  z-index: 10;
  //box-shadow: 0 0 5px #000;
  
  .Header__logo {
    display: flex;
    align-items: center;
  }
  
  .Header__logoImage {
    width: 200px;
    margin-right: 20px;
  }
  
  .backToMenuLink {
    color: #fff;
    text-decoration: none;
  }
`

export default HeaderStyled
