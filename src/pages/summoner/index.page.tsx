import BackgroundSVG from './images/background.svg'
import SummonerForm from '~pages/components/SummonerForm'
import { BackgroundImage, Container } from './styled'

const Summoner = () => {
  return (
    <>
      <Container>
        <SummonerForm />
        <BackgroundImage src={BackgroundSVG} layout='fill' objectFit='cover' />
      </Container>
    </>
  )
}

export default Summoner
