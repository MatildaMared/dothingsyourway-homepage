import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: var(--color-white);
    font-family: var(--font-primary);
    color: var(--color-black);
    font-size: 18px;
    line-height: 1.6;
  }

    h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-secondary);
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 400;
    }

    a {
        color: var(--color-primary-dark);
        text-decoration: none;
        transition: all 0.2s;

        &:hover {
            color: var(--color-primary);
        }
    }
`;

export default GlobalStyle;
