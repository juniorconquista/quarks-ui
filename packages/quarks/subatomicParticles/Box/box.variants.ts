import { variant } from 'styled-system'

export const styling = variant({
  prop: 'styling',
  variants: {
    base: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '&:focus': {
        outline: 'none'
      }
    },
    get row () {
      return {
        ...this.base,
        flexDirection: 'row'
      }
    },
    get column () {
      return {
        ...this.base,
        flexDirection: 'column'
      }
    },
    get grid () {
      return {
        ...this.base,
        display: 'grid',
        alignItems: 'start'
      }
    },
    overlay: {
      position: 'fixed',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      zIndex: 9999
    }
  }
})
