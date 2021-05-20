import styled from 'styled-components'
import { color, typography, space, layout, system } from 'styled-system'
import { PProps } from './p.types'
import { styling } from './p.variants'

export const P: React.FC<PProps> = styled.p`
    ${styling}
    ${layout}
    ${color}
    ${typography}
    ${space}
    ${system({ textTransform: true })}
`

export default P
