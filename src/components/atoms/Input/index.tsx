import React from 'react'
import classNames from 'classnames'

import styles from './style.module.scss'

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
  onChange,
  className,
}) => {
  const classProps = classNames(styles.default, styles[size], className)
  const event = {
    onChange,
  }
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={classProps}
      {...event}
    />
  )
}

export default Input
