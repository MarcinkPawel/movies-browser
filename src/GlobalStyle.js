import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
        margin: 0;
        padding: 0;

    }

    body {
        display: inherit;
        font-family: 'Inter', sans-serif;
        background: ${({ theme }) => theme.color.mercury};
;
    }
`;