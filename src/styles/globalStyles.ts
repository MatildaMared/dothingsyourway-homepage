import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: var(--color-background);
    font-family: apparat-light, sans-serif;
    color: var(--color-black);
  }

    h2, h3, h4, h5, h6 {
        font-family: apparat, sans-serif;
    }
`;

export default GlobalStyle;
