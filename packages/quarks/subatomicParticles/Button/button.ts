import styled from 'styled-components'
import {
  color,
  typography,
  fontSize,
  position,
  space,
  flexbox,
  grid,
  layout,
  border,
  system
} from 'styled-system'
import { Theme } from 'quarks/theme/types'
import { ButtonProps } from './button.types'
import { sizes, styling } from './button.variants'

export const Button: React.FC<ButtonProps> = styled.button<ButtonProps>`
  ${styling}
  ${sizes}
  ${color}
  ${typography}
  ${fontSize}
  ${space}
  ${position}
  ${flexbox}
  ${grid}
  ${layout}
  ${border}
  ${system({ transition: true, animationFillMode: true })}
  ${({ styling, outline, theme }: ButtonProps & { theme: Theme }) =>
  outline &&
  `
      background-color: transparent;
      color: ${theme.colors[styling]?.default};
      &:hover {
          color: #fff;
      }
  `}
`

export default Button
