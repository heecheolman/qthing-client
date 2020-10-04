/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import React from 'react'
import { Theme } from '../../../config/theme'

interface IProps {
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  fontSize?: number
  className?: string
}

const DEFAULT_STYLE = css`
  display: inline;
`

const Span: React.FC<IProps> = ({
  fontSize = 14,
  fontWeight = 400,
  className,
  children,
}) => {
  const appTheme = useTheme<Theme>()

  return (
    <span
      className={className}
      css={[
        DEFAULT_STYLE,
        css`
          color: ${appTheme.color.text};
          font-size: ${fontSize}px;
          font-weight: ${fontWeight};
        `,
      ]}
    >
      {children}
    </span>
  )
}

export default Span
