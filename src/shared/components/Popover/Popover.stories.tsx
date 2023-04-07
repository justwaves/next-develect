import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Popover, usePopover } from '@/shared/components/Popover'

export default {
  title: 'Components/Popover',
  component: Popover,
  argTypes: {
    placement: {
      control: {
        type: 'radio',
        options: ['bottomLeft', 'bottomRight', 'topLeft', 'topRight'],
      },
    },
    gap: {
      control: {
        type: 'range',
        min: 0,
        max: 20,
      },
    },
  },
} as ComponentMeta<typeof Popover>

const Template: ComponentStory<typeof Popover> = (args) => {
  const { togglePopover, closePopover, isOpen, triggerElement } =
    usePopover<HTMLButtonElement>()

  return (
    <div className="flex h-80 items-center justify-center">
      <button
        type="button"
        onClick={togglePopover}
        className="rounded-lg border border-gray-400 p-2"
      >
        Open Popover
      </button>
      <Popover
        {...args}
        triggerElement={triggerElement}
        isOpen={isOpen}
        closePopover={closePopover}
      >
        <div className="w-[180px] p-4">Popover Content</div>
      </Popover>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  placement: 'bottomRight',
  gap: 8,
}
