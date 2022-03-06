import { TTheme } from '~styles/types'

export interface IThemeContext {
  theme: TTheme
  isDark: boolean
  setTheme: React.Dispatch<React.SetStateAction<TTheme>>
  toggleTheme(): void
}
