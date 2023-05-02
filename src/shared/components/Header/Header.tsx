import classNames from 'classnames'

import { Button } from '@/shared/components/Button'
import { Logo } from '@/shared/components/Logo'
import {
  Modal,
  ModalBody,
  ModalHeader,
  useModal,
} from '@/shared/components/Modal'

export const Header = () => {
  const { closeModal, isOpen, openModal } = useModal()

  return (
    <header
      className={classNames(
        'sticky top-0 z-10',
        'flex items-center justify-between',
        'border-b border-b-gray-100 bg-white',
        'h-[var(--header-height)] px-4 md:px-8 '
      )}
    >
      <span className="flex items-center h-full gap-x-10">
        <Logo size="sm" linkActive />
      </span>
      <span>
        <Button size="sm" onClick={openModal}>
          시작하기
        </Button>
        <Modal isOpen={isOpen} closeModal={closeModal} hasCloseButton>
          <ModalHeader>시작하기</ModalHeader>
          <ModalBody className="md:w-[410px]">login form</ModalBody>
        </Modal>
      </span>
    </header>
  )
}
