import useSWR from 'swr'
import ddragonApi from '~services/api'
import convertArrayBufferToBlob from '~utils/convertArrayBufferToBlob'
import useGetGameVersions from './useGetGameVersions'

const arrayBufferFetcher = (url: string) =>
  ddragonApi.get(url, { responseType: 'arraybuffer' }).then(res => res.data)

const useGetProfileIcon = (iconId: number): string | undefined => {
  const { currentGameVersion } = useGetGameVersions()

  const { data: iconArrayBuffer } = useSWR(
    currentGameVersion
      ? `/cdn/${currentGameVersion}/img/profileicon/${iconId}.png`
      : null,
    arrayBufferFetcher,
  )

  const iconBlob = convertArrayBufferToBlob(iconArrayBuffer)

  return iconBlob
}

export default useGetProfileIcon
