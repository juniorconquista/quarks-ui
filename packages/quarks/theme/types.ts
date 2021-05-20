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

type Color = {
  default: string
  dark: string
  ligth: string
}

type FontSizes = {
  base: string
  sm: string
  lg: string
  h1: string
  h2: string
  h3: string
  h4: string
  h5: string
  h6: string
}

type FontWeights = {
  thin: number
  light: number
  regular: number
  medium: number
  semiBold: number
  bold: number
  black: number
}

type Spaces = {
  none: string
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
}

type Radii = {
  none: string
  sm: string
  md: string
  lg: string
}

export interface Theme {
  colors: {
    [key: string]: Color
  }
  fontSizes: FontSizes
  fontWeights: FontWeights
  spaces: Spaces
  radii: Radii
}
