import { CSSProp } from 'styled-components'
import { DefaultStyleProps, CssProperties } from 'quarks/theme/types'

export type BoxStyledProps = DefaultStyleProps & CssProperties

export interface BoxProps extends BoxStyledProps {
  /** Each styling variant has unique properties that are inherited through the type informed */
  styling?: 'base' | 'row' | 'column' | 'grid' | 'overlay'
  css?: CSSProp
}
