import { TTheme } from '~styles/types'

export interface IThemeContext {
  theme: TTheme
  setTheme: React.Dispatch<React.SetStateAction<TTheme>>
  toggleTheme(): void
}
