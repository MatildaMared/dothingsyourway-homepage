import { createGlobalStyle } from "styled-components";

const Variables = createGlobalStyle`
    :root {
        // Colors
        --color-primary-dark: hsla(189, 18%, 31%, 1.0);
        --color-primary: hsla(164, 12%, 54%, 1.0);
        --color-secondary-dark: hsla(15, 60%, 50%, 1.0);
        --color-secondary: hsla(18, 85%, 60%, 1.0);

        --color-white: #EEE;
        --color-black: hsla(189, 10%, 15%, 1.0);

        // Sizes
        --max-width: 1200px;
        --max-width: 1400px;

        // Fonts
        --font-primary: apparat-light, sans-serif;
        --font-secondary: futura-pt-condensed, sans-serif;
    }
`;

export default Variables;
