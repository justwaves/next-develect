import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Input } from '@/shared/components/Input'

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Label',
  placeholder: '텍스트를 입력해주세요',
  size: 'md',
  disabled: false,
  positive: '',
  negative: '',
}
