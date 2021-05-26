
// teste
export default (dark = false): any => ({
  dark,
  get primary () {
    return {
      default: this.dark ? '#375a7f' : '#007bff',
      dark: '#375a7f',
      light: '#007bff',
      hover: this.dark ? '#2f4d6c' : '#0069d9',
      contrast: '#f8f9fa'
    }
  },
  get secondary () {
    return {
      default: this.dark ? '#444444' : '#6c757d',
      dark: '#444444',
      light: '#6c757d',
      hover: this.dark ? '#3a3a3a' : '#5a6268',
      contrast: '#f8f9fa'
    }
  },
  get success () {
    return {
      default: this.dark ? '#00bc8c' : '#28a745',
      dark: '#00bc8c',
      light: '#28a745',
      hover: this.dark ? '#00a077' : '#218838',
      contrast: '#f8f9fa'
    }
  },
  get danger () {
    return {
      default: this.dark ? '#e74c3c' : '#dc3545',
      dark: '#e74c3c',
      light: '#dc3545',
      hover: this.dark ? '#c44133' : '#c82333',
      contrast: '#f8f9fa'
    }
  },
  get warning () {
    return {
      default: this.dark ? '#f39c12' : '#ffc107',
      dark: '#f39c12',
      light: '#ffc107',
      hover: this.dark ? '#cf850f' : '#e0a800',
      contrast: '#343a40'
    }
  },
  get info () {
    return {
      default: this.dark ? '#3498db' : '#17a2b8',
      dark: '#3498db',
      light: '#17a2b8',
      hover: this.dark ? '#2c81ba' : '#138496',
      contrast: '#f8f9fa'
    }
  },
  get background () {
    return {
      default: this.dark ? '#f8f9fa' : '#343a40',
      dark: '#f8f9fa',
      light: '#343a40'
    }
  },
  get text () {
    return {
      default: this.dark ? '#f8f9fa' : '#343a40',
      dark: '#f8f9fa',
      light: '#343a40'
    }
  }
})
