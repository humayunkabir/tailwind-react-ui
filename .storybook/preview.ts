import DocsContainer from './components/DocsContainer'
import bkashTheme from './bkashTheme'
import './tailwind.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    container: DocsContainer,
  },
  darkMode: {
    dark: bkashTheme.dark,
    light: bkashTheme.light,
    darkClass: 'dark',
    lightClass: 'light',
    stylePreview: true,
    // TODO: remove this once we've proper dark mode support in components
    current: 'light',
  },
  layout: 'centered',
}
