import { create, themes } from '@storybook/theming'

const sharedOptions = {
  colorSecondary: '#E2136E',

  // Brand
  brandTitle: 'bKash UI Components',
  brandUrl: 'https://bkash.com',

  // Typography
  fontBase: `"Roboto", ${themes.light.fontBase}`,
}

const bkashTheme = {
  light: create({
    base: 'light',
    ...sharedOptions,
    brandImage: '/logo-light.svg',
    textColor: '#464646',
  }),
  dark: create({
    base: 'dark',
    brandImage: '/logo-dark.svg',
    ...sharedOptions,
  }),
}

export default bkashTheme
