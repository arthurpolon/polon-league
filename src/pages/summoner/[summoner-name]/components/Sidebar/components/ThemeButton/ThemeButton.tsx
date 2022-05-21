import Icons from '~components/Icons/Icons'
import { useTheme } from '~contexts/themeContext'
import * as S from './styled'

const ThemeButton = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <S.Container onClick={toggleTheme}>
      <Icons
        type={isDark ? 'sun' : 'moon'}
        width={18}
        height={18}
        color={isDark ? '#fff' : '#000'}
      />
    </S.Container>
  )
}

export default ThemeButton
