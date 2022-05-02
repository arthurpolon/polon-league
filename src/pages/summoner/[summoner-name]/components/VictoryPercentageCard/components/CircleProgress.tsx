import { useEffect, useState } from 'react'
import * as S from './styled'
import { ICircleProgressProps } from './types'

const ANIMATION_TIME_IN_SECONDS = 1

const CircleProgress = ({
  percentage,
  width,
  height,
}: ICircleProgressProps) => {
  const [pathClass, setPathClass] = useState('circle animate')

  useEffect(() => {
    setPathClass('circle animate')

    setTimeout(() => {
      setPathClass('circle')
    }, ANIMATION_TIME_IN_SECONDS * 1000 /* TRANSFORM TO MILLISECONDS */)
  }, [percentage])

  return (
    <S.CircleSVG
      width={width || 150}
      height={height || 150}
      viewBox='0 0 36 36'
    >
      <defs>
        <linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
          <stop offset='0%' stopColor='#fd749b' />
          <stop offset='100%' stopColor='#281ac8' />
        </linearGradient>
      </defs>
      <S.Progress
        stroke='url(#gradient)'
        className={pathClass}
        animationTime={ANIMATION_TIME_IN_SECONDS}
        strokeDasharray={`${percentage}, 100`}
      />
    </S.CircleSVG>
  )
}

export default CircleProgress
