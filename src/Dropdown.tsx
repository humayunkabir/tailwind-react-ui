import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import DropdownItem from './DropdownItem'
import DropdownMenu from './DropdownMenu'
import DropdownToggle from './DropdownToggle'

interface DropdownContextValue {
  isOpen: boolean
  toggleDropdown: () => void
  openDropdown: () => void
  closeDropdown: () => void
}

const DropdownContext = createContext<DropdownContextValue | null>(null)

export function useDropdownContext() {
  const context = useContext(DropdownContext)

  return context
}

function Dropdown({ children }: { children: React.ReactNode }) {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleOutsideClick = useCallback((e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsOpen(false)
    }
  }, [])

  const handleEsc = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Esc' || e.key === 'Escape') {
      setIsOpen(false)
    }
  }, [])

  const toggleDropdown = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const openDropdown = () => setIsOpen(true)

  const closeDropdown = () => setIsOpen(false)

  const context = useMemo(
    () => ({
      isOpen,
      toggleDropdown,
      openDropdown,
      closeDropdown,
    }),
    [isOpen, toggleDropdown]
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleOutsideClick, { capture: true })
      document.addEventListener('keydown', handleEsc, { capture: true })
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick, { capture: true })
      document.removeEventListener('keydown', handleEsc, { capture: true })
    }
  }, [handleOutsideClick, handleEsc, isOpen])

  return (
    <DropdownContext.Provider value={context}>
      <div ref={dropdownRef} className="relative">
        {children}
      </div>
    </DropdownContext.Provider>
  )
}

Dropdown.Item = DropdownItem
Dropdown.Menu = DropdownMenu
Dropdown.Toggle = DropdownToggle

export default Dropdown
