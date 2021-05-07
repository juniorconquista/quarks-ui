import { DefaultStyleProps } from '../../theme/types'
import { TypographyProps } from 'styled-system'

export type H4StyledProps = DefaultStyleProps & TypographyProps

export interface H4Props extends H4StyledProps {
  /** Each styling variant has unique properties that are inherited through the type informed */
  styling?: 'base' | 'light'
}
