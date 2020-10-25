/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import React, { HTMLAttributes } from 'react'
import { colors } from '../../../config/colors'
import { Theme } from '../../../config/theme'

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

const DEFAULT_STYLE = (props: Theme) => css`
  outline: 0;
  border: 1px solid ${props.color.border};
  border-radius: ${props.base.radius};
  color: ${props.color.text};
  box-sizing: border-box;
  position: relative;
  width: 100%;
  min-width: 0;
  line-height: 1.5;
  transition: 0.2s ease-out;
  background-color: ${props.color.background};

  &::placeholder {
    color: ${colors.gray[400]};
  }
  &:disabled {
    border-color: ${colors.gray[200]};
    background-color: ${props.color.disabledBackground};
    cursor: not-allowed;
  }
  &:focus {
    border-color: ${props.color.primary};
  }
`
const SIZE = {
  [InputSize.SMALL]: css`
    padding: 0 7px;
    font-size: 11px;
    height: 24px;
  `,
  [InputSize.MEDIUM]: css`
    padding: 0px 11px;
    height: 32px;
    font-size: 13px;
  `,
  [InputSize.LARGE]: css`
    padding: 7px 11px;
    font-size: 15px;
    height: 40px;
  `,
}

interface IProps {
  type?: InputType
  size?: InputSize
  disabled?: boolean
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<IProps> = ({
  type = InputType.TEXT,
  size = InputSize.MEDIUM,
  disabled = false,
  placeholder,
  ...props
}) => {
  const theme = useTheme<Theme>()
  return (
    <input
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      css={[DEFAULT_STYLE(theme), SIZE[size]]}
      {...props}
    />
  )
}

export default Input
