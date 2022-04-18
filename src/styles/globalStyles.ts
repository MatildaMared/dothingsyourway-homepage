import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
    scroll-behavior: smooth;
    }

    * {
        -webkit-font-smoothing: antialiased;
    }

  body {
    background: var(--color-white);
    font-family: var(--font-primary);
    color: var(--color-black);
    font-size: var(--font-base);
    line-height: 1.6;
    font-weight: 200;
  }

  p {
      font-family: var(--font-primary-thin);
      font-weight: 200;
      margin-block-end: 1.5rem;
  }

  strong {
        font-family: var(--font-primary);
        font-weight: 600;
  }

    h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-secondary);
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 400;
    }

    h2 {
        font-size: var(--font-lg);
    }

    h3 {
        font-size: var(--font-md);
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
