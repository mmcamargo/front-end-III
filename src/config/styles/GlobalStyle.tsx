import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
        padding: 0;
    }

    body, #root {
        max-width: 100vw;
        min-height: 100vh;
    }
`
export default GlobalStyle
