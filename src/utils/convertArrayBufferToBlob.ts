const convertArrayBufferToBlob = (
  buffer: ArrayBuffer | undefined,
): string | undefined => {
  if (!buffer) return undefined

  const blob = new Blob([buffer], {
    type: 'image/png',
  })

  const image = URL.createObjectURL(blob)

  return image
}

export default convertArrayBufferToBlob
