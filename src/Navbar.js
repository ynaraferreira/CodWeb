
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #4682B4;
  padding: 10px;
`;

const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2em;
  &:hover {
    text-decoration: underline;
  }
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavItem to="/">Início</NavItem>
      <NavItem to="/Tecnologias">Tecnologias</NavItem>
    </NavBarContainer>
  );
};

export default NavBar;
