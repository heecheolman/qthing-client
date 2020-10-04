/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled/macro'
import React from 'react'
import { GRAY, WHITE } from '../../../config/color'
import { base, StyledProps } from '../../../config/theme'

const CheckboxContent = styled.span`
  box-sizing: border-box;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-width: 1px;
  border-style: solid;
  border-radius: ${base.radius};
  transition: 0.05s ease-out;

  &:after {
    box-sizing: border-box;
    width: 40%;
    height: 60%;
    position: absolute;
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

const HiddenInput = styled.input`
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: none;
  cursor: inherit;
`

const StyledLabel = styled.label<StyledProps<IProps>>((props) => {
  const { disabled } = props
  const CheckboxContentStyle = disabled
    ? css`
        background-color: ${props.theme.color.disabledBackground};
        &:after {
          border-color: ${props.checked ? GRAY[300] : 'transparent'};
        }
      `
    : css`
        border-color: ${props.checked
          ? props.theme.color.primary
          : props.theme.color.border};
        background-color: ${props.checked
          ? props.theme.color.primary
          : 'transparent'};
        &:after {
          border-color: ${props.checked ? WHITE : 'transparent'};
        }
      `

  return css`
    display: inline-flex;
    align-items: center;
    position: relative;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};

    > ${CheckboxContent} {
      border-color: ${props.theme.color.border};
      ${CheckboxContentStyle}
    }
  `
})

const StyledText = styled.span<StyledProps<IProps>>((props) => {
  return css`
    font-size: 14px;
    color: ${props.theme.color.text};
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
