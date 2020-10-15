/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import Button, { ButtonVariant } from '../../atoms/Button'
import Input from '../../atoms/Input'
import Box, { DisplayType } from '../Box'

export enum SearchBarSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

interface IProps {
  size?: SearchBarSize
  placeholder?: string
  buttonText?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSearch?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
}

const SearchBar: React.FC<IProps> = ({
  size = SearchBarSize.MEDIUM,
  placeholder,
  buttonText = '검색',
  onChange,
  onSearch,
  ...props
}) => {
  const inputEvent = {
    onChange,
  }
  const buttonEvent = {
    onClick: onSearch,
  }
  return (
    <Box display={DisplayType.FLEX} {...props}>
      <Input
        css={css`
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        `}
        size={size as any}
        placeholder={placeholder}
        {...inputEvent}
      />
      <Button
        css={css`
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        `}
        size={size as any}
        variant={ButtonVariant.PRIMARY}
        {...buttonEvent}
      >
        {buttonText}
      </Button>
    </Box>
  )
}

export default SearchBar
