
// teste
export default (dark = false): any => ({
  dark,
  get primary () {
    return {
      default: this.dark ? '#375a7f' : '#007bff',
      contrast: this.dark ? '#2f75bf' : '#6aa5e4',
      dark: '#375a7f',
      light: '#007bff'
    }
  },
  get secondary () {
    return {
      default: this.dark ? '#444444' : '#6c757d',
      dark: '#444444',
      light: '#6c757d'
    }
  },
  get success () {
    return {
      default: this.dark ? '#00bc8c' : '#28a745',
      dark: '#00bc8c',
      light: '#28a745'
    }
  },
  get danger () {
    return {
      default: this.dark ? '#e74c3c' : '#dc3545',
      dark: '#e74c3c',
      light: '#dc3545'
    }
  },
  get warning () {
    return {
      default: this.dark ? '#f39c12' : '#ffc107',
      dark: '#f39c12',
      light: '#ffc107'
    }
  },
  get info () {
    return {
      default: this.dark ? '#3498db' : '#17a2b8',
      dark: '#3498db',
      light: '#17a2b8'
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
