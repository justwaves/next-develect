import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Button } from '@/shared/components/Button'
import {
  Modal,
  ModalBody,
  ModalHeader,
  useModal,
} from '@/shared/components/Modal'

export default {
  title: 'Components/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => {
  const { closeModal, isOpen, openModal } = useModal()

  return (
    <>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal {...args} isOpen={isOpen} closeModal={closeModal}>
        <ModalHeader>제목</ModalHeader>
        <ModalBody>내용</ModalBody>
      </Modal>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  hasCloseButton: true,
}
