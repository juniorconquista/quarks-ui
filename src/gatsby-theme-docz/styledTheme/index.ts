import colors from './colors';
import { breakpoints, space, fontSizes, radii } from './sizes';

const theme = {
    fontSizes,
    space,
    breakpoints,
    radii,
    colors: colors(false),
};

theme.breakpoints.mobile = breakpoints[0];
theme.breakpoints.tablet = breakpoints[1];
theme.breakpoints.desktop = breakpoints[2];

export default theme;
