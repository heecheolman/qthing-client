import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { colors } from './colors'

export default {
  title: 'Theme/Color',
} as Meta

const PaletteStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#3d3d3d',
  fontSize: '12px',
  width: '200px',
  height: '50px',
}

function getPalette(color: keyof typeof colors) {
  const palette = Object.entries(colors[color])
  const PaletteElement = palette.map(([variant, colorCode]) => (
    <div
      style={{
        ...PaletteStyle,
        backgroundColor: colorCode,
      }}
    >
      {color}-{variant}
      <br />
      {colorCode}
    </div>
  ))
  return <div style={{ display: 'inline-block' }}>{PaletteElement}</div>
}

const Template: Story = (props) => {
  const palette = Object.keys(colors) as (keyof typeof colors)[]
  return (
    <div>
      {palette.map((colorKey) => {
        return getPalette(colorKey)
      })}
    </div>
  )
}

export const Default = Template.bind({})
