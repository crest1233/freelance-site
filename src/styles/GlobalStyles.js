import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: #121212;
    color: white;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
