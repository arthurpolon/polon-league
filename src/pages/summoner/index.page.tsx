import SummonerForm from '~pages/components/SummonerForm/SummonerForm'
import { LightBackgroundImage, Container, DarkBackgroundImage } from './styled'
import BackToHome from './components/BackToHome/BackToHome'
import ThemeButton from '~pages/components/ThemeButton/ThemeButton'
import { useTheme } from '~contexts/themeContext'

const Summoner = () => {
  const { isDark } = useTheme()

  return (
    <>
      <Container>
        <SummonerForm />
        <BackToHome />
        <ThemeButton />
        {isDark ? <DarkBackgroundImage /> : <LightBackgroundImage />}
      </Container>
    </>
  )
}

export default Summoner
