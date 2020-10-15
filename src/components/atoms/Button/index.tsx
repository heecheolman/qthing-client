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
}

const SIZE = {
  [ButtonSize.SMALL]: css`
    padding: 0 8px;
    height: 24px;
    font-size: 14px;
  `,
  [ButtonSize.MEDIUM]: css`
    padding: 0 11px;
    height: 32px;
    font-size: 14px;
  `,
  [ButtonSize.LARGE]: css`
    padding: 0 15px;
    height: 40px;
    font-size: 16px;
  `,
}

const VARIANTS = {
  [ButtonVariant.DEFAULT]: (theme: Theme) => css`
    background-color: ${theme.color.background};
    border: 1px solid ${theme.color.border};
    color: ${theme.color.text};

    &:hover {
      &:not(:disabled) {
        border-color: ${colors.blue[500]};
        color: ${colors.blue[500]};
      }
    }
  `,
  [ButtonVariant.PRIMARY]: (theme: Theme) => css`
    background-color: ${theme.color.primary};
    border: 1px solid ${theme.color.primary};
    color: ${theme.color.primaryText};

    &:hover {
      &:not(:disabled) {
        background-color: ${colors.blue[500]};
        border-color: ${colors.blue[500]};
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
  font-size: 14px;
  border-radius: ${theme.base.radius};
  position: relative;
  display: inline-block;
  white-space: nowrap;
  text-align: center;
  box-sizing: border-box;
  transition: 0.2s ease-out;

  &:disabled {
    color: ${colors.gray[500]};
    border-color: ${theme.color.disabledBorder};
    background-color: ${theme.color.disabledBackground};
    cursor: not-allowed;
  }
`

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize
  variant?: ButtonVariant
  onClick?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
}

const Button: React.FC<IProps> = ({
  size = ButtonSize.MEDIUM,
  variant = ButtonVariant.DEFAULT,
  onClick,
  children,
  ...props
}) => {
  const event = {
    onClick,
  }
  const theme = useTheme<Theme>()
  return (
    <button
      {...props}
      {...event}
      css={[DEFAULT_STYLE(theme), VARIANTS[variant](theme), SIZE[size]]}
    >
      {children}
    </button>
  )
}

export default Button
