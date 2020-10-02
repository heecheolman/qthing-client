/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'

export enum InputType {
  TEXT = 'text',
  PASSWORD = 'password',
  EMAIL = 'email',
  TEL = 'tel',
  NUMBER = 'number',
}

export enum InputSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

const DEFAULT_STYLE = css`
  outline: 0;
  border: 1px solid #3d3d3d;
  border-radius: 2px;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  min-width: 0;
  line-height: 1.5;

  &::placeholder {
    color: #6b6b6b;
  }
  &:disabled {
    background-color: #e3e3e3;
    cursor: not-allowed;
  }
  &:focus {
    border-color: #4169e1;
  }
`
const SIZE = {
  [InputSize.SMALL]: css`
    padding: 0 7px;
    font-size: 14px;
  `,
  [InputSize.MEDIUM]: css`
    padding: 4px 11px;
    font-size: 14px;
  `,
  [InputSize.LARGE]: css`
    padding: 7px 11px;
    font-size: 16px;
  `,
}

interface IProps {
  type?: InputType
  size?: InputSize
  disabled?: boolean
  placeholder?: string
  className?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<IProps> = ({
  type = InputType.TEXT,
  size = InputSize.MEDIUM,
  disabled = false,
  placeholder,
  className,
  onChange,
}) => {
  const event = {
    onChange,
  }
  return (
    <input
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      className={className}
      css={[DEFAULT_STYLE, SIZE[size]]}
      {...event}
    />
  )
}

export default Input
