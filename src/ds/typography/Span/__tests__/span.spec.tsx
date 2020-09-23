import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

import SPan from '../SPan';
import theme from '../../../theme';

describe('SPan', () => {
    test('basic snapshot', () => {
        const tree = renderer
            .create(
                <ThemeProvider theme={theme}>
                    <SPan styling="base" />
                </ThemeProvider>,
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('should inherit the styling properties of the base variant', () => {
        const tree = renderer
            .create(
                <ThemeProvider theme={theme}>
                    <SPan styling="base" />
                </ThemeProvider>,
            )
            .toJSON();
        expect(tree).toHaveStyleRule('color', theme.colors.text);
        expect(tree).toHaveStyleRule('font-size', theme.fontSizes[4]);
    });

    test('should apply custom styling properties', () => {
        const tree = renderer
            .create(<SPan styling="base" mt="20px" p="3px" />)
            .toJSON();
        expect(tree).toHaveStyleRule('margin-top', '20px');
        expect(tree).toHaveStyleRule('padding', '3px');
    });
});
