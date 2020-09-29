'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.H1 = void 0;
const styled_components_1 = require('styled-components');
const styled_system_1 = require('styled-system');
const variants = styled_system_1.variant({
    prop: 'styling',
    variants: {
        base: {
            color: 'text',
            fontSize: 8,
        },
        get light() {
            return Object.assign(Object.assign({}, this.base), {
                fontWeight: 'normal',
            });
        },
    },
});
exports.H1 = styled_components_1.default.h1`
    ${variants}
    ${styled_system_1.color}
    ${styled_system_1.typography}
    ${styled_system_1.space}
`;
exports.default = exports.H1;
//# sourceMappingURL=H1.js.map
