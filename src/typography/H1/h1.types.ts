import { DefaultStyleProps } from '../../theme/types'
import { TypographyProps } from 'styled-system'

export type H1StyledProps = DefaultStyleProps & TypographyProps

export interface H1Props extends H1StyledProps {
  /** Each styling variant has unique properties that are inherited through the type informed */
  styling?: 'base' | 'light'
}
