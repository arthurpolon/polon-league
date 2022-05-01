import BlocksLoader from '~pages/components/BlocksLoader/BlocksLoader'
import { Container, Text } from './styled'

const LoadingScreen = () => {
  return (
    <Container>
      <Text>Getting your game infos... </Text>
      <BlocksLoader />
    </Container>
  )
}

export default LoadingScreen
