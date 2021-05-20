import styled from 'styled-components'
import { color, typography, space } from 'styled-system'
import { SpanProps } from './span.types'
import { styling } from './span.variants'

export const Span: React.FC<SpanProps> = styled.span`
    ${styling}
    ${color}
    ${typography}
    ${space}
`

export default Span
