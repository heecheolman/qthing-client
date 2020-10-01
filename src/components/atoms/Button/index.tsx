import React from 'react'
import classNames from 'classnames'

import styles from './style.module.scss'

export enum ButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

interface IProps {
  className?: string
  size?: ButtonSize
  type?: ButtonType
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<IProps> = ({
  type = ButtonType.BUTTON,
  size = ButtonSize.MEDIUM,
  onClick,
  children,
}) => {
  const classProps = classNames(styles.default, styles[size])
  const event = {
    onClick,
  }
  return (
    <button type={type} className={classProps} {...event}>
      {children}
    </button>
  )
}

export default Button
