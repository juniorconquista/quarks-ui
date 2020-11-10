import React from 'react';
import renderer from 'react-test-renderer';
import ThemeTest from '../../../utils/ThemeProviderTest';
import 'jest-styled-components';

import Box from '../Box';
import theme from '../../../theme';

describe('Box', () => {
    test('basic snapshot', () => {
        const box = renderer
            .create(
                <ThemeTest>
                    <Box styling="base" />
                </ThemeTest>,
            )
            .toJSON();
        expect(box).toMatchSnapshot();
    });

    test('should inherit the styling properties of the base variant', () => {
        const box = renderer
            .create(
                <ThemeTest>
                    <Box styling="base" />
                </ThemeTest>,
            )
            .toJSON();
        expect(box).toHaveStyleRule('display', 'flex');
        expect(box).toHaveStyleRule('flex-direction', 'column');
        expect(box).toHaveStyleRule('justify-content', 'center');
        expect(box).toHaveStyleRule('align-items', 'center');
        expect(box).toHaveStyleRule('outline', 'none', {
            modifier: '&:focus',
        });
    });

    test('should inherit the styling properties of the row variant', () => {
        const box = renderer
            .create(
                <ThemeTest>
                    <Box styling="row" />
                </ThemeTest>,
            )
            .toJSON();
        expect(box).toHaveStyleRule('display', 'flex');
        expect(box).toHaveStyleRule('flex-direction', 'row');
        expect(box).toHaveStyleRule('justify-content', 'center');
        expect(box).toHaveStyleRule('align-items', 'center');
        expect(box).toHaveStyleRule('outline', 'none', {
            modifier: '&:focus',
        });
    });

    test('should inherit the styling properties of the column variant', () => {
        const box = renderer
            .create(
                <ThemeTest>
                    <Box styling="column" />
                </ThemeTest>,
            )
            .toJSON();
        expect(box).toHaveStyleRule('display', 'flex');
        expect(box).toHaveStyleRule('flex-direction', 'column');
        expect(box).toHaveStyleRule('justify-content', 'center');
        expect(box).toHaveStyleRule('align-items', 'center');
        expect(box).toHaveStyleRule('outline', 'none', {
            modifier: '&:focus',
        });
    });

    test('should inherit the styling properties of the grid variant', () => {
        const box = renderer
            .create(
                <ThemeTest>
                    <Box styling="grid" />
                </ThemeTest>,
            )
            .toJSON();
        expect(box).toHaveStyleRule('display', 'grid');
        expect(box).toHaveStyleRule('flex-direction', 'column');
        expect(box).toHaveStyleRule('justify-content', 'center');
        expect(box).toHaveStyleRule('align-items', 'start');
        expect(box).toHaveStyleRule('outline', 'none', {
            modifier: '&:focus',
        });
    });

    test('should inherit the styling properties of the overlay variant', () => {
        const box = renderer
            .create(
                <ThemeTest>
                    <Box styling="overlay" />
                </ThemeTest>,
            )
            .toJSON();
        expect(box).toHaveStyleRule('position', 'fixed');
        expect(box).toHaveStyleRule('left', '0');
        expect(box).toHaveStyleRule('right', '0');
        expect(box).toHaveStyleRule('top', '0');
        expect(box).toHaveStyleRule('bottom', '0');
        expect(box).toHaveStyleRule('z-index', '9999');
    });

    test('should apply custom border styling properties', () => {
        const box = renderer
            .create(
                <ThemeTest>
                    <Box styling="row" border="1px solid" />
                </ThemeTest>,
            )
            .toJSON();
        expect(box).toHaveStyleRule('border', '1px solid');
        expect(box).toHaveStyleRule('display', 'flex');
        expect(box).toHaveStyleRule('flex-direction', 'row');
        expect(box).toHaveStyleRule('justify-content', 'center');
        expect(box).toHaveStyleRule('align-items', 'center');
        expect(box).toHaveStyleRule('outline', 'none', {
            modifier: '&:focus',
        });
    });

    test('should apply custom color styling properties', () => {
        const box = renderer
            .create(
                <ThemeTest>
                    <Box
                        styling="row"
                        border="1px solid"
                        color={theme.colors.primary}
                    />
                </ThemeTest>,
            )
            .toJSON();
        expect(box).toHaveStyleRule('color', theme.colors.primary.default);
        expect(box).toHaveStyleRule('border', '1px solid');
        expect(box).toHaveStyleRule('display', 'flex');
        expect(box).toHaveStyleRule('flex-direction', 'row');
        expect(box).toHaveStyleRule('justify-content', 'center');
        expect(box).toHaveStyleRule('align-items', 'center');
        expect(box).toHaveStyleRule('outline', 'none', {
            modifier: '&:focus',
        });
    });

    test('should apply custom layout styling properties', () => {
        const box = renderer
            .create(
                <ThemeTest>
                    <Box styling="row" border="1px solid" width={1 / 2} />
                </ThemeTest>,
            )
            .toJSON();
        expect(box).toHaveStyleRule('width', '50%');
        expect(box).toHaveStyleRule('border', '1px solid');
        expect(box).toHaveStyleRule('display', 'flex');
        expect(box).toHaveStyleRule('flex-direction', 'row');
        expect(box).toHaveStyleRule('justify-content', 'center');
        expect(box).toHaveStyleRule('align-items', 'center');
        expect(box).toHaveStyleRule('outline', 'none', {
            modifier: '&:focus',
        });
    });

    test('should apply custom position styling properties', () => {
        const box = renderer
            .create(
                <ThemeTest>
                    <Box styling="row" position="absolute" />
                </ThemeTest>,
            )
            .toJSON();
        expect(box).toHaveStyleRule('position', 'absolute');
        expect(box).toHaveStyleRule('display', 'flex');
        expect(box).toHaveStyleRule('flex-direction', 'row');
        expect(box).toHaveStyleRule('justify-content', 'center');
        expect(box).toHaveStyleRule('align-items', 'center');
        expect(box).toHaveStyleRule('outline', 'none', {
            modifier: '&:focus',
        });
    });

    test('should apply custom position styling properties', () => {
        const box = renderer
            .create(
                <ThemeTest>
                    <Box styling="row" m="xxs" />
                </ThemeTest>,
            )
            .toJSON();
        expect(box).toHaveStyleRule('margin', theme.space.xxs);
        expect(box).toHaveStyleRule('display', 'flex');
        expect(box).toHaveStyleRule('flex-direction', 'row');
        expect(box).toHaveStyleRule('justify-content', 'center');
        expect(box).toHaveStyleRule('align-items', 'center');
        expect(box).toHaveStyleRule('outline', 'none', {
            modifier: '&:focus',
        });
    });

    test('should apply custom typography styling properties', () => {
        const box = renderer
            .create(
                <ThemeTest>
                    <Box styling="base" fontSize={8} />
                </ThemeTest>,
            )
            .toJSON();
        expect(box).toHaveStyleRule('font-size', theme.fontSizes[8]);
        expect(box).toHaveStyleRule('display', 'flex');
        expect(box).toHaveStyleRule('flex-direction', 'column');
        expect(box).toHaveStyleRule('justify-content', 'center');
        expect(box).toHaveStyleRule('align-items', 'center');
        expect(box).toHaveStyleRule('outline', 'none', {
            modifier: '&:focus',
        });
    });
});
