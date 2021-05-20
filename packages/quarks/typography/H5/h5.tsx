import styled from 'styled-components'
import { color, typography, space } from 'styled-system'
import { H5Props } from './h5.types'
import { styling } from './h5.variants'

export const H5: React.FC<H5Props> = styled.h5`
    ${styling}
    ${color}
    ${typography}
    ${space}
`

export default H5
