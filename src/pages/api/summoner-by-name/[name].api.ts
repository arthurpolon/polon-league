import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { name } = req.query
  const encodedName = encodeURIComponent(name as string)

  try {
    const response = await axios.get(
      `https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodedName}`,
      {
        headers: {
          'X-Riot-Token': process.env.RIOT_DEVELOPMENT_KEY || '',
        },
      },
    )

    res.status(response.status).json(response.data)
  } catch (error) {
    const errorObject = JSON.parse(JSON.stringify(error))
    const responseObject = {
      message: errorObject.message,
      name: errorObject.name,
      status: errorObject.status,
    }

    res.status(responseObject.status).json(responseObject)
  }
}
