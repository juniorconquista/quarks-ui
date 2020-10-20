'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Box = void 0;
const styled_components_1 = require('styled-components');
const styled_system_1 = require('styled-system');
const variants = styled_system_1.variant({
    prop: 'styling',
    variants: {
        base: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            '&:focus': {
                outline: 'none',
            },
        },
        get row() {
            return Object.assign(Object.assign({}, this.base), {
                flexDirection: 'row',
            });
        },
        get column() {
            return Object.assign(Object.assign({}, this.base), {
                flexDirection: 'column',
            });
        },
        get grid() {
            return Object.assign(Object.assign({}, this.base), {
                display: 'grid',
                alignItems: 'start',
            });
        },
        overlay: {
            position: 'fixed',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: 9999,
        },
    },
});
exports.Box = styled_components_1.default.div`
    ${variants}
    ${styled_system_1.color}
    ${styled_system_1.typography}
    ${styled_system_1.fontSize}
    ${styled_system_1.space}
    ${styled_system_1.position}
    ${styled_system_1.flexbox}
    ${styled_system_1.grid}
    ${styled_system_1.layout}
    ${styled_system_1.border}
    ${styled_system_1.system({ transition: true, animationFillMode: true })}
    ${(props) => {
        var _a;
        return (_a = props.css) !== null && _a !== void 0 ? _a : '';
    }}
`;
exports.default = exports.Box;
//# sourceMappingURL=Box.js.map
