import styled from 'styled-components'
import { color, typography, space } from 'styled-system'
import { H3Props } from './h3.types'
import { styling } from './h3.variants'

export const H3: React.FC<H3Props> = styled.h3`
    ${styling}
    ${color}
    ${typography}
    ${space}
`

export default H3
