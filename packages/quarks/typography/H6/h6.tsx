import styled from 'styled-components'
import { color, typography, space } from 'styled-system'
import { H6Props } from './h6.types'
import { styling } from './h6.variants'

export const H6: React.FC<H6Props> = styled.h6`
    ${styling}
    ${color}
    ${typography}
    ${space}
`

export default H6
