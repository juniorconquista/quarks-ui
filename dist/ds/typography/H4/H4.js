'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.H4 = void 0;
const styled_components_1 = require('styled-components');
const styled_system_1 = require('styled-system');
const variants = styled_system_1.variant({
    prop: 'styling',
    variants: {
        base: {
            color: 'text',
            fontSize: 4,
        },
        get light() {
            return Object.assign(Object.assign({}, this.base), {
                fontWeight: 'normal',
            });
        },
    },
});
exports.H4 = styled_components_1.default.h4`
    ${variants}
    ${styled_system_1.color}
    ${styled_system_1.typography}
    ${styled_system_1.space}
`;
exports.default = exports.H4;
//# sourceMappingURL=H4.js.map
