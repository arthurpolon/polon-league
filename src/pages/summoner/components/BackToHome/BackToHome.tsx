import Icons from '~components/Icons/Icons'
import * as S from './styled'

const BackToHome = () => {
  return (
    <S.Container type='button'>
      <Icons type='home' width={24} height={24} />
      <S.Text>Back to home </S.Text>
    </S.Container>
  )
}

export default BackToHome
