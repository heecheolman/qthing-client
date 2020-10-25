import React, {
  forwardRef,
  HTMLProps,
  useImperativeHandle,
  useState,
} from 'react'

// interface IProps extends HTMLProps<HTMLInputElement> {}

const Input = forwardRef(({ ...props }: HTMLProps<HTMLInputElement>, ref) => {
  const [value, setValue] = useState(props.value)

  useImperativeHandle(ref, () => ({
    value,
  }))
  return (
    <input
      {...props}
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
})

export default Input
