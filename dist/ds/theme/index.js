'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const colors_1 = require('./colors');
const sizes_1 = require('./sizes');
const theme = {
    fontSizes: sizes_1.fontSizes,
    space: sizes_1.space,
    breakpoints: sizes_1.breakpoints,
    radii: sizes_1.radii,
    colors: colors_1.default,
};
//@ts-ignore
theme.breakpoints.mobile = sizes_1.breakpoints[0];
//@ts-ignore
theme.breakpoints.tablet = sizes_1.breakpoints[1];
//@ts-ignore
theme.breakpoints.desktop = sizes_1.breakpoints[2];
exports.default = theme;
//# sourceMappingURL=index.js.map
