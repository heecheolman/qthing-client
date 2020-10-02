import React from 'react'
import classNames from 'classnames'

import styles from './style.module.scss'

export enum DisplayType {
  BLOCK = 'block',
  INLINE = 'inline',
  INLINE_BLOCK = 'inline-block',
  FLEX = 'flex',
  INLINE_FLEX = 'inline-flex',
}

export enum JustifyContent {
  NORMAL = 'normal',
  FLEX_START = 'flex-start',
  FLEX_END = 'flex-end',
  CENTER = 'center',
  SPACE_BETWEEN = 'space-between',
  SPACE_AROUND = 'space-around',
}

export enum AlignItems {
  NORMAL = 'normal',
  FLEX_START = 'flex-start',
  FLEX_END = 'flex-end',
  CENTER = 'center',
}

interface IProps {
  display?: DisplayType
  justifyContent?: JustifyContent
  alignItems?: AlignItems
  className?: string
}

const Box: React.FC<IProps> = ({
  display = DisplayType.BLOCK,
  justifyContent = JustifyContent.NORMAL,
  alignItems = AlignItems.NORMAL,
  className,
  children,
}) => {
  const isFlexBox =
    display === DisplayType.FLEX || display === DisplayType.INLINE_FLEX

  const classProps = classNames(
    styles[display],
    isFlexBox && styles[`justify-content-${justifyContent}`],
    isFlexBox && styles[`align-items-${alignItems}`],
    className,
  )
  return <div className={classProps}>{children}</div>
}
export default Box
