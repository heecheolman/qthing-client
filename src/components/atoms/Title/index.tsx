/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import React from 'react'
import { Theme } from '../../../config/theme'

type HeadingTags = keyof Pick<
  React.ReactHTML,
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
>

interface IProps {
  heading?: HeadingTags
}

const DEFAULT_STYLE = (theme: Theme) => css`
  color: ${theme.color.text};
  margin-top: 0;
  font-weight: bold;
`

const TAG_STYLE: {
  [key in HeadingTags]: (theme: Theme) => SerializedStyles
} = {
  h1: (theme: Theme) => css`
    font-size: 2.5rem;
  `,
  h2: (theme: Theme) => css`
    font-size: 2rem;
  `,
  h3: (theme: Theme) => css`
    font-size: 1.75rem;
  `,
  h4: (theme: Theme) => css`
    font-size: 1.5rem;
  `,
  h5: (theme: Theme) => css`
    font-size: 1.25rem;
  `,
  h6: (theme: Theme) => css`
    font-size: 1rem;
  `,
}

const Title: React.FC<IProps> = ({ heading = 'h1', children, ...props }) => {
  const theme = useTheme<Theme>()
  return jsx(
    heading,
    {
      css: [DEFAULT_STYLE(theme), TAG_STYLE[heading](theme)],
      ...props,
    },
    children,
  )
}

export default Title
