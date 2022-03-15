import { DependencyList, EffectCallback, useEffect, useRef } from 'react'

const useDidMountEffect = (
  callback: EffectCallback,
  dependencies: DependencyList | undefined,
) => {
  const didMount = useRef(false)

  useEffect(() => {
    if (didMount.current) callback()
    else didMount.current = true
  }, dependencies)
}

export default useDidMountEffect
