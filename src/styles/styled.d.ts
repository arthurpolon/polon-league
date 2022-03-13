import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: 'light' | 'dark'
    isDark: boolean

    textColor: string

    background: string
    secondaryBackground: string

    border: string
    boxShadow: string

    gradient: string
  }
}
