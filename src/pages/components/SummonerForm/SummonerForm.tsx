import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import Icons from '~components/Icons/Icons'

import {
  Container,
  IconDescription,
  Title,
  SubTitle,
  Form,
  Input,
  Button,
} from './styled'

const SummonerForm = () => {
  const router = useRouter()
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: { summonerName: string }) => {
    router.push(`/summoner/${data.summonerName}`)
  }

  return (
    <Container>
      <Icons type='logo' width={65} height={65} />
      <IconDescription>Polon League</IconDescription>
      <Title>Welcome Summoner</Title>
      <SubTitle>Enter your summoner name to start</SubTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          required
          type='text'
          name='summoner-name'
          placeholder='Summoner name'
          {...register('summonerName')}
        />
        <Button type='submit'>Continue</Button>
      </Form>
    </Container>
  )
}

export default SummonerForm
