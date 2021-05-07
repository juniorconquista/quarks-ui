import { DefaultStyleProps } from '../../theme/types'
import { TypographyProps } from 'styled-system'

export type H5StyledProps = DefaultStyleProps & TypographyProps

export interface H5Props extends H5StyledProps {
  /** Each styling variant has unique properties that are inherited through the type informed */
  styling?: 'base' | 'light'
}
