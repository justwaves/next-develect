import { useLayoutEffect, useState } from 'react'

export interface WindowSize {
  windowWidth: number
  windowHeight: number
}

/**
 * @description
 * window의 innerWidth, innerHeight 값을 반환합니다.
 */
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    windowWidth: 0,
    windowHeight: 0,
  })

  useLayoutEffect(() => {
    function handleResize() {
      setWindowSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      })
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}
