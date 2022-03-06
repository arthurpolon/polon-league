import NextImage, { ImageProps } from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  position: relative;

  display: grid;
  place-items: center;
`

export const ImageWrap = styled.div`
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: 100vh;
`

export const BackgroundImage = (props: ImageProps) => {
  return (
    <ImageWrap>
      <NextImage {...props} />
    </ImageWrap>
  )
}
