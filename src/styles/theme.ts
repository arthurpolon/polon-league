import { DefaultTheme } from 'styled-components'
import { TTheme } from './types'

export const light: DefaultTheme = {
  theme: 'light',
  color: 'yellow',
}

export const dark: DefaultTheme = {
  theme: 'dark',
  color: 'gray',
}

const Themes: { [key in TTheme]: DefaultTheme } = {
  light,
  dark,
}

export default Themes
