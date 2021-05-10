import { DefaultStyleProps } from 'quarks/theme/types'
import { TypographyProps } from 'styled-system'

export type H6StyledProps = DefaultStyleProps & TypographyProps

export interface H6Props extends H6StyledProps {
  /** Each styling variant has unique properties that are inherited through the type informed */
  styling?: 'base' | 'light'
}
