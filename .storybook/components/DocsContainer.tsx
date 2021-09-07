import { FunctionComponent } from 'react'
import {
  DocsContainer as BaseContainer,
  DocsContainerProps,
} from '@storybook/addon-docs'
import { useDarkMode } from 'storybook-dark-mode'
import bkashTheme from '../bkashTheme'

const DocsContainer: FunctionComponent<DocsContainerProps> = ({
  children,
  context,
}) => {
  const dark = useDarkMode()

  return (
    <BaseContainer
      context={{
        ...context,
        parameters: {
          ...context.parameters,
          docs: {
            ...context.parameters.docs,
            theme: dark ? bkashTheme.dark : bkashTheme.light,
          },
        },
      }}
    >
      {children}
    </BaseContainer>
  )
}

export default DocsContainer
