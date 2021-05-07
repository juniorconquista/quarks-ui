import styled from 'styled-components'
import { variant, color, typography, space } from 'styled-system'
import { PProps } from './p.types'

const variants = variant({
  prop: 'styling',
  variants: {
    base: {
      color: 'text.default',
      fontSize: 4
    }
  }
})

export const P: React.FC<PProps> = styled.p`
    ${variants}
    ${color}
    ${typography}
    ${space}
`

export default P
