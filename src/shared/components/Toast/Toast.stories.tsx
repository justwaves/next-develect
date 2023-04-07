import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Toast, useToast } from '@/shared/components/Toast'

export default {
  title: 'Components/Toast',
  component: Toast,
} as ComponentMeta<typeof Toast>

const Template: ComponentStory<typeof Toast> = (args) => {
  const [isOpen, openToast, closeToast] = useToast()

  return (
    <div className="flex h-80 items-center justify-center">
      <button
        type="button"
        onClick={openToast}
        className="rounded-lg border border-gray-400 p-2"
      >
        Open Toast
      </button>
      <Toast {...args} isOpen={isOpen} closeToast={closeToast} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  message: 'Toast Message',
  autoHideDuration: 3000,
  variant: 'success',
}
