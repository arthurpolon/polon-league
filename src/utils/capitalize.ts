const capitalize = (text: string) => {
  return text
    .trim()
    .toLowerCase()
    .replace(/\w\S*/g, w => w.replace(/^\w/, c => c.toUpperCase()))
}

export default capitalize
