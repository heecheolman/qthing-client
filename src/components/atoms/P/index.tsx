/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import React from 'react'
import { Theme } from '../../../config/theme'

export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

export enum WhiteSpace {
  NORMAL = 'normal',
  NOWRAP = 'nowrap',
  PRE = 'pre',
  PRE_WRAP = 'pre-wrap',
  PRE_LINE = 'pre-line',
  BREAK_SPACES = 'break-spaces',
}

export enum WordBreak {
  NORMAL = 'normal',
  BREAK_ALL = 'break-all',
  BREAK_WORD = 'break-word',
  KEEP_ALL = 'keep-all',
}

const DEFAULT_STYLE = css`
  /* margin: 0; */
`

interface IProps {
  textAlign?: TextAlign
  fontSize?: number
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  ellipsis?: boolean
  lineHeight?: number
  whiteSpace?: WhiteSpace
  wordBreak?: WordBreak
  className?: string
}

const P: React.FC<IProps> = ({
  textAlign = TextAlign.LEFT,
  fontSize = 14,
  fontWeight = 400,
  ellipsis = false,
  lineHeight = 1.5,
  whiteSpace = WhiteSpace.NORMAL,
  wordBreak = WordBreak.NORMAL,
  className,
  children,
}) => {
  const appTheme = useTheme<Theme>()
  const ellipsisStyle = css`
    white-space: ${ellipsis ? WhiteSpace.NOWRAP : whiteSpace};
    text-overflow: ${ellipsis ? 'ellipsis' : 'clip'};
    overflow: ${ellipsis ? 'hidden' : 'visible'};
  `
  return (
    <p
      css={[
        DEFAULT_STYLE,
        css`
          color: ${appTheme.color.text};
          ${ellipsisStyle}
          text-align: ${textAlign};
          font-size: ${fontSize}px;
          font-weight: ${fontWeight};
          line-height: ${lineHeight};
          word-break: ${wordBreak};
        `,
      ]}
      className={className}
    >
      {children}
    </p>
  )
}

export default P
