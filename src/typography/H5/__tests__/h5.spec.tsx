import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

import H5 from '../H5';
import theme from '../../../theme';

describe('H5', () => {
    test('basic snapshot', () => {
        const tree = renderer
            .create(
                <ThemeProvider theme={theme}>
                    <H5 styling="base" />
                </ThemeProvider>,
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('should inherit the styling properties of the base variant', () => {
        const tree = renderer
            .create(
                <ThemeProvider theme={theme}>
                    <H5 styling="base" />
                </ThemeProvider>,
            )
            .toJSON();
        expect(tree).toHaveStyleRule('color', theme.colors.text.default);
        expect(tree).toHaveStyleRule('font-size', theme.fontSizes[2]);
    });

    test('should inherit the styling properties of the light variant', () => {
        const tree = renderer
            .create(
                <ThemeProvider theme={theme}>
                    <H5 styling="light" />
                </ThemeProvider>,
            )
            .toJSON();
        expect(tree).toHaveStyleRule('color', theme.colors.text.default);
        expect(tree).toHaveStyleRule('font-size', theme.fontSizes[2]);
        expect(tree).toHaveStyleRule('font-weight', 'normal');
    });

    test('should apply custom styling properties', () => {
        const tree = renderer
            .create(<H5 styling="base" mt="20px" p="3px" />)
            .toJSON();
        expect(tree).toHaveStyleRule('margin-top', '20px');
        expect(tree).toHaveStyleRule('padding', '3px');
    });
});
