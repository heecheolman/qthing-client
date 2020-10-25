/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'

import React, { ButtonHTMLAttributes } from 'react'
import { colors } from '../../../config/colors'
import { Theme } from '../../../config/theme'

export enum ButtonSize {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

export enum ButtonVariant {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  TEXT = 'text',
  FLAT = 'flat',
}

const SIZE = {
  [ButtonSize.SMALL]: css`
    padding: 0 8px;
    height: 24px;
    font-size: 11px;
  `,
  [ButtonSize.MEDIUM]: css`
    padding: 0 11px;
    height: 32px;
    font-size: 13px;
  `,
  [ButtonSize.LARGE]: css`
    padding: 0 15px;
    height: 40px;
    font-size: 15px;
  `,
}

const VARIANTS = {
  [ButtonVariant.DEFAULT]: (theme: Theme) => css`
    background-color: ${theme.color.background};
    border: 1px solid ${theme.color.border};
    color: ${theme.color.text};

    &:hover {
      &:not(:disabled) {
        border-color: ${colors.blue[6]};
        color: ${colors.blue[6]};
      }
    }
  `,
  [ButtonVariant.PRIMARY]: (theme: Theme) => css`
    background-color: ${theme.color.primary};
    border: 1px solid ${theme.color.primary};
    color: ${theme.color.primaryText};

    &:hover {
      &:not(:disabled) {
        background-color: ${colors.blue[6]};
        border-color: ${colors.blue[6]};
      }
    }
  `,
  [ButtonVariant.TEXT]: (theme: Theme) => css`
    background-color: transparent;
    color: ${theme.color.text};

    &:hover {
      &:not(:disabled) {
        background-color: ${colors.gray[1]};
      }
    }
  `,
  [ButtonVariant.FLAT]: (theme: Theme) => css`
    background-color: ${colors.blue[0]};
    color: ${colors.blue[7]};

    &:hover {
      &:not(:disabled) {
        background-color: ${colors.blue[1]};
        color: ${colors.blue[8]};
      }
    }
  `,
}

const DEFAULT_STYLE = (theme: Theme) => css`
  outline: 0;
  border: 0;
  cursor: pointer;
  padding: 0;
  margin: 0;
  font-size: 13px;
  border-radius: ${theme.base.radius};
  line-height: 1.3;
  position: relative;
  display: inline-block;
  white-space: nowrap;
  text-align: center;
  box-sizing: border-box;
  transition: 0.1s ease-out;

  &:disabled {
    color: ${colors.gray[5]};
    border-color: ${theme.color.disabledBorder};
    background-color: ${theme.color.disabledBackground};
    cursor: not-allowed;
  }
`

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize
  variant?: ButtonVariant
  block?: boolean
  onClick?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
}

const Button: React.FC<IProps> = ({
  size = ButtonSize.MEDIUM,
  variant = ButtonVariant.DEFAULT,
  block = false,
  onClick,
  children,
  ...props
}) => {
  const event = {
    onClick,
  }
  const theme = useTheme<Theme>()
  const blockStyle = block
    ? css`
        display: block;
        width: 100%;
      `
    : css``
  return (
    <button
      {...props}
      {...event}
      css={[
        DEFAULT_STYLE(theme),
        VARIANTS[variant](theme),
        SIZE[size],
        blockStyle,
      ]}
    >
      {children}
    </button>
  )
}

export default Button
