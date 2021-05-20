import { CSSProp } from 'styled-components'
import { DefaultStyleProps, CssProperties } from 'quarks/theme/types'

export type ButtonStyledProps = DefaultStyleProps & CssProperties

export interface ButtonProps extends ButtonStyledProps {
  styling?: 'base' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'link'
  size?: 'small' | 'medium' | 'large'
  outline?: boolean
  css?: CSSProp
}
