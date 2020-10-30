import React from 'react';
import renderer from 'react-test-renderer';
import ThemeTest from '../../../utils/utils.test';
import 'jest-styled-components';

import H3 from '../H3';
import theme from '../../../theme';

describe('H3', () => {
    test('basic snapshot', () => {
        const h3 = renderer
            .create(
                <ThemeTest>
                    <H3 styling="base" />
                </ThemeTest>,
            )
            .toJSON();
        expect(h3).toMatchSnapshot();
    });

    test('should inherit the styling properties of the base variant', () => {
        const h3 = renderer
            .create(
                <ThemeTest>
                    <H3 styling="base" />
                </ThemeTest>,
            )
            .toJSON();
        expect(h3).toHaveStyleRule('color', theme.colors.text.default);
        expect(h3).toHaveStyleRule('font-size', theme.fontSizes[5]);
    });

    test('should inherit the styling properties of the light variant', () => {
        const h3 = renderer
            .create(
                <ThemeTest>
                    <H3 styling="light" />
                </ThemeTest>,
            )
            .toJSON();
        expect(h3).toHaveStyleRule('color', theme.colors.text.default);
        expect(h3).toHaveStyleRule('font-size', theme.fontSizes[5]);
        expect(h3).toHaveStyleRule('font-weight', 'normal');
    });

    test('should apply custom styling properties', () => {
        const h3 = renderer
            .create(<H3 styling="base" mt="20px" p="3px" />)
            .toJSON();
        expect(h3).toHaveStyleRule('margin-top', '20px');
        expect(h3).toHaveStyleRule('padding', '3px');
    });
});
