import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

import H6 from '../H6';
import theme from '../../../theme';

describe('H6', () => {
    test('basic snapshot', () => {
        const tree = renderer
            .create(
                <ThemeProvider theme={theme}>
                    <H6 styling="base" />
                </ThemeProvider>,
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('should inherit the styling properties of the base variant', () => {
        const tree = renderer
            .create(
                <ThemeProvider theme={theme}>
                    <H6 styling="base" />
                </ThemeProvider>,
            )
            .toJSON();
        expect(tree).toHaveStyleRule('color', theme.colors.text);
        expect(tree).toHaveStyleRule('font-size', theme.fontSizes[1]);
    });

    test('should inherit the styling properties of the light variant', () => {
        const tree = renderer
            .create(
                <ThemeProvider theme={theme}>
                    <H6 styling="light" />
                </ThemeProvider>,
            )
            .toJSON();
        expect(tree).toHaveStyleRule('color', theme.colors.text);
        expect(tree).toHaveStyleRule('font-size', theme.fontSizes[1]);
        expect(tree).toHaveStyleRule('font-weight', 'normal');
    });

    test('should apply custom styling properties', () => {
        const tree = renderer
            .create(<H6 styling="base" mt="20px" p="3px" />)
            .toJSON();
        expect(tree).toHaveStyleRule('margin-top', '20px');
        expect(tree).toHaveStyleRule('padding', '3px');
    });
});
