import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #303030;
    --secondary-color: #202020;
    
    --font-size: 1rem;
    --text-color: #ffffff;

    --link-color: #ffffff;
    --link-color-hover: #ffd001;

    --searchtab-bg-color: #303030;
    --searchtab-bg-color-focus: #505050;
  }


  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    background-color: var(--secondary-color);
    color: var(--text-color);
    font-size: var(--font-size);
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyles;
