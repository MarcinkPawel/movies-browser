import { createGlobalStyle } from "styled-components";

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
        color: ${({ theme }) => theme.color.black};
        display: inherit;
        font-family: 'Inter', sans-serif;
        background: ${({ theme }) => theme.color.mercury};
        font-family: 'Poppins', sans-serif;
    }
`;