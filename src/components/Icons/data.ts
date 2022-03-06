import HomeSVG from './images/home.svg'
import MoonSVG from './images/moon.svg'
import LogoSVG from './images/logo.svg'
import SunSVG from './images/sun.svg'
import { IconType } from './types'

export const IconsObject: {
  [key in IconType]: React.FC<React.SVGProps<SVGSVGElement>>
} = {
  home: HomeSVG,
  moon: MoonSVG,
  logo: LogoSVG,
  sun: SunSVG,
}
