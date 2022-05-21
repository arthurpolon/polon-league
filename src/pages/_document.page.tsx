import Document, { DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
        head: [
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='favicon/apple-touch-icon.png'
          />,
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='favicon/favicon-32x32.png'
          />,
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='favicon/favicon-16x16.png'
          />,
          <link rel='manifest' href='favicon/site.webmanifest' />,
          <link
            rel='mask-icon'
            href='favicon/safari-pinned-tab.svg'
            color='#5bbad5'
          />,
          <meta name='msapplication-TileColor' content='#da532c' />,
          <meta name='theme-color' content='#ffffff' />,
          <link
            href='faviconhttps://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap'
            rel='stylesheet'
          />,
          <link
            href='https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap'
            rel='stylesheet'
          />,
        ],
      }
    } finally {
      sheet.seal()
    }
  }
}
