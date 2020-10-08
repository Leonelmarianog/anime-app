import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = styled.header`
  background: #303030;
  width: 100%;
  padding: 1em;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
`;

const BaseLayout = ({ children }) => (
  <React.Fragment>
    <Header>
      <h1>
        <StyledNavLink to="/home">Home</StyledNavLink>
      </h1>
    </Header>
    <Container>{children}</Container>
  </React.Fragment>
);

export default BaseLayout;
