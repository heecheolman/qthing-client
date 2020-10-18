import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Span from './index'

export default {
  title: 'Components/Atoms/Span',
  component: Span,
} as Meta

const Template: Story = (props) => <Span {...props} />

export const Default = Template.bind({})
Default.args = {
  children: '안녕하세요.',
}
