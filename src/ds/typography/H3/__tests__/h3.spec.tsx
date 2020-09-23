import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

import H3 from '../H3';
import theme from '../../../theme';

describe('H3', () => {
    test('basic snapshot', () => {
        const tree = renderer
            .create(
                <ThemeProvider theme={theme}>
                    <H3 styling="base" />
                </ThemeProvider>,
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('should inherit the styling properties of the base variant', () => {
        const tree = renderer
            .create(
                <ThemeProvider theme={theme}>
                    <H3 styling="base" />
                </ThemeProvider>,
            )
            .toJSON();
        expect(tree).toHaveStyleRule('color', theme.colors.text);
        expect(tree).toHaveStyleRule('font-size', theme.fontSizes[5]);
    });

    test('should inherit the styling properties of the light variant', () => {
        const tree = renderer
            .create(
                <ThemeProvider theme={theme}>
                    <H3 styling="light" />
                </ThemeProvider>,
            )
            .toJSON();
        expect(tree).toHaveStyleRule('color', theme.colors.text);
        expect(tree).toHaveStyleRule('font-size', theme.fontSizes[5]);
        expect(tree).toHaveStyleRule('font-weight', 'normal');
    });

    test('should apply custom styling properties', () => {
        const tree = renderer
            .create(<H3 styling="base" mt="20px" p="3px" />)
            .toJSON();
        expect(tree).toHaveStyleRule('margin-top', '20px');
        expect(tree).toHaveStyleRule('padding', '3px');
    });
});
