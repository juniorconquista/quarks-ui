'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Label = void 0;
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
exports.Label = styled_components_1.default.label`
    ${variants}
    ${styled_system_1.color}
    ${styled_system_1.typography}
    ${styled_system_1.space}
`;
exports.default = exports.Label;
//# sourceMappingURL=Label.js.map
