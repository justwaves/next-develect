import React from 'react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { GlobalStyles } from 'twin.macro'
import '../src/styles/globals.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
]
