import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import Button, { ButtonSize, ButtonVariant } from './index'

export default {
  title: 'Components/Atoms/Button',
  component: Button,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: [ButtonSize.SMALL, ButtonSize.MEDIUM, ButtonSize.LARGE],
      },
    },
    variant: {
      control: {
        type: 'radio',
        options: [
          ButtonVariant.DEFAULT,
          ButtonVariant.PRIMARY,
          ButtonVariant.TEXT,
          ButtonVariant.FLAT,
        ],
      },
    },
  },
} as Meta

const Template: Story = (props) => <Button {...props} />

export const Default = Template.bind({})
Default.args = {
  variant: ButtonVariant.DEFAULT,
  size: ButtonSize.MEDIUM,
  children: '버튼',
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Default.args,
  disabled: true,
}

export const Primary = Template.bind({})
Primary.args = {
  variant: ButtonVariant.PRIMARY,
  size: ButtonSize.MEDIUM,
  disabled: false,
  children: '버튼',
}

export const Flat = Template.bind({})
Flat.args = {
  variant: ButtonVariant.FLAT,
  size: ButtonSize.MEDIUM,
  disabled: false,
  children: '버튼',
}

export const Text = Template.bind({})
Text.args = {
  variant: ButtonVariant.TEXT,
  size: ButtonSize.MEDIUM,
  disabled: false,
  children: '버튼',
}

export const Small = Template.bind({})
Small.args = {
  variant: ButtonVariant.DEFAULT,
  size: ButtonSize.SMALL,
  children: '버튼',
}

export const Large = Template.bind({})
Large.args = {
  variant: ButtonVariant.DEFAULT,
  size: ButtonSize.LARGE,
  children: '버튼',
}
