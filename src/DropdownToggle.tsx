import { useDropdownContext } from './Dropdown'
import warn from './utils/warning'

interface DropdownToggleProps {
  children: (toggleDropdown: () => void) => JSX.Element
}

function DropdownToggle({ children }: DropdownToggleProps) {
  const context = useDropdownContext()

  if (!context) {
    warn(true, 'DropdownToggle', 'DropdownToggle used outside of Dropdown component')
    return null
  }

  return children(context.toggleDropdown)
}

export default DropdownToggle
