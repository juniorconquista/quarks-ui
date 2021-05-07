import styled from 'styled-components'
import { variant, color, typography, space } from 'styled-system'
import { H3Props } from './h3.types'

const variants = variant({
  prop: 'styling',
  variants: {
    base: {
      color: 'text.default',
      fontSize: 5
    },
    get light () {
      return {
        ...this.base,
        fontWeight: 'normal'
      }
    }
  }
})

export const H3: React.FC<H3Props> = styled.h3`
    ${variants}
    ${color}
    ${typography}
    ${space}
`

export default H3
