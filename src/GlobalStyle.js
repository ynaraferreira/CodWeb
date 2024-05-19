import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Calibri;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f0f2f5;
    color: #333;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
