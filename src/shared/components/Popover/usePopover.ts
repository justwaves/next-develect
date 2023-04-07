import { MouseEvent, useCallback, useState } from 'react'

export const usePopover = <TriggerElement extends HTMLElement>() => {
  const [triggerElement, setTriggerElement] = useState<TriggerElement | null>(
    null
  )

  const isOpen = Boolean(triggerElement)

  const togglePopover = useCallback(
    (event: MouseEvent<TriggerElement>) => {
      if (isOpen) {
        setTriggerElement(null)
      } else {
        setTriggerElement(event.currentTarget)
      }
    },
    [isOpen]
  )

  const openPopover = useCallback((event: MouseEvent<TriggerElement>) => {
    setTriggerElement(event.currentTarget)
  }, [])

  const closePopover = useCallback(() => {
    setTriggerElement(null)
  }, [])

  return {
    togglePopover,
    openPopover,
    closePopover,
    isOpen,
    triggerElement,
  }
}
