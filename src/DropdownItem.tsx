import React, { MouseEvent } from 'react'
import { ButtonProps } from './Button'
import Button from './Button'
import { useDropdownContext } from './Dropdown'
import warn from './utils/warning'

type Ref = typeof Button
const DropdownItem = React.forwardRef<Ref, ButtonProps>(function DropdownItem(props, ref) {
  const context = useDropdownContext()

  if (!context) {
    warn(true, 'DropdownMenu', 'DropdownMenu used outside of Dropdown component')
    return null
  }

  // Note: className is passed to the inner Button
  const { children, onClick, ...other } = props

  const handleClick = (event: MouseEvent<HTMLButtonElement> & MouseEvent<HTMLAnchorElement>) => {
    context.closeDropdown()

    if (props.tag === 'a' && (!props.href || props.href.trim() === '#')) {
      event.preventDefault()
    }

    if (onClick) {
      onClick(event)
    }
  }

  return (
    <li>
      <Button layout="__dropdownItem" ref={ref} onClick={handleClick} {...other}>
        {children}
      </Button>
    </li>
  )
})

export default DropdownItem
