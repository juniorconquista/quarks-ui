import styled from 'styled-components'
import { color, typography, space, layout, system } from 'styled-system'
import { H4Props } from './h4.types'
import { styling } from './h4.variants'

export const H4: React.FC<H4Props> = styled.h4`
    ${styling}
    ${layout}
    ${color}
    ${typography}
    ${space}
    ${system({ textTransform: true })}
`

export default H4
