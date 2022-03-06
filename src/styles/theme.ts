import { DefaultTheme } from 'styled-components'
import { TTheme } from './types'

export const light: DefaultTheme = {
  name: 'light',
  textColor: '#000',
  background: '#ffffff',
}

export const dark: DefaultTheme = {
  name: 'dark',
  textColor: '#fff',
  background: '#1E0338',
}

const Themes: { [key in TTheme]: DefaultTheme } = {
  light,
  dark,
}

export default Themes
