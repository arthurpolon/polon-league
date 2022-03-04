const resToImage = (buffer: ArrayBuffer): string => {
  const blob = new Blob([buffer], {
    type: 'image/png',
  })

  const image = URL.createObjectURL(blob)

  return image
}

export default resToImage
