import styled from 'styled-components'
import { variant, color, typography, space } from 'styled-system'
import { H6Props } from './h6.types'

const variants = variant({
  prop: 'styling',
  variants: {
    base: {
      color: 'text.default',
      fontSize: 1
    },
    get light () {
      return {
        ...this.base,
        fontWeight: 'normal'
      }
    }
  }
})

export const H6: React.FC<H6Props> = styled.h6`
    ${variants}
    ${color}
    ${typography}
    ${space}
`

export default H6
