import { DefaultTheme } from 'styled-components'
import { TTheme } from './types'

export const light: DefaultTheme = {
  name: 'light',
  isDark: false,

  textColor: '#000',
  error: '#f00',

  background: '#fff',
  secondaryBackground: '#FFF9FE',

  border: 'none',
  boxShadow:
    'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',

  gradient: 'linear-gradient(#fd749b, #281ac8)',
  secondaryGradient: 'linear-gradient(#FC58B3, #FEAE68)',
}

export const dark: DefaultTheme = {
  name: 'dark',
  isDark: true,

  textColor: '#f0f0f0',
  error: '#FF7777',

  background: '#0a0113',
  secondaryBackground: '#0a0113',

  border: '2px solid #9e9e9e',
  boxShadow: 'none',

  gradient: 'linear-gradient(#fd749b, #281ac8)',
  secondaryGradient: 'linear-gradient(#FC58B3, #FEAE68)',
}

const Themes: { [key in TTheme]: DefaultTheme } = {
  light,
  dark,
}

export default Themes
