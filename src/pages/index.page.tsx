import axios, { AxiosError } from 'axios'
import { useState } from 'react'
import clone from '~utils/clone'
import RepositoryList from './components/RepositoryList'

const Home = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

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
      <RepositoryList />
    </div>
  )
}

export default Home
