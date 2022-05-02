import BlocksLoader from '~pages/components/BlocksLoader/BlocksLoader'
import * as S from './styled'

const LoadingScreen = () => {
  return (
    <S.Container>
      <S.Text>Getting your game infos... </S.Text>
      <BlocksLoader />
    </S.Container>
  )
}

export default LoadingScreen
