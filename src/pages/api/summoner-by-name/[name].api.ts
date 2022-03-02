import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import clone from '~utils/clone'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { name } = req.query

  try {
    const response = await axios.get(
      `https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}`,
      {
        headers: {
          'X-Riot-Token': process.env.RIOT_DEVELOPMENT_KEY,
        },
      },
    )

    res.status(response.status).json(response.data)
  } catch (e) {
    const error = clone(e)
    res.status(error.status).json(error)
  }
}
