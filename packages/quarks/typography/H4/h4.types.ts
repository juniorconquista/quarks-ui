import { TypographyProps } from 'styled-system'
import { CssProperties, DefaultStyleProps } from 'quarks/theme/types'

export type H4StyledProps = DefaultStyleProps & TypographyProps & CssProperties

export interface H4Props extends H4StyledProps {
  /** Each styling variant has unique properties that are inherited through the type informed */
  styling?: 'base' | 'light'
}
