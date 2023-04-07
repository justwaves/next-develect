import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '@/shared/components/Button'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Label',
  variant: 'primary',
  size: 'md',
  fluid: false,
  isLoading: false,
  disabled: false,
}
