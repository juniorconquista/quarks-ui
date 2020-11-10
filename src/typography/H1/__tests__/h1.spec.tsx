import React from 'react';
import renderer from 'react-test-renderer';
import ThemeTest from '../../../utils/ThemeProviderTest';
import 'jest-styled-components';

import H1 from '../H1';
import theme from '../../../theme';

describe('H1', () => {
    test('basic snapshot', () => {
        const h1 = renderer
            .create(
                <ThemeTest>
                    <H1 styling="base" />
                </ThemeTest>,
            )
            .toJSON();
        expect(h1).toMatchSnapshot();
    });

    test('should inherit the styling properties of the base variant', () => {
        const h1 = renderer
            .create(
                <ThemeTest>
                    <H1 styling="base" />
                </ThemeTest>,
            )
            .toJSON();
        expect(h1).toHaveStyleRule('color', theme.colors.text.default);
        expect(h1).toHaveStyleRule('font-size', theme.fontSizes[8]);
    });

    test('should inherit the styling properties of the light variant', () => {
        const h1 = renderer
            .create(
                <ThemeTest>
                    <H1 styling="light" />
                </ThemeTest>,
            )
            .toJSON();
        expect(h1).toHaveStyleRule('color', theme.colors.text.default);
        expect(h1).toHaveStyleRule('font-size', theme.fontSizes[8]);
        expect(h1).toHaveStyleRule('font-weight', 'normal');
    });

    test('should apply custom styling properties', () => {
        const h1 = renderer
            .create(<H1 styling="base" mt="20px" p="3px" />)
            .toJSON();
        expect(h1).toHaveStyleRule('margin-top', '20px');
        expect(h1).toHaveStyleRule('padding', '3px');
    });
});
