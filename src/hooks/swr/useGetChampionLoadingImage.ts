import useSWR from 'swr'
import ddragonApi from '~services/api'
import convertArrayBufferToBlob from '~utils/convertArrayBufferToBlob'
import useGetGameVersions from './useGetGameVersions'

const arrayBufferFetcher = (url: string) =>
  ddragonApi.get(url, { responseType: 'arraybuffer' }).then(res => res.data)

const useGetChampionLoadingImage = (
  championName: string | undefined,
): string | undefined => {
  const { currentGameVersion } = useGetGameVersions()

  const shouldFetch = !!currentGameVersion && !!championName

  const { data: championLoadingImageBuffer } = useSWR(
    shouldFetch ? `/cdn/img/champion/loading/${championName}_0.jpg` : null,
    arrayBufferFetcher,
  )

  const championLoadingImage = convertArrayBufferToBlob(
    championLoadingImageBuffer,
  )

  return championLoadingImage
}

export default useGetChampionLoadingImage
