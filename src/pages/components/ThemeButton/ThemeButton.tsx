import Icons from '~components/Icons/Icons'
import { useTheme } from '~contexts/themeContext'
import { Container } from './styled'

const ThemeButton = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <Container onClick={toggleTheme}>
      <Icons
        type={isDark ? 'sun' : 'moon'}
        width={24}
        height={24}
        color={isDark ? '#fff' : '#000'}
      />
    </Container>
  )
}

export default ThemeButton
