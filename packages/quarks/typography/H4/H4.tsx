import styled from 'styled-components'
import { variant, color, typography, space, layout, system } from 'styled-system'
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
    ${layout}
    ${color}
    ${typography}
    ${space}
    ${system({ textTransform: true })}
`

export default H4
