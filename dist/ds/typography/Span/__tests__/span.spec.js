'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = require('react');
const react_test_renderer_1 = require('react-test-renderer');
const styled_components_1 = require('styled-components');
require('jest-styled-components');
const SPan_1 = require('../SPan');
const theme_1 = require('../../../theme');
describe('SPan', () => {
    test('basic snapshot', () => {
        const tree = react_test_renderer_1.default
            .create(
                react_1.default.createElement(
                    styled_components_1.ThemeProvider,
                    { theme: theme_1.default },
                    react_1.default.createElement(SPan_1.default, {
                        styling: 'base',
                    }),
                ),
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    test('should inherit the styling properties of the base variant', () => {
        const tree = react_test_renderer_1.default
            .create(
                react_1.default.createElement(
                    styled_components_1.ThemeProvider,
                    { theme: theme_1.default },
                    react_1.default.createElement(SPan_1.default, {
                        styling: 'base',
                    }),
                ),
            )
            .toJSON();
        expect(tree).toHaveStyleRule('color', theme_1.default.colors.text);
        expect(tree).toHaveStyleRule('font-size', theme_1.default.fontSizes[4]);
    });
    test('should apply custom styling properties', () => {
        const tree = react_test_renderer_1.default
            .create(
                react_1.default.createElement(SPan_1.default, {
                    styling: 'base',
                    mt: '20px',
                    p: '3px',
                }),
            )
            .toJSON();
        expect(tree).toHaveStyleRule('margin-top', '20px');
        expect(tree).toHaveStyleRule('padding', '3px');
    });
});
//# sourceMappingURL=span.spec.js.map
