import styled from 'styled-components'
import { color, typography, space } from 'styled-system'
import { H1Props } from './h1.types'
import { styling } from './h1.variants'

export const H1: React.FC<H1Props> = styled.h1`
    ${styling}
    ${color}
    ${typography}
    ${space}
`

export default H1
