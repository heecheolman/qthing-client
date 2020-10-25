/** @jsx jsx */
import { css, jsx, ThemeContext } from '@emotion/core'
import styled from '@emotion/styled/macro'
import { useTheme } from 'emotion-theming'
import React, { HTMLAttributes } from 'react'
import { colors } from '../../../config/colors'
import { StyledProps, Theme, ThemeProps } from '../../../config/theme'
import { RadioContext } from '../../molecules/RadioGroup'

interface IProps extends HTMLAttributes<HTMLInputElement> {
  value?: string
  checked?: boolean
  disabled?: boolean
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void
}

const RadioInnerSymbol = styled.div<StyledProps<IProps, 'checked'>>((props) => {
  const { theme } = props
  return css`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transition: 0.2s ease-out;
  `
})

const RadioSymbol = styled.div<StyledProps<IProps, 'checked'>>((props) => {
  const { theme } = props

  return css`
    display: inline-flex;
    width: 18px;
    height: 18px;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    border-radius: 50%;
    transition: 0.2s ease-out;
  `
})

const HIDDEN_RADIO_STYLE = css`
  display: none;
`

const RadioBox = styled.div<ThemeProps>(({ theme }) => {
  return css`
    display: inline-flex;
    font-size: ${theme.base.fontSize};
    align-items: center;
    justify-content: center;
  `
})

const StyledText = styled.span<ThemeProps>(({ theme }) => {
  return css`
    font-size: ${theme.base.fontSize};
    color: ${theme.color.text};
    padding: 0 4px;
  `
})

const StyledLabel = styled.label<StyledProps<IProps, 'checked' | 'disabled'>>(
  (props) => {
    const { theme } = props
    const ContentStyle = props.disabled
      ? css`
          cursor: not-allowed;
          ${RadioSymbol} {
            border-color: ${theme.color.disabledBorder};
          }
          ${RadioInnerSymbol} {
            background-color: ${props.checked
              ? theme.color.disabledBackground
              : 'transparent'};
          }
        `
      : css`
          cursor: pointer;
          ${RadioSymbol} {
            border-color: ${props.checked
              ? theme.color.primary
              : theme.color.border};
          }
          ${RadioInnerSymbol} {
            background-color: ${props.checked
              ? theme.color.primary
              : 'transparent'};
          }
          &:hover {
            ${RadioSymbol} {
              border-color: ${theme.color.primary};
            }
          }
        `

    return css`
      display: inline-flex;
      align-items: center;
      ${ContentStyle}
    `
  },
)

const Radio: React.FC<IProps> = ({
  value = '',
  checked = false,
  disabled = false,
  children,
  ...props
}) => {
  return (
    <RadioContext.Consumer>
      {({
        value: groupValue,
        name,
        onChange: groupOnChange,
        disabled: groupDisabled,
      }) => {
        const selected = checked || groupValue === value

        return (
          <StyledLabel checked={selected} disabled={disabled || groupDisabled}>
            <input
              type="radio"
              name={name}
              disabled={disabled || groupDisabled}
              value={value}
              checked={selected}
              css={HIDDEN_RADIO_STYLE}
              onChange={groupOnChange}
            />
            <RadioSymbol checked={selected}>
              <RadioInnerSymbol />
            </RadioSymbol>
            <RadioBox>
              <StyledText>{children}</StyledText>
            </RadioBox>
          </StyledLabel>
        )
      }}
    </RadioContext.Consumer>
  )
}

export default Radio
