import styled from 'styled-components'
import { IIconsProps } from '~components/Icons/types'
import { IconsObject } from './data'

const Icons = (props: IIconsProps) => {
  const IconToDisplay = IconsObject[props.type]

  const Icon = styled(IconToDisplay)`
    width: ${props.width || '24'}px;
    height: ${props.height || '24'}px;

    color: ${props.color || 'currentColor'};
  `

  return <Icon />
}

export default Icons
