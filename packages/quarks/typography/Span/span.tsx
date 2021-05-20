import styled from 'styled-components'
import { variant, color, typography, space } from 'styled-system'
import { SpanProps } from './span.types'

const variants = variant({
  prop: 'styling',
  variants: {
    base: {
      color: 'text.default',
      fontSize: 4
    }
  }
})

export const Span: React.FC<SpanProps> = styled.span`
    ${variants}
    ${color}
    ${typography}
    ${space}
`

export default Span
