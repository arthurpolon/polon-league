import styled from 'styled-components'
import BackgroundLightSVG from './images/background-light.svg'
import BackgroundDarkSVG from './images/background-dark.svg'

export const Container = styled.div`
  height: 100vh;
  position: relative;

  display: grid;
  place-items: center;
`

export const LightBackgroundImage = styled(BackgroundLightSVG)`
  position: fixed;
  z-index: -1;

  inset: 0;
`

export const DarkBackgroundImage = styled(BackgroundDarkSVG)`
  position: fixed;
  z-index: -1;

  inset: 0;
`
