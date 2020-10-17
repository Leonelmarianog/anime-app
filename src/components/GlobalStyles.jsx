import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    background: #212121;
    color: white;
  }

  #root {
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyles;
