import { variant } from 'styled-system'

export const styling = variant({
  prop: 'styling',
  variants: {
    base: {
      color: 'text.default',
      fontSize: 'h3'
    },
    get light () {
      return {
        ...this.base,
        fontWeight: 'regular'
      }
    }
  }
})
