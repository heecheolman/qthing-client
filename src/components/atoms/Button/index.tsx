/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'

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

const DEFAULT_STYLE = css`
  outline: 0;
  border: 0;
  cursor: pointer;
  padding: 0;
  margin: 0;
  font-size: 14px;
  border-radius: 2px;
  position: relative;
  display: inline-block;
  white-space: nowrap;
  text-align: center;
  box-sizing: border-box;

  &:disabled {
    color: #3d3d3d;
    border-color: #3d3d3d;
    background-color: #e3e3e3;
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
    padding: 4px 15px;
    height: 32px;
    font-size: 14px;
  `,
  [ButtonSize.LARGE]: css`
    padding: 8px 15px;
    height: 40px;
    font-size: 16px;
  `,
}
const THEME = {
  [ButtonTheme.DEFAULT]: css`
    background-color: #fff;
    border: 1px solid #3d3d3d;
    color: #3d3d3d;
  `,
  [ButtonTheme.PRIMARY]: css`
    background-color: #5075e3;
    border: 1px solid #5075e3;
    color: #fff;
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
  const event = {
    onClick,
  }
  return (
    <button
      type={type}
      disabled={disabled}
      className={className}
      css={[DEFAULT_STYLE, SIZE[size], THEME[theme]]}
      {...event}
    >
      {children}
    </button>
  )
}

export default Button
