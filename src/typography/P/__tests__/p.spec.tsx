import React from 'react';
import renderer from 'react-test-renderer';
import ThemeTest from '../../../utils/ThemeProviderTest';
import 'jest-styled-components';

import P from '../P';
import theme from '../../../theme';

describe('P', () => {
    test('basic snapshot', () => {
        const p = renderer
            .create(
                <ThemeTest>
                    <P styling="base" />
                </ThemeTest>,
            )
            .toJSON();
        expect(p).toMatchSnapshot();
    });

    test('should inherit the styling properties of the base variant', () => {
        const p = renderer
            .create(
                <ThemeTest>
                    <P styling="base" />
                </ThemeTest>,
            )
            .toJSON();
        expect(p).toHaveStyleRule('color', theme.colors.text.default);
        expect(p).toHaveStyleRule('font-size', theme.fontSizes[4]);
    });

    test('should apply custom styling properties', () => {
        const p = renderer
            .create(<P styling="base" mt="20px" p="3px" />)
            .toJSON();
        expect(p).toHaveStyleRule('margin-top', '20px');
        expect(p).toHaveStyleRule('padding', '3px');
    });
});
