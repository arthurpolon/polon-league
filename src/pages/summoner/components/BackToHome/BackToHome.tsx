import Icons from '~components/Icons/Icons'
import { Container, Text } from './styled'

const BackToHome = () => {
  return (
    <Container type='button'>
      <Icons type='home' width={24} height={24} />
      <Text>Back to home </Text>
    </Container>
  )
}

export default BackToHome
