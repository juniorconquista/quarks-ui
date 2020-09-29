'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Small = void 0;
const styled_components_1 = require('styled-components');
const styled_system_1 = require('styled-system');
const variants = styled_system_1.variant({
    prop: 'styling',
    variants: {
        base: {
            color: 'text',
            fontSize: 2,
        },
    },
});
exports.Small = styled_components_1.default.small`
    ${variants}
    ${styled_system_1.color}
    ${styled_system_1.typography}
    ${styled_system_1.space}
`;
exports.default = exports.Small;
//# sourceMappingURL=Small.js.map
