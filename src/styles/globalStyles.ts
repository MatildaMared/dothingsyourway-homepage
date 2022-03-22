import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: var(--color-white);
    font-family: var(--font-primary);
    color: var(--color-black);
    font-size: 18px;
  }

    h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-secondary);
        text-transform: uppercase;
    }
`;

export default GlobalStyle;
