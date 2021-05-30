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
import { BoxProps } from './box.types'
import { styling } from './box.variants'

export const Box: React.FC<BoxProps> = styled.div<BoxProps>`
    ${styling}
    ${color}
    ${typography}
    ${fontSize}
    ${space}
    ${position}
    ${flexbox}
    ${grid}
    ${layout}
    ${border}
    ${system({ transition: true, animationFillMode: true, boxSizing: true })}
    ${(props) => props.css ?? ''}
`

export default Box
