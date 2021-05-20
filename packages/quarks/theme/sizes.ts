export const breakpoints = ['0rem', '37.5rem', '62rem']

const spaceBase = 1 // 1rem
export const space = {
  none: '0',
  xs: `${spaceBase * 0.25}rem`,
  sm: `${spaceBase * 0.5}rem`,
  md: `${spaceBase}rem`,
  lg: `${spaceBase * 1.5}rem`,
  xl: `${spaceBase * 3}rem`
}

const fontSizeBase = 1 // 1rem
export const fontSizes = {
  base: `${fontSizeBase}rem`,
  sm: `${fontSizeBase * 0.875}rem`,
  lg: `${fontSizeBase * 1.5}rem`,
  h1: `${fontSizeBase * 2.5}rem`,
  h2: `${fontSizeBase * 2}rem`,
  h3: `${fontSizeBase * 1.75}rem`,
  h4: `${fontSizeBase * 1.5}rem`,
  h5: `${fontSizeBase * 1.25}rem`,
  h6: `${fontSizeBase}rem`
}

export const fontWeights = {
  thin: 100,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  black: 900
}

export const radii = {
  none: '0',
  sm: '0.2rem',
  md: '0.25rem',
  lg: '0.3rem'
}
