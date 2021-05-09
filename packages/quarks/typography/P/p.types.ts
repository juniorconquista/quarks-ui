import { CssProperties, DefaultStyleProps } from '../../theme/types'
import { TypographyProps } from 'styled-system'

export type PStyledProps = DefaultStyleProps & TypographyProps & CssProperties

export interface PProps extends PStyledProps {
  /** Each styling variant has unique properties that are inherited through the type informed */
  styling?: 'base'
}
