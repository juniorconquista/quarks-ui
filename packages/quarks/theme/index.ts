import colors from './colors'
import { breakpoints, space, fontSizes, radii } from './sizes'

const theme = {
  fontSizes,
  space,
  breakpoints,
  radii,
  colors: colors()
}

// @ts-expect-error
theme.breakpoints.mobile = breakpoints[0]
// @ts-expect-error
theme.breakpoints.tablet = breakpoints[1]
// @ts-expect-error
theme.breakpoints.desktop = breakpoints[2]

export default theme
