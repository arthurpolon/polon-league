import type { AppProps } from 'next/app'
import Head from 'next/head'
import ThemeContextProvider from '~contexts/themeContext'
import GlobalStyle from '~styles/globalStyle'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Polon League</title>
      </Head>
      <ThemeContextProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeContextProvider>
    </>
  )
}

export default App
