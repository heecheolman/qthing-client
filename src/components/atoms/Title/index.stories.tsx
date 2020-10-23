import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Title from './index'

export default {
  title: 'Components/Atoms/Title',
  component: Title,
  argTypes: {
    heading: {
      control: {
        type: 'radio',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      },
    },
  },
} as Meta

const Template: Story = (props) => <Title {...props} />

export const Default = Template.bind({})
Default.args = {
  children: '안녕하세요. 타이틀입니다.',
}
