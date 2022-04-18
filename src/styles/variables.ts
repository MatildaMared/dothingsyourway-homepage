import { createGlobalStyle } from "styled-components";

const Variables = createGlobalStyle`
    :root {
        // Colors
        --color-primary-dark: hsla(189, 18%, 31%, 1.0);
        --color-primary: hsla(164, 12%, 54%, 1.0);
        --color-primary-light: hsla(164, 12%, 54%, 0.3);
        --color-secondary-darkest: hsla(15, 30%, 20%, 1.0);
        --color-secondary-dark: hsla(15, 50%, 45%, 1.0);
        --color-secondary: hsla(18, 60%, 55%, 1.0);
        --color-secondary-light: hsla(18, 50%, 60%, .3);

        --color-white: hsla(164, 15%, 96%, 1.0);
        --color-white-secondary: hsla(18, 15%, 96%, 1.0);
        --color-black: hsla(189, 10%, 15%, 1.0);

        // Sizes
        --max-width: 1200px;
        --max-width-extra: 1600px;

        --font-sm: clamp(0.7rem, 0.21vw + 0.65rem, 0.83rem);
        --font-base: clamp(0.88rem, 0.6vw + 0.72rem, 1.25rem);
        --font-md: clamp(1.09rem, 1.25vw + 0.78rem, 1.88rem);
        --font-lg: clamp(1.37rem, 2.31vw + 0.79rem, 2.81rem);
        --font-xl: clamp(1.71rem, 4.02vw + 0.71rem, 4.22rem);
        --font-xxl: clamp(3.14rem, 6.71vw + 0.46rem, 5.5rem);

        // Fonts
        --font-primary: apparat, sans-serif;
        --font-primary-thin: "apparat-thin", sans-serif;
        --font-secondary: futura-pt-condensed, sans-serif;

        // Spacing
        --spacing-small: 2rem;
        --spacing-medium: 4rem;
        --spacing-large: 6rem;
        --spacing-xl: 12rem;

        // Shadow
        --shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.1);
        
        @media (max-width: 700px) {
            --spacing-small: 1rem;
            --spacing-medium: 2rem;
            --spacing-large: 3rem;
            --spacing-xl: 6rem;
        }
    }
`;

export default Variables;
