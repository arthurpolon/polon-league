import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { name } = req.query

  const response = await axios.get(
    `https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}`,
    {
      headers: {
        'X-Riot-Token': process.env.RIOT_DEVELOPMENT_KEY,
      },
    },
  )

  res.end(JSON.stringify(response.data))
}
