import NextImage from 'next/image'
import { IIconsProps } from '~components/Icons/types'
import { IconsObject } from './data'

const Icons = (props: IIconsProps) => {
  const IconToDisplay = IconsObject[props.iconType]

  return (
    <div>
      <NextImage
        src={IconToDisplay}
        layout='fixed'
        width={props.width}
        height={props.height}
      />
    </div>
  )
}

export default Icons
