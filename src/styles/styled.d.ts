import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: 'light' | 'dark'
    textColor: string
    background: string

    gradient: string
  }
}
