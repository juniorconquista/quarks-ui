import colors from './colors';
import { breakpoints, space, fontSizes, radii } from './sizes';

const theme = {
    fontSizes,
    space,
    breakpoints,
    radii,
    colors: colors(),
};

//@ts-ignore
theme.breakpoints.mobile = breakpoints[0];
//@ts-ignore
theme.breakpoints.tablet = breakpoints[1];
//@ts-ignore
theme.breakpoints.desktop = breakpoints[2];

export default theme;
