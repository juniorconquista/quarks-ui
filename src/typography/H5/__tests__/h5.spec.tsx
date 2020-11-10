import React from 'react';
import renderer from 'react-test-renderer';
import ThemeTest from '../../../utils/ThemeProviderTest';
import 'jest-styled-components';

import H5 from '../H5';
import theme from '../../../theme';

describe('H5', () => {
    test('basic snapshot', () => {
        const h5 = renderer
            .create(
                <ThemeTest>
                    <H5 styling="base" />
                </ThemeTest>,
            )
            .toJSON();
        expect(h5).toMatchSnapshot();
    });

    test('should inherit the styling properties of the base variant', () => {
        const h5 = renderer
            .create(
                <ThemeTest>
                    <H5 styling="base" />
                </ThemeTest>,
            )
            .toJSON();
        expect(h5).toHaveStyleRule('color', theme.colors.text.default);
        expect(h5).toHaveStyleRule('font-size', theme.fontSizes[2]);
    });

    test('should inherit the styling properties of the light variant', () => {
        const h5 = renderer
            .create(
                <ThemeTest>
                    <H5 styling="light" />
                </ThemeTest>,
            )
            .toJSON();
        expect(h5).toHaveStyleRule('color', theme.colors.text.default);
        expect(h5).toHaveStyleRule('font-size', theme.fontSizes[2]);
        expect(h5).toHaveStyleRule('font-weight', 'normal');
    });

    test('should apply custom styling properties', () => {
        const h5 = renderer
            .create(<H5 styling="base" mt="20px" p="3px" />)
            .toJSON();
        expect(h5).toHaveStyleRule('margin-top', '20px');
        expect(h5).toHaveStyleRule('padding', '3px');
    });
});
