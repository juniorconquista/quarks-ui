import { DefaultStyleProps } from '../../../packages/ds/theme/types'
import { TypographyProps } from 'styled-system'

export type SpanStyledProps = DefaultStyleProps & TypographyProps

export interface SpanProps extends SpanStyledProps {
  /** Each styling variant has unique properties that are inherited through the type informed */
  styling?: 'base'
}
