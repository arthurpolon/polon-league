import type { AppProps } from 'next/app'
import Head from 'next/head'
import { SkeletonTheme } from 'react-loading-skeleton'
import ThemeContextProvider from '~contexts/themeContext'
import GlobalStyle from '~styles/globalStyle'

import 'react-loading-skeleton/dist/skeleton.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Polon League</title>
      </Head>
      <ThemeContextProvider>
        <SkeletonTheme baseColor='#d4b4e0' highlightColor='#dec6e8'>
          <GlobalStyle />
          <Component {...pageProps} />
        </SkeletonTheme>
      </ThemeContextProvider>
    </>
  )
}

export default App
