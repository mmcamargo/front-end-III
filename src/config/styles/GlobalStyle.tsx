import { createGlobalStyle } from 'styled-components'
import theme from '../theme/theme'

const GlobalStyle = createGlobalStyle`
    :root {
        --primary: ${theme.palette.primary.main};

        --small-spacing: 16px;
        --medium-spacing: 32px;
    }

    * {
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
        padding: 0;
    }

    body, #root {
        background-color: #222;
        max-width: 100vw;
        min-height: 100vh;
    }

    ::-webkit-scrollbar {
        background-color: #252525;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--primary);
        border-radius: 4px;
    }
`
export default GlobalStyle
