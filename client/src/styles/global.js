import { css } from '@emotion/react'
import 'minireset.css'
import 'modern-normalize'

import { Fonts } from './settings/fonts'
import { Base } from './elements/base'

export const GlobalStyles = css`
  ${Fonts}

  ${Base}
`
