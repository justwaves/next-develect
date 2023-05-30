import { useRouter } from 'next/router'
import { useEffect, useId, useMemo, useRef, useState } from 'react'

type PortalType = 'modal' | 'popover' | 'toast'

interface UsePortalProps {
  type: PortalType
  isOpen: boolean
  closePortal?: () => void
  triggerElement?: HTMLElement | null
  closable?: boolean
}

export const usePortal = ({
  type,
  isOpen,
  closePortal,
  triggerElement,
  closable = true,
}: UsePortalProps) => {
  const router = useRouter()
  const [container, setContainer] = useState<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)

  const id = useId()
  const portalId = useMemo(() => `next-${type}__${id}`, [id, type])

  // isOpen 값에 따라 Portal Container 생성 & 제거
  useEffect(() => {
    if (isOpen) {
      const newContainer = document.createElement('div')
      newContainer.setAttribute('id', portalId)
      document.body.appendChild(newContainer)
      setContainer(newContainer)
    } else {
      setContainer(null)
    }
    return () => {
      const containerDOM = document.getElementById(portalId)
      containerDOM?.remove()
    }
  }, [isOpen, portalId])

  // contentRef, triggerElement에 포함되지 않은 영역을 클릭했을 때 closePortal
  useEffect(() => {
    if (!isOpen || !closable) return undefined

    const handlePageClick = ({ target }: MouseEvent) => {
      if (!(target instanceof Node)) return
      const isTriggerElement = triggerElement?.contains(target)
      const isContentRef = contentRef.current?.contains(target)

      if (!isTriggerElement && !isContentRef) {
        closePortal?.()
      }
    }

    window.addEventListener('click', handlePageClick, true)
    return () => {
      window.removeEventListener('click', handlePageClick, true)
    }
  }, [contentRef, isOpen, closePortal, closable, triggerElement])

  // Route 변경 시 closePortal
  useEffect(() => {
    if (!closePortal) return
    router.events.on('routeChangeStart', closePortal)
    return () => {
      router.events.off('routeChangeStart', closePortal)
    }
  }, [closePortal, router.events])

  return { container, contentRef }
}
