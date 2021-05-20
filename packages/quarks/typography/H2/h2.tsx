import styled from 'styled-components'
import { color, typography, space } from 'styled-system'
import { H2Props } from './h2.types'
import { styling } from './h2.variants'

export const H2: React.FC<H2Props> = styled.h2`
    ${styling}
    ${color}
    ${typography}
    ${space}
`

export default H2
