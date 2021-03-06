import { variant } from 'styled-system'

export const styling = variant({
  prop: 'styling',
  variants: {
    base: {
      color: 'text.default',
      fontSize: 'h5'
    },
    get light () {
      return {
        ...this.base,
        fontWeight: 'regular'
      }
    }
  }
})
