import { createGlobalStyle } from "styled-components";

const Variables = createGlobalStyle`
    :root {
        // Colors
        --color-primary-dark: hsla(189, 18%, 31%, 1.0);
        --color-primary: hsla(164, 12%, 54%, 1.0);
        --color-secondary-dark: hsla(15, 60%, 50%, 1.0);
        --color-secondary: hsla(18, 85%, 60%, 1.0);

        --color-white: hsla(164, 12%, 90%, 1.0);
        --color-black: hsla(189, 10%, 15%, 1.0);

        // Sizes
        --max-width: 1200px;
        --max-width-extra: 1600px;

        --font-sm: clamp(0.7rem, 0.08vw + 0.68rem, 0.75rem);
        --font-base: clamp(0.88rem, 0.4vw + 0.78rem, 1.13rem);
        --font-md: clamp(1.09rem, 0.95vw + 0.86rem, 1.69rem);
        --font-lg: clamp(1.37rem, 1.86vw + 0.9rem, 2.53rem);
        --font-xl: clamp(1.71rem, 3.34vw + 0.87rem, 3.8rem);
        --font-xxl: clamp(2.14rem, 5.69vw + 0.71rem, 5.7rem);

        // Fonts
        --font-primary: apparat-light, sans-serif;
        --font-secondary: futura-pt-condensed, sans-serif;

        // Spacing
        --spacing-small: 1rem;
        --spacing-medium: 2rem;
        --spacing-large: 6rem;
        --spacing-xl: 12rem;
    }
`;

export default Variables;
