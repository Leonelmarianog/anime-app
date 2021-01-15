import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BaseLayout = ({ children }) => (
  <React.Fragment>
    <Header />
    <main>
      <Container>{children}</Container>
    </main>
  </React.Fragment>
);

export default BaseLayout;
