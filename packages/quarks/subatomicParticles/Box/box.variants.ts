import { variant } from 'styled-system'

export const styling = variant({
  prop: 'styling',
  variants: {
    base: {
      display: 'block'
    },
    row: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    column: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    grid: {
      alignItems: 'start',
      display: 'grid',
      gap: '10px'
    }
  }
})
