import styled from 'styled-components'
import { color, typography, space } from 'styled-system'
import { LabelProps } from './label.types'
import { styling } from './label.variants'

export const Label: React.FC<LabelProps> = styled.label`
    ${styling}
    ${color}
    ${typography}
    ${space}
`

export default Label
