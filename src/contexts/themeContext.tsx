import { createContext, useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Themes from '~styles/theme'
import { TTheme } from '~styles/types'
import { IThemeContext } from './types'

const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

const ThemeContextProvider: React.FC = props => {
  const [theme, setTheme] = useState<TTheme>('light')

  const toggleTheme = () => {
    setTheme(state => (state === 'light' ? 'dark' : 'light'))
  }

  return (
    <>
      <ThemeProvider theme={Themes[theme]}>
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
          {props.children}
        </ThemeContext.Provider>
      </ThemeProvider>
    </>
  )
}

export const useTheme = () => {
  return useContext(ThemeContext)
}

export default ThemeContextProvider
