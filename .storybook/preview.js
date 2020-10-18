import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { lightTheme } from '../src/config/theme'

export const parameters = {}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <Story />
    </ThemeProvider>
  ),
]
