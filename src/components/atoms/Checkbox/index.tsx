/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled/macro'

import React from 'react'
import { colors } from '../../../config/colors'
import { StyledProps, ThemeProps } from '../../../config/theme'

const CheckboxContent = styled.span<ThemeProps>(({ theme }) => {
  return css`
    box-sizing: border-box;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border-width: 1px;
    border-style: solid;
    border-radius: ${theme.base.radius};
    transition: 0.05s ease-out;

    &:after {
      box-sizing: border-box;
      width: 40%;
      height: 60%;
      border-width: 2px;
      border-style: solid;
      border-top: 0;
      border-left: 0;
      border-color: transparent;
      transform: rotate(45deg) translate(-20%, -10%);
      opacity: 1;
      content: ' ';
      transition: 0.2s ease-out;
    }
  `
})

const HiddenInput = styled.input`
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: none;
  cursor: inherit;
`

const StyledLabel = styled.label<StyledProps<IProps, 'checked' | 'disabled'>>(
  (props) => {
    const { theme } = props
    const CheckboxContentStyle = props.disabled
      ? css`
          background-color: ${theme.color.disabledBackground};
          &:after {
            border-color: ${props.checked ? colors.gray[300] : 'transparent'};
          }
        `
      : css`
          border-color: ${props.checked
            ? theme.color.primary
            : theme.color.border};
          background-color: ${props.checked
            ? theme.color.primary
            : 'transparent'};
          &:after {
            border-color: ${props.checked ? colors.white : 'transparent'};
          }
        `

    return css`
      display: inline-flex;
      align-items: center;
      position: relative;
      cursor: ${props.disabled ? 'not-allowed' : 'pointer'};

      > ${CheckboxContent} {
        border-color: ${theme.color.border};
        ${CheckboxContentStyle}
      }
    `
  },
)

const StyledText = styled.span<ThemeProps>(({ theme }) => {
  return css`
    font-size: 14px;
    color: ${theme.color.text};
    padding: 0 4px;
  `
})

interface IProps {
  checked?: boolean
  disabled?: boolean
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void
}

const Checkbox: React.FC<IProps> = ({
  checked = false,
  disabled = false,
  onChange = () => {},
  children,
  ...props
}) => {
  const event = {
    onChange,
  }
  return (
    <StyledLabel disabled={disabled} checked={checked} {...props}>
      <HiddenInput
        type="checkbox"
        disabled={disabled}
        checked={checked}
        {...event}
      />
      <CheckboxContent />
      <StyledText>{children}</StyledText>
    </StyledLabel>
  )
}

export default Checkbox
