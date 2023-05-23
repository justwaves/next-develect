import 'twin.macro'
import { CSSInterpolation } from '@emotion/serialize'

import { css as cssImport } from '@emotion/react'

declare module 'twin.macro' {
  const css: typeof cssImport
}

declare module 'react' {
  interface DOMAttributes {
    tw?: string
    css?: CSSInterpolation
  }
}
