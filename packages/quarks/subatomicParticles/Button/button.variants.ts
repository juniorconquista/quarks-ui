import { variant } from 'styled-system'
import { Theme } from 'quarks/theme/types'

export const styling = variant({
  prop: 'styling',
  variants: {
    base: {
      background: 'none',
      border: '1px solid transparent',
      borderRadius: 'md',
      display: 'inline-block',
      fontSize: 'base', // Assumes the browser default, typically `16px`'
      fontWeight: 'regular',
      lineHeight: '1.5',
      padding: '.375rem .75rem',
      textAlign: 'center',
      transition:
          'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out',
      userSelect: 'none',
      verticalAlign: 'middle',
      whiteSpace: 'nowrap',
      '&:hover, &:focus': {
        textDecoration: 'none'
      },
      '&:focus, &.focus': {
        outline: 0
      },
      '&.disabled, &:disabled': {
        boxShadow: 'none',
        opacity: 0.65
      },
      '&:not(:disabled):not(.disabled)': {
        cursor: 'pointer'
      }
    },

    get primary () {
      return {
        ...this.base,
        backgroundColor: 'primary.default',
        borderColor: 'primary.default',
        color: 'primary.contrast',
        '&:hover, &.hover': {
          backgroundColor: 'primary.hover'
        },
        '&:focus, &.focus': {
          boxShadow: (theme: Theme) =>
              `0 0 0 .2rem ${theme.colors.primary.default}75`
        }
      }
    },
    get secondary () {
      return {
        ...this.base,
        backgroundColor: 'secondary.default',
        borderColor: 'secondary.default',
        color: 'secondary.contrast',
        '&:hover, &.hover': {
          backgroundColor: 'secondary.hover'
        },
        '&:focus, &.focus': {
          boxShadow: (theme: Theme) =>
              `0 0 0 .2rem ${theme.colors.secondary.default}75`
        }
      }
    },
    get success () {
      return {
        ...this.base,
        backgroundColor: 'success.default',
        borderColor: 'success.default',
        color: 'success.contrast',
        '&:hover, &.hover': {
          backgroundColor: 'success.hover'
        },
        '&:focus, &.focus': {
          boxShadow: (theme: Theme) =>
              `0 0 0 .2rem ${theme.colors.success.default}75`
        }
      }
    },
    get danger () {
      return {
        ...this.base,
        backgroundColor: 'danger.default',
        borderColor: 'danger.default',
        color: 'danger.contrast',
        '&:hover, &.hover': {
          backgroundColor: 'danger.hover'
        },
        '&:focus, &.focus': {
          boxShadow: (theme: Theme) =>
              `0 0 0 .2rem ${theme.colors.danger.default}75`
        }
      }
    },
    get warning () {
      return {
        ...this.base,
        backgroundColor: 'warning.default',
        borderColor: 'warning.default',
        color: 'warning.contrast',
        '&:hover, &.hover': {
          backgroundColor: 'warning.hover'
        },
        '&:focus, &.focus': {
          boxShadow: (theme: Theme) =>
              `0 0 0 .2rem ${theme.colors.warning.default}75`
        }
      }
    },
    get info () {
      return {
        ...this.base,
        backgroundColor: 'info.default',
        borderColor: 'info.default',
        color: 'info.contrast',
        '&:hover, &.hover': {
          backgroundColor: 'info.hover'
        },
        '&:focus, &.focus': {
          boxShadow: (props: Theme) =>
              `0 0 0 .2rem ${props.colors.info.default}75`
        }
      }
    },
    get link () {
      return {
        ...this.base,
        color: 'primary.default',
        textDecoration: 'underline',
        '&:hover, &.hover': {
          color: 'primary.hover',
          textDecoration: 'underline'
        }
      }
    }
  }
})

export const sizes = variant({
  prop: 'size',
  variants: {
    small: {
      padding: '0.25rem 0.5rem',
      fontSize: 'sm',
      lineHeight: 1.5,
      borderRadius: 'sm'
    },
    large: {
      padding: '0.5rem 1rem',
      fontSize: 'lg',
      lineHeight: 1.5,
      borderRadius: 'lg'
    }
  }
})
