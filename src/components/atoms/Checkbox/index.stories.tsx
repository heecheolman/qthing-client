import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import Checkbox from './index'

export default {
  title: 'Components/Atoms/Checkbox',
  component: Checkbox,
} as Meta

const Template: Story = (props) => <Checkbox {...props} />

export const Default = Template.bind({})
Default.args = {
  children: '체크박스',
}

export const Checked = Template.bind({})
Checked.args = {
  ...Default.args,
  checked: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Default.args,
  disabled: true,
}
