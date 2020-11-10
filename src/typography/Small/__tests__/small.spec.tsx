import React from 'react';
import renderer from 'react-test-renderer';
import ThemeTest from '../../../utils/ThemeProviderTest';
import 'jest-styled-components';

import Small from '../Small';
import theme from '../../../theme';

describe('Small', () => {
    test('basic snapshot', () => {
        const small = renderer
            .create(
                <ThemeTest>
                    <Small styling="base" />
                </ThemeTest>,
            )
            .toJSON();
        expect(small).toMatchSnapshot();
    });

    test('should inherit the styling properties of the base variant', () => {
        const small = renderer
            .create(
                <ThemeTest>
                    <Small styling="base" />
                </ThemeTest>,
            )
            .toJSON();
        expect(small).toHaveStyleRule('color', theme.colors.text.default);
        expect(small).toHaveStyleRule('font-size', theme.fontSizes[2]);
    });

    test('should apply custom styling properties', () => {
        const small = renderer
            .create(<Small styling="base" mt="20px" p="3px" />)
            .toJSON();
        expect(small).toHaveStyleRule('margin-top', '20px');
        expect(small).toHaveStyleRule('padding', '3px');
    });
});
