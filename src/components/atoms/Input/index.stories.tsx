import React, { useState } from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import Input, { InputSize, InputType } from './index'

export default {
  title: 'Components/Atoms/Input',
  component: Input,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: [InputSize.SMALL, InputSize.MEDIUM, InputSize.LARGE],
      },
    },
    type: {
      control: {
        type: 'radio',
        options: [
          InputType.TEXT,
          InputType.PASSWORD,
          InputType.EMAIL,
          InputType.TEL,
          InputType.NUMBER,
        ],
      },
    },
  },
} as Meta

const Template: Story = (props) => {
  const [value, setValue] = useState(props.value)

  return (
    <Input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  size: InputSize.MEDIUM,
  type: InputType.TEXT,
  value: '',
  placeholder: 'placeholder',
  onChange: () => {},
}

export const Small = Template.bind({})
Small.args = {
  ...Default.args,
  size: InputSize.SMALL,
}

export const Large = Template.bind({})
Large.args = {
  ...Default.args,
  size: InputSize.LARGE,
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Default.args,
  disabled: true,
}
