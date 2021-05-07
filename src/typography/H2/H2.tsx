import styled from 'styled-components'
import { variant, color, typography, space } from 'styled-system'
import { H2Props } from './h2.types'

const variants = variant({
  prop: 'styling',
  variants: {
    base: {
      color: 'text.default',
      fontSize: 6
    },
    get light () {
      return {
        ...this.base,
        fontWeight: 'normal'
      }
    }
  }
})

export const H2: React.FC<H2Props> = styled.h2`
    ${variants}
    ${color}
    ${typography}
    ${space}
`

export default H2
