import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Icons from '~components/Icons/Icons'
import LeapLoader from '../LeapLoader/LeapLoader'

import * as S from './styled'
import { IFormData } from './types'

const SummonerForm = () => {
  const router = useRouter()
  const { register, handleSubmit } = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  let timeout: NodeJS.Timeout | undefined

  const displayErrorMessage = (message: string) => {
    setErrorMessage(message)

    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => setErrorMessage(''), 5000)
  }
  const onSubmit = async (data: IFormData) => {
    setIsLoading(true)

    const getSummonerResponse = await axios
      .get(`/api/summoner-by-name/${data.summonerName}`)
      .then(res => res)
      .catch(err => JSON.parse(JSON.stringify(err)))

    switch (getSummonerResponse.status) {
      case 404:
        displayErrorMessage('Summoner not found')
        setIsLoading(false)
        break
      case 200:
        router.push(`/summoner/${data.summonerName}`)
        break
      default:
        displayErrorMessage('An unexpected error occurred')
        setIsLoading(false)
    }
  }

  return (
    <S.Container>
      <Icons type='logo' width={65} height={65} />
      <S.IconDescription>Polon League</S.IconDescription>
      <S.Title>Welcome Summoner</S.Title>
      <S.SubTitle>Enter your summoner name to start</S.SubTitle>
      <S.Form
        onSubmit={handleSubmit(formData => {
          onSubmit(formData as IFormData)
        })}
      >
        <S.Input
          required
          type='text'
          error={!!errorMessage}
          placeholder='Summoner name'
          {...register('summonerName')}
        />
        {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
        <S.Button disabled={isLoading} type='submit'>
          {isLoading ? <LeapLoader /> : 'Continue'}
        </S.Button>
      </S.Form>
    </S.Container>
  )
}

export default SummonerForm
