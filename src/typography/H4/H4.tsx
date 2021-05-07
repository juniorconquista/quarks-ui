import styled from 'styled-components'
import { variant, color, typography, space } from 'styled-system'
import { H4Props } from './h4.types'

const variants = variant({
  prop: 'styling',
  variants: {
    base: {
      color: 'text.default',
      fontSize: 4
    },
    get light () {
      return {
        ...this.base,
        fontWeight: 'normal'
      }
    }
  }
})

export const H4: React.FC<H4Props> = styled.h4`
    ${variants}
    ${color}
    ${typography}
    ${space}
`

export default H4
