import axios from 'axios'

const ddragonApi = axios.create({
  baseURL: 'http://ddragon.leagueoflegends.com',
})

export default ddragonApi
