import styled from 'styled-components'
import {
  border,
  color,
  fontSize,
  layout,
  position,
  space,
  system,
  typography
} from 'styled-system'
import { Theme } from 'quarks/theme/types'
import { ButtonProps } from './button.types'
import { sizes, styling } from './button.variants'

export const Button: React.FC<ButtonProps> = styled.button<ButtonProps>`
  ${layout}
  ${position}
  ${space}
  ${typography}
  ${styling}
  ${color}
  ${border}
  ${fontSize}
  ${sizes}
  ${system({ transition: true, animationFillMode: true })}
  ${({ styling, outline, theme }: ButtonProps & { theme: Theme }) =>
  outline &&
  `
  background-color: transparent;
  color: ${theme.colors[styling]?.default ?? ''};
  &:hover {
    color: #fff;
  }
  `}
`

export default Button
