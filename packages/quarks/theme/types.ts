import {
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  PositionProps,
  BorderProps,
  GridProps,
  FontSizeProps
} from 'styled-system'

export type CssProperties = {
  transition?: string
  filter?: string
  textTransform?:
  | 'none'
  | 'capitalize'
  | 'uppercase'
  | 'lowercase'
  | 'initial'
  | 'inherit'
  animationFillMode?:
  | 'none'
  | 'forwards'
  | 'backwards'
  | 'both'
  | 'initial'
  | 'inherit'
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  whiteSpace?:
  | 'none'
  | 'nowrap'
  | 'pre'
  | 'pre-line'
  | 'pre-wrap'
  | 'initial'
  | 'inherit'
  '-webkit-box-shadow'?: string
  boxSizing?: string
}

export type DefaultStyleProps = BorderProps &
  ColorProps &
  FlexboxProps &
  FontSizeProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  GridProps & {
    // for some reason this isn't included; this is for replacing the 'base' component
    // as?: React.ComponentType;
  }
