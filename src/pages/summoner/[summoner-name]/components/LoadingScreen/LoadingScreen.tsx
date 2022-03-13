import Loader from '~pages/components/Loader/Loader'
import { Container, Text } from './styled'

const LoadingScreen = () => {
  return (
    <Container>
      <Text>Getting your game infos... </Text>
      <Loader />
    </Container>
  )
}

export default LoadingScreen
