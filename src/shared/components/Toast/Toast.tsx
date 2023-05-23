import { useEffect } from 'react'
import tw from 'twin.macro'

import CloseIcon from '@/public/svg/icons/close.svg'
import DoubleCheckIcon from '@/public/svg/icons/double-check.svg'
import { Portal, usePortal } from '@/shared/components/Portal'

type ToastVariant = 'success' | 'error' | 'info'

interface ToastProps {
  isOpen: boolean
  closeToast: () => void
  autoHideDuration?: number
  message: string
  variant: ToastVariant
}

export const Toast = ({
  message,
  closeToast,
  isOpen,
  variant,
  autoHideDuration = 3000,
}: ToastProps) => {
  const { container } = usePortal({
    type: 'toast',
    isOpen,
    closePortal: closeToast,
    closable: false,
  })

  // Auto hide toast
  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isOpen) {
      timeout = setTimeout(() => {
        closeToast()
      }, autoHideDuration)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [closeToast, autoHideDuration, isOpen])

  return (
    <Portal container={container}>
      <div css={tw`fixed left-1/2 top-9 z-30 -translate-x-1/2 transform`}>
        <div
          id={`${variant}-toast`}
          css={[
            tw`min-w-[320px] max-w-xs rounded-lg border p-4`,
            tw`bg-white shadow-md md:max-w-md`,
            tw`flex items-center gap-x-6`,
          ]}
          role="alert"
        >
          <div css={tw`flex items-center gap-x-2`}>
            <span
              css={[
                tw`inline-flex items-center justify-center`,
                tw`h-8 w-8 rounded-lg bg-green-100`,
                {
                  success: tw`bg-green-100`,
                  error: tw`bg-red-100`,
                  info: tw`bg-blue-100`,
                }[variant],
              ]}
            >
              <DoubleCheckIcon
                width={20}
                height={20}
                css={[
                  {
                    success: tw`fill-green-400`,
                    error: tw`fill-red-400`,
                    info: tw`fill-blue-400`,
                  }[variant],
                ]}
              />
            </span>
            <span css={tw`text-gray-600`}>{message}</span>
          </div>
          <button
            type="button"
            onClick={closeToast}
            css={[
              tw`-mx-1.5 ml-auto h-8 w-8 rounded-lg p-1.5`,
              tw`inline-flex items-center justify-center`,
              tw`bg-white hover:bg-gray-100`,
            ]}
            aria-label="Close"
          >
            <CloseIcon width={16} height={16} css={tw`fill-gray-500`} />
          </button>
        </div>
      </div>
    </Portal>
  )
}
