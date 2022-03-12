import axios from 'axios'
import { useEffect, useState } from 'react'
import convertArrayBufferToBlob from '~utils/convertArrayBufferToBlob'

const Image = () => {
  const [img, setImg] = useState('')
  const fetch = async () => {
    const { data } = await axios.get(
      'http://ddragon.leagueoflegends.com/cdn/12.4.1/img/profileicon/5021.png',
      { responseType: 'arraybuffer' },
    )

    const image = convertArrayBufferToBlob(data)

    setImg(image)
  }
  useEffect(() => {
    fetch()
  }, [])

  return (
    <div>
      <h1>Image</h1>
      <img src={img} alt='teste' />
    </div>
  )
}

export default Image
