import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: var(--color-background);
    font-family: apparat-light, sans-serif;
    color: var(--color-black);
    font-size: 18px;
  }

    h1, h2, h3, h4, h5, h6 {
        font-family: futura-pt-condensed, sans-serif;
        text-transform: uppercase;
    }
`;

export default GlobalStyle;
