/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import React from 'react'
import { GRAY } from '../../../config/color'
import { base, Theme } from '../../../config/theme'

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
  border-radius: ${base.radius};
  color: ${props.color.text};
  box-sizing: border-box;
  position: relative;
  width: 100%;
  min-width: 0;
  line-height: 1.5;
  transition: 0.2s ease-out;
  background-color: ${props.color.background};

  &::placeholder {
    color: ${GRAY[400]};
  }
  &:disabled {
    border-color: ${GRAY[200]};
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
    font-size: 14px;
    height: 24px;
  `,
  [InputSize.MEDIUM]: css`
    padding: 0px 11px;
    height: 32px;
    font-size: 14px;
  `,
  [InputSize.LARGE]: css`
    padding: 7px 11px;
    font-size: 16px;
    height: 40px;
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
  const appTheme = useTheme<Theme>()
  const event = {
    onChange,
  }
  return (
    <input
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      className={className}
      css={[DEFAULT_STYLE(appTheme), SIZE[size]]}
      {...event}
    />
  )
}

export default Input
