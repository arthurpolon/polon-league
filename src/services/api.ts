import axios from 'axios'

const ddragonApi = axios.create({
  baseURL: 'https://ddragon.leagueoflegends.com',
})

export default ddragonApi
