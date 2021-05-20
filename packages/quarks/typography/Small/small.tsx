import styled from 'styled-components'
import { color, typography, space } from 'styled-system'
import { SmallProps } from './small.types'
import { styling } from './small.variants'

export const Small: React.FC<SmallProps> = styled.small`
    ${styling}
    ${color}
    ${typography}
    ${space}
`

export default Small
