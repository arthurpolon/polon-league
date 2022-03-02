import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { light, dark } from '~styles/theme'
import { wrapper } from '~store/index'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={light}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default wrapper.withRedux(App)
