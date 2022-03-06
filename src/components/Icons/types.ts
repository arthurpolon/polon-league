export type IconType = 'home' | 'moon' | 'logo' | 'sun'

export interface IIconsProps {
  type: IconType

  width?: number
  height?: number

  color?: string
}
