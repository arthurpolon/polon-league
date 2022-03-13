import { DefaultTheme } from 'styled-components'
import { TTheme } from './types'

export const light: DefaultTheme = {
  name: 'light',
  isDark: false,

  textColor: '#000',

  background: '#fff',
  secondaryBackground: '#FFF9FE',

  border: 'none',
  boxShadow:
    'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',

  gradient: 'linear-gradient(#fd749b, #281ac8)',
}

export const dark: DefaultTheme = {
  name: 'dark',
  isDark: true,

  textColor: '#fff',

  background: '#1E0338',
  secondaryBackground: '#1E0338',

  border: '2px solid #f0f0f0',
  boxShadow: 'none',

  gradient: 'linear-gradient(#fd749b, #281ac8)',
}

const Themes: { [key in TTheme]: DefaultTheme } = {
  light,
  dark,
}

export default Themes
