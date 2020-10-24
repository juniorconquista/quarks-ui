'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.P = void 0;
const styled_components_1 = require('styled-components');
const styled_system_1 = require('styled-system');
const variants = styled_system_1.variant({
    prop: 'styling',
    variants: {
        base: {
            color: 'text.default',
            fontSize: 4,
        },
    },
});
exports.P = styled_components_1.default.p`
    ${variants}
    ${styled_system_1.color}
    ${styled_system_1.typography}
    ${styled_system_1.space}
`;
exports.default = exports.P;
//# sourceMappingURL=P.js.map
