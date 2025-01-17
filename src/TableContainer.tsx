import React from 'react'
import clsx from 'clsx'
import styles from './themes/default'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const TableContainer = React.forwardRef<HTMLDivElement, Props>(function TableContainer(props, ref) {
  const { className, children, ...other } = props

  const { tableContainer } = styles

  const baseStyle = tableContainer.base

  const cls = clsx(baseStyle, className)

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  )
})

export default TableContainer
