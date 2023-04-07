import { useCallback, useState } from 'react'

export const useToast = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openToast = useCallback(() => {
    setIsOpen(true)
  }, [])

  const closeToast = useCallback(() => {
    setIsOpen(false)
  }, [])

  return [isOpen, openToast, closeToast] as const
}
