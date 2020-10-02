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

  &::placeholder {
    color: #6b6b6b;
  }
`
const SIZE = {
  [InputSize.SMALL]: css`
    padding: 0 7px;
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
  placeholder?: string
  className?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<IProps> = ({
  type = InputType.TEXT,
  size = InputSize.MEDIUM,
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
      placeholder={placeholder}
      className={className}
      css={[DEFAULT_STYLE, SIZE[size]]}
      {...event}
    />
  )
}

export default Input
