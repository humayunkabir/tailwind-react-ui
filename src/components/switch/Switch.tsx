import React, { ReactNode, ChangeEvent, useState } from 'react'
import clsx from 'clsx'
import './Switch.css'

export interface SwitchProps {
  id: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  variant?: 'primary' | 'red' | 'green'
  size?: 'sm' | 'md' | 'lg'
  children?: ReactNode
}

const Switch = ({
  id,
  onChange,
  variant = 'primary',
  children,
  size = 'md',
}: SwitchProps) => {
  const [checked, setChecked] = useState(false)

  return (
    <button
      className={clsx(
        ' relative inline-flex flex-shrink-0 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75',
        {
          'h-[24px] w-[60px]': size === 'sm',
          'h-[32px] w-[68px]': size === 'md',
          'h-[38px] w-[74px]': size === 'lg',
          'bg-primary-700': variant === 'primary' && checked,
          'bg-red-700': variant === 'red' && checked,
          'bg-green-700': variant === 'green' && checked,
          'bg-gray-300': !checked,
        }
      )}
      id={id}
      role="switch"
      tabIndex={0}
      aria-checked={checked}
      onClick={() => setChecked(!checked)}
    >
      <span className="sr-only">{children}</span>
      <span
        aria-hidden="true"
        className={clsx(
          'pointer-events-none inline-block rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200',
          {
            'h-[20px] w-[20px]': size === 'sm',
            'h-[28px] w-[28px]': size === 'md',
            'h-[34px] w-[34px]': size === 'lg',
            'translate-x-9': checked,
            'translate-x-0': !checked,
          }
        )}
      />
    </button>
  )
}

export default Switch
