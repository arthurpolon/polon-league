import axios, { AxiosError } from 'axios'
import { useState } from 'react'
import styled from 'styled-components'
import RepositoryList from './components/RepositoryList'

const Title = styled.h1`
  color: purple;
  margin-top: 80px;
`

const Home = (props) => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  console.log(props)

  const onClick = async () => {
    try {
      const response = await axios.get(`/api/summoner-by-name/${input}`)

      setOutput(JSON.stringify(response))
    } catch (e) {
      if (e.isAxiosError) {
        const error: AxiosError = clone(e)

        switch (error.response.status) {
          case 404:
            setOutput('Summoner not found')
            break
          default:
            setOutput('An error ocurred')
        }
      }
    }
  }

  return (
    <div>
      <Title>Teste style</Title>
      <RepositoryList />
    </div>
  )
}

export default Home
