import HomeSVG from './images/home.svg'
import MoonSVG from './images/moon.svg'
import LogoSVG from './images/logo.svg'

import { IconType } from './types'

export const IconsObject: { [key in IconType]: string } = {
  home: HomeSVG,
  moon: MoonSVG,
  logo: LogoSVG,
}
