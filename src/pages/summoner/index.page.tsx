import SummonerForm from '~pages/components/SummonerForm/SummonerForm'
import * as S from './styled'
import BackToHome from './components/BackToHome/BackToHome'
import ThemeButton from '~pages/components/ThemeButton/ThemeButton'
import { useTheme } from '~contexts/themeContext'

const Summoner = () => {
  const { isDark } = useTheme()

  return (
    <>
      <S.Container>
        <SummonerForm />
        <BackToHome />
        <ThemeButton />
        {isDark ? <S.DarkBackgroundImage /> : <S.LightBackgroundImage />}
      </S.Container>
    </>
  )
}

export default Summoner
