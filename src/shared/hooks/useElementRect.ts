import { useLayoutEffect, useState } from 'react'

/**
 * @description
 * targetElement의 크기와 위치를 반환합니다.
 */
export const useElementRect = <TargetElement extends HTMLElement>(
  targetElement: TargetElement | null
) => {
  const [elementRect, setElementRect] = useState<DOMRect | null>(null)

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!targetElement) return
      const rect = targetElement.getBoundingClientRect()
      setElementRect(rect)
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [targetElement])

  return { elementRect }
}
