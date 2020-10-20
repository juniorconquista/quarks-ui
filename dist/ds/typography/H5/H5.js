'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.H5 = void 0;
const styled_components_1 = require('styled-components');
const styled_system_1 = require('styled-system');
const variants = styled_system_1.variant({
    prop: 'styling',
    variants: {
        base: {
            color: 'text',
            fontSize: 2,
        },
        get light() {
            return Object.assign(Object.assign({}, this.base), {
                fontWeight: 'normal',
            });
        },
    },
});
exports.H5 = styled_components_1.default.h5`
    ${variants}
    ${styled_system_1.color}
    ${styled_system_1.typography}
    ${styled_system_1.space}
`;
exports.default = exports.H5;
//# sourceMappingURL=H5.js.map
