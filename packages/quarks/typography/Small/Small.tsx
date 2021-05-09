import styled from 'styled-components'
import { variant, color, typography, space } from 'styled-system'
import { SmallProps } from './small.types'

const variants = variant({
  prop: 'styling',
  variants: {
    base: {
      color: 'text.default',
      fontSize: 2
    }
  }
})

export const Small: React.FC<SmallProps> = styled.small`
    ${variants}
    ${color}
    ${typography}
    ${space}
`

export default Small
