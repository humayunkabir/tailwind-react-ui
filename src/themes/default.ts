export default {
  // Alert
  alert: {
    base: 'w-full p-4 pl-12 relative rounded-lg leading-5',
    withClose: 'pr-12',
    success: 'bg-green-50 text-green-900 dark:bg-green-600 dark:text-white',
    danger: 'bg-red-50 text-red-900 dark:bg-red-600 dark:text-white',
    warning: 'bg-yellow-50 text-yellow-900 dark:bg-yellow-600 dark:text-white',
    neutral: 'bg-gray-50 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    info: 'bg-blue-50 text-blue-900 dark:bg-blue-600 dark:text-white',
    icon: {
      base: 'h-5 w-5',
      success: 'text-green-400 dark:text-green-300',
      danger: 'text-red-400 dark:text-red-300',
      warning: 'text-yellow-400 dark:text-yellow-100',
      neutral: 'text-gray-400 dark:text-gray-500',
      info: 'text-blue-400 dark:text-blue-300',
    },
  },
  // Pagination
  pagination: {
    base: 'flex flex-col justify-between text-xs sm:flex-row text-gray-600 dark:text-gray-400',
  },
  // TableFooter
  tableFooter: {
    base:
      'px-4 py-3 border-t dark:border-gray-700 bg-gray-50 text-gray-500 dark:text-gray-400 dark:bg-gray-800',
  },
  // TableRow
  tableRow: {
    base: '',
  },
  // TableHeader
  tableHeader: {
    base:
      'text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800',
  },
  // TableContainer
  tableContainer: {
    base: 'w-full overflow-hidden rounded-lg ring-1 ring-black ring-opacity-5 shadow',
  },
  // TableCell
  tableCell: {
    base: 'px-4 py-3',
  },
  // TableBody
  tableBody: {
    base:
      'bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 text-gray-700 dark:text-gray-400',
  },
  // Dropdown
  dropdown: {
    base:
      'absolute w-56 mt-2 py-0.5 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 min-w-max dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700',
    align: {
      left: 'left-0 origin-top-left',
      right: 'right-0 origin-top-right',
    },
  },
  // Avatar
  avatar: {
    base: 'relative rounded-full inline-block',
    size: {
      large: 'w-10 h-10',
      regular: 'w-8 h-8',
      small: 'w-6 h-6',
    },
  },
  // Modal
  modal: {
    base:
      'w-full px-6 py-4 overflow-hidden bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-xl',
  },
  // ModalBody
  modalBody: {
    base: 'mb-6 text-sm text-gray-700 dark:text-gray-400',
  },
  // ModalFooter
  modalFooter: {
    base:
      'flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800',
  },
  // ModalHeader
  modalHeader: {
    base: 'mt-4 mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300',
  },
  // Badge
  badge: {
    base: 'inline-flex px-3 py-0.5 text-xs font-medium leading-5 rounded-full',
    success: 'text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100',
    danger: 'text-red-700 bg-red-100 dark:text-red-100 dark:bg-red-700',
    warning: 'text-yellow-700 bg-yellow-100 dark:text-white dark:bg-yellow-600',
    neutral: 'text-gray-700 bg-gray-100 dark:text-gray-100 dark:bg-gray-700',
    primary: 'text-primary-700 bg-primary-100 dark:text-white dark:bg-primary-600',
  },
  // Backdrop
  backdrop: {
    base:
      'fixed inset-0 z-40 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center',
  },
  // Textarea
  textarea: {
    base: 'block w-full text-sm dark:text-gray-300 form-textarea focus:outline-none',
    active:
      'focus:border-primary-400 dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700 dark:focus:ring-gray focus:ring-primary',
    disabled: 'cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800',
    valid:
      'border-green-600 dark:bg-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:ring-green dark:focus:ring-green',
    invalid:
      'border-red-600 dark:bg-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red dark:focus:ring-red',
  },
  // Select
  select: {
    base:
      'block w-full text-sm border-gray-300 rounded-md shadow-sm dark:text-gray-300 focus:outline-none',
    active:
      'focus:border-gray-400 focus:ring-1 focus:ring-gray-400 dark:focus:ring-gray-300 dark:focus:border-gray-600 dark:border-gray-600 dark:bg-gray-700',
    select: 'leading-5',
    disabled: 'cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800',
    valid:
      'border-green-600 dark:bg-gray-700 focus:ring focus:ring-opacity-40 focus:border-green-400 dark:focus:border-green-400 focus:ring-green-300 dark:focus:ring-green-300',
    invalid:
      'border-red-600 dark:bg-gray-700 focus:ring focus:ring-opacity-40 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-300 dark:focus:ring-red-300',
    multiple: '',
  },
  // Label
  label: {
    base: 'block text-sm text-gray-700 dark:text-gray-400',
    // check and radio get this same style
    check: 'inline-flex items-center',
    disabled: 'opacity-50 cursor-not-allowed',
  },
  // Input
  input: {
    base:
      'block w-full text-sm rounded-md focus:outline-none dark:text-gray-300 leading-5 shadow-sm',
    active:
      'focus:border-primary-400 dark:border-gray-600 focus:ring focus:ring-opacity-40 focus:ring-primary-300 dark:focus:border-gray-600 dark:focus:ring-gray dark:bg-gray-700',
    disabled: 'cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800',
    valid:
      'border-green-600 dark:bg-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:ring focus:ring-opacity-40 focus:ring-green-300 dark:focus:ring-green',
    invalid:
      'border-red-600 dark:bg-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring focus:ring-opacity-40 focus:ring-red-300 dark:focus:ring-red',
    radio:
      'text-primary-600 focus:border-primary-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-offset-0 focus:ring-primary-300 dark:focus:ring-gray',
    checkbox:
      'rounded text-primary-600 focus:border-primary-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-offset-0 focus:ring-primary-300 dark:focus:ring-gray',
  },
  // HelperText
  helperText: {
    base: 'text-xs',
    valid: 'text-green-600 dark:text-green-400',
    invalid: 'text-red-600 dark:text-red-400',
  },
  // Card
  card: {
    base: 'min-w-0 rounded-lg shadow-md overflow-hidden',
    default: 'border bg-white dark:bg-gray-800',
  },
  cardBody: {
    base: 'p-4',
  },
  // Button
  button: {
    base:
      'align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none',
    block: 'w-full',
    size: {
      larger: 'px-10 py-4 rounded-lg',
      large: 'px-5 py-3 rounded-lg',
      regular: 'px-4 py-2 rounded-md text-sm',
      small: 'px-3 py-1 rounded text-xs',
      icon: {
        larger: 'p-4 rounded-lg',
        large: 'p-3 rounded-lg',
        regular: 'p-2 rounded-md',
        small: 'p-2 rounded-md',
      },
      pagination: 'px-3 py-1 rounded text-xs',
    },
    // styles applied to the SVG icon
    icon: {
      larger: 'h-5 w-5',
      large: 'h-5 w-5',
      regular: 'h-5 w-5',
      small: 'h-3 w-3',
      pagination: '',
      left: 'mr-2 -ml-1',
      right: 'ml-2 -mr-1',
    },
    primary: {
      base: 'text-white bg-primary border border-transparent',
      active:
        'active:bg-primary hover:bg-primary-700 focus:ring focus:ring-opacity-40 focus:ring-primary-300',
      disabled: 'opacity-50 cursor-not-allowed',
    },
    outline: {
      base: 'text-primary border-primary border focus:outline-none',
      active:
        'active:bg-transparent hover:border-primary-700 focus:ring focus:ring-opacity-40 focus:ring-primary-300',
      disabled: 'opacity-50 cursor-not-allowed',
    },
    link: {
      base: 'text-primary focus:outline-none border border-transparent',
      active:
        'active:bg-transparent hover:bg-primary-100 focus:ring focus:ring-opacity-40 focus:ring-primary-300',
      disabled: 'opacity-50 cursor-not-allowed',
    },
    // this is the button that lives inside the DropdownItem
    dropdownItem: {
      base:
        'inline-flex items-center cursor-pointer w-full px-4 py-2 text-sm text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-900 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-200',
      disabled: 'opacity-50 cursor-not-allowed',
    },
  },
}
