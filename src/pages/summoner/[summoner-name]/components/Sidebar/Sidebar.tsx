import Icons from '~components/Icons/Icons'
import ThemeButton from './components/ThemeButton/ThemeButton'
import { SideBarElements } from './data'
import * as S from './styled'

const Sidebar = () => {
  const renderElements = SideBarElements.map((element, index) => (
    <S.Element key={element.label} isActive={index === 0}>
      <element.icon className='icon' />
      {element.label}
    </S.Element>
  ))

  return (
    <S.Container>
      <S.Header>
        <S.LogoWrapper>
          <Icons type='logo' width={48} height={48} />
          <S.SiteName>Polon League</S.SiteName>
        </S.LogoWrapper>
        <ThemeButton />
      </S.Header>
      <S.ElementsWrapper>{renderElements}</S.ElementsWrapper>
    </S.Container>
  )
}

export default Sidebar
