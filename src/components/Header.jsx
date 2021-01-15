import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = styled.header`
  height: 12vh;
  background-color: var(--primary-color);
  padding: 0 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleLink = styled(NavLink)`
  text-decoration: none;
  color: var(--link-color);
  transition: color 0.2s;

  &:hover {
    color: var(--link-color-hover);
  }
`;

const Header = () => (
  <Container>
    <h1>
      <TitleLink to='/home'>Home</TitleLink>
    </h1>
  </Container>
);

export default Header;
