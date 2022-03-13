import styled from 'styled-components'
import { useTheme } from '~contexts/themeContext'
import Loader from './components/Loader/Loader'

const Title = styled.h1`
  margin-top: 100px;
  color: ${p => p.theme.textColor};
`

const Home = () => {
  const { toggleTheme } = useTheme()

  return (
    <div>
      <Title>Teste style</Title>
      <button onClick={toggleTheme} type='button'>
        Toggle
      </button>
      <Loader />
    </div>
  )
}

export default Home
