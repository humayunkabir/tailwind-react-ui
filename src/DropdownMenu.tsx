import React from 'react'
import classNames from 'classnames'
import FocusLock from 'react-focus-lock'
import { useDropdownContext } from './Dropdown'
import Transition from './Transition'
import styles from './themes/default'
import warn from './utils/warning'

export interface DropdownMenuProps {
  children: React.ReactNode
  /**
   * Defines the alignement of the dropdown related to its parent
   */
  align?: 'left' | 'right'
  /**
   * Additional classes to override default styling
   */
  className?: string
}

function DropdownMenu({ children, align = 'left', className = '' }: DropdownMenuProps) {
  const context = useDropdownContext()

  if (!context) {
    warn(true, 'DropdownMenu', 'DropdownMenu used outside of Dropdown component')
    return null
  }

  const { dropdown } = styles
  const baseStyle = dropdown.base
  const alignStyle = dropdown.align[align]
  const cls = classNames(baseStyle, alignStyle, className)

  return (
    <Transition
      show={context.isOpen}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="opacity-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <div>
        <FocusLock autoFocus={false} returnFocus>
          <ul className={cls} aria-label="submenu">
            {children}
          </ul>
        </FocusLock>
      </div>
    </Transition>
  )
}

export default DropdownMenu
