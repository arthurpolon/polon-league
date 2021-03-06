import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Mulish', Verdana,'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  html {
    color: ${p => p.theme.textColor}
  }

  button {
    cursor: pointer;

    border: none;
    border-radius: 5px;
    padding: 8px 14px;
  }

  input {
    color: inherit;
  }
`

export default GlobalStyle
