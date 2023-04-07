import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoadingSpinner } from '@/shared/components/LoadingSpinner'

export default {
  title: 'Components/LoadingSpinner',
  component: LoadingSpinner,
} as ComponentMeta<typeof LoadingSpinner>

const Template: ComponentStory<typeof LoadingSpinner> = (args) => (
  <LoadingSpinner {...args} />
)

export const Default = Template.bind({})
Default.args = {
  size: 'md',
}
