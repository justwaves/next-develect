import classNames from 'classnames'
import { memo } from 'react'
import tw from 'twin.macro'

import CloseIcon from '@/public/svg/icons/close.svg'
import { Portal, usePortal } from '@/shared/components/Portal'

interface ModalProps {
  isOpen: boolean
  closeModal: () => void
  children: React.ReactNode
  hasCloseButton?: boolean
}

export const Modal = ({
  isOpen,
  closeModal,
  children,
  hasCloseButton,
}: ModalProps) => {
  const { container, contentRef } = usePortal({
    type: 'modal',
    isOpen,
    closePortal: closeModal,
  })

  return (
    <Portal container={container}>
      <div css={modalBackgroundStyle}>
        <div ref={contentRef} css={modalContentStyle}>
          {hasCloseButton && <CloseButton onClick={closeModal} />}
          {children}
        </div>
      </div>
    </Portal>
  )
}

interface CloseModalProps {
  onClick: () => void
}

const CloseButton = memo(({ onClick }: CloseModalProps) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute right-6 top-4 -m-1 cursor-pointer rounded-md p-1 transition-colors hover:bg-gray-100"
  >
    <CloseIcon width={16} height={16} className="fill-gray-400" />
  </button>
))

interface ModalContentProps {
  children: React.ReactNode
  className?: string
}

export const ModalHeader = ({ children, className }: ModalContentProps) => (
  <header
    className={classNames(
      'flex items-center border-b border-b-gray-100 px-6 py-4',
      className
    )}
  >
    <span className="text-sm leading-4 text-gray-700">{children}</span>
  </header>
)

export const ModalBody = ({ children, className }: ModalContentProps) => (
  <main className={classNames('px-6 py-4', className)}>{children}</main>
)

const modalBackgroundStyle = () => [
  tw`fixed top-0 left-0 right-0 bottom-0 z-50`,
  tw`bg-black bg-opacity-50`,
]

const modalContentStyle = () => [
  tw`absolute top-1/2 left-1/2`,
  tw`transform -translate-x-1/2 -translate-y-1/2`,
  tw`bg-white rounded-2xl overflow-y-auto`,
  tw`w-11/12 md:w-fit min-w-[328px] min-h-[240px]`,
]
