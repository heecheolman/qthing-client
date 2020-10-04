/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import React from 'react'
import { BLUE, GRAY } from '../../../config/color'
import { base, Theme } from '../../../config/theme'

export enum ButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export enum ButtonTheme {
  DEFAULT = 'default',
  PRIMARY = 'primary',
}

interface IProps {
  className?: string
  type?: ButtonType
  size?: ButtonSize
  theme?: ButtonTheme
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const DEFAULT_STYLE = (props: Theme) => css`
  outline: 0;
  border: 0;
  cursor: pointer;
  padding: 0;
  margin: 0;
  font-size: 14px;
  border-radius: ${base.radius};
  position: relative;
  display: inline-block;
  white-space: nowrap;
  text-align: center;
  box-sizing: border-box;
  transition: 0.2s ease-out;

  &:disabled {
    color: ${GRAY[500]};
    border-color: ${props.color.disabledBorder};
    background-color: ${props.color.disabledBackground};
    cursor: not-allowed;
  }
`
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
const THEME = {
  [ButtonTheme.DEFAULT]: (theme: Theme) => css`
    background-color: ${theme.color.background};
    border: 1px solid ${theme.color.border};
    color: ${theme.color.text};

    &:hover {
      &:not(:disabled) {
        border-color: ${BLUE[500]};
        color: ${BLUE[500]};
      }
    }
  `,
  [ButtonTheme.PRIMARY]: (theme: Theme) => css`
    background-color: ${theme.color.primary};
    border: 1px solid ${theme.color.primary};
    color: ${theme.color.primaryText};

    &:hover {
      &:not(:disabled) {
        background-color: ${BLUE[500]};
        border-color: ${BLUE[500]};
      }
    }
  `,
}

const Button: React.FC<IProps> = ({
  type = ButtonType.BUTTON,
  size = ButtonSize.MEDIUM,
  theme = ButtonTheme.DEFAULT,
  disabled = false,
  className,
  onClick,
  children,
}) => {
  const appTheme = useTheme<Theme>()

  const event = {
    onClick,
  }
  return (
    <button
      type={type}
      disabled={disabled}
      className={className}
      css={[DEFAULT_STYLE(appTheme), SIZE[size], THEME[theme](appTheme)]}
      {...event}
    >
      {children}
    </button>
  )
}

export default Button
