import React, { createContext, useCallback, useMemo } from 'react'

export const RadioContext = createContext<{
  value: string
  name: string
  disabled: boolean
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void
}>({
  value: '',
  name: '',
  disabled: false,
  onChange: () => {},
})

interface IProps {
  value?: string
  name?: string
  disabled?: boolean
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void
}

const RadioGroup: React.FC<IProps> = ({
  value = '',
  name = '',
  disabled = false,
  onChange = () => {},
  children,
}) => {
  return (
    <RadioContext.Provider
      value={{
        value,
        disabled,
        name,
        onChange,
      }}
    >
      <div>{children}</div>
    </RadioContext.Provider>
  )
}

export default RadioGroup
