import { ComponentMeta, ComponentStory } from '@storybook/react'
import { FormEventHandler, useState } from 'react'

import { Select } from '@/shared/components/Select'

export default {
  title: 'Components/Select',
  component: Select,
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = useState('')
  const handleChange: FormEventHandler<HTMLSelectElement> = (event) => {
    setValue(event.currentTarget.value)
  }

  return <Select onChange={handleChange} value={value} {...args} />
}

export const Default = Template.bind({})
Default.args = {
  options: [
    { value: 1, label: 'One' },
    { value: 2, label: 'Two' },
    { value: 3, label: 'Three' },
  ],
  label: 'Label',
  size: 'md',
  disabled: false,
  positive: '',
  negative: '',
}
