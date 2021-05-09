import styled from 'styled-components'
import { variant, color, typography, space } from 'styled-system'
import { H1Props } from './h1.types'

const variants = variant({
  prop: 'styling',
  variants: {
    base: {
      color: 'text.default',
      fontSize: 8
    },
    get light () {
      return {
        ...this.base,
        fontWeight: 'normal'
      }
    }
  }
})

export const H1: React.FC<H1Props> = styled.h1`
    ${variants}
    ${color}
    ${typography}
    ${space}
`

export default H1
