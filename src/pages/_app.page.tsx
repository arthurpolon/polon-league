import type { AppProps } from 'next/app'
import ThemeContextProvider from '~contexts/themeContext'
import GlobalStyle from '~styles/globalStyle'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeContextProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeContextProvider>
    </>
  )
}

export default App
