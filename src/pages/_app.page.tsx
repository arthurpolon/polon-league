import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { light, dark } from '~styles/theme'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: yellow;
  }
`

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={light}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
