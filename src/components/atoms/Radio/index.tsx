import React, { HTMLAttributes } from 'react'

interface IProps extends HTMLAttributes<HTMLInputElement> {}

const Radio: React.FC<IProps> = ({ children }) => {
  return (
    <label>
      <input type="radio" />
      {children}
    </label>
  )
}

export default Radio
