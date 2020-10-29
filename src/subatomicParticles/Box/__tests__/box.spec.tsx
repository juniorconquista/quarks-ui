import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

import Box from '../Box';
import theme from '../../../theme';

describe('Box', () => {
    test('basic snapshot', () => {
        const tree = renderer
            .create(
                <ThemeProvider theme={theme}>
                    <Box styling="base" />
                </ThemeProvider>,
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('should inherit the styling properties of the base variant', () => {
        const tree = renderer
            .create(
                <ThemeProvider theme={theme}>
                    <Box styling="base" />
                </ThemeProvider>,
            )
            .toJSON();
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('flex-direction', 'column');
        expect(tree).toHaveStyleRule('justify-content', 'center');
        expect(tree).toHaveStyleRule('align-items', 'center');
        expect(tree).toHaveStyleRule('outline', 'none', {
            modifier: '&:focus',
        });
    });

    test('should inherit the styling properties of the row variant', () => {
        const tree = renderer
            .create(
                <ThemeProvider theme={theme}>
                    <Box styling="row" />
                </ThemeProvider>,
            )
            .toJSON();
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('flex-direction', 'row');
        expect(tree).toHaveStyleRule('justify-content', 'center');
        expect(tree).toHaveStyleRule('align-items', 'center');
        expect(tree).toHaveStyleRule('outline', 'none', {
            modifier: '&:focus',
        });
    });

    test('should inherit the styling properties of the column variant', () => {
        const tree = renderer
            .create(
                <ThemeProvider theme={theme}>
                    <Box styling="column" />
                </ThemeProvider>,
            )
            .toJSON();
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('flex-direction', 'column');
        expect(tree).toHaveStyleRule('justify-content', 'center');
        expect(tree).toHaveStyleRule('align-items', 'center');
        expect(tree).toHaveStyleRule('outline', 'none', {
            modifier: '&:focus',
        });
    });

    test('should inherit the styling properties of the grid variant', () => {
        const tree = renderer
            .create(
                <ThemeProvider theme={theme}>
                    <Box styling="grid" />
                </ThemeProvider>,
            )
            .toJSON();
        expect(tree).toHaveStyleRule('display', 'grid');
        expect(tree).toHaveStyleRule('flex-direction', 'column');
        expect(tree).toHaveStyleRule('justify-content', 'center');
        expect(tree).toHaveStyleRule('align-items', 'start');
        expect(tree).toHaveStyleRule('outline', 'none', {
            modifier: '&:focus',
        });
    });

    test('should inherit the styling properties of the overlay variant', () => {
        const tree = renderer
            .create(
                <ThemeProvider theme={theme}>
                    <Box styling="overlay" />
                </ThemeProvider>,
            )
            .toJSON();
        expect(tree).toHaveStyleRule('position', 'fixed');
        expect(tree).toHaveStyleRule('left', '0');
        expect(tree).toHaveStyleRule('right', '0');
        expect(tree).toHaveStyleRule('top', '0');
        expect(tree).toHaveStyleRule('bottom', '0');
        expect(tree).toHaveStyleRule('z-index', '9999');
    });

    test('should apply custom border styling properties', () => {
        const tree = renderer
            .create(<Box styling="row" border="1px solid" />)
            .toJSON();
        expect(tree).toHaveStyleRule('border', '1px solid');
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('flex-direction', 'row');
        expect(tree).toHaveStyleRule('justify-content', 'center');
        expect(tree).toHaveStyleRule('align-items', 'center');
        expect(tree).toHaveStyleRule('outline', 'none', {
            modifier: '&:focus',
        });
    });

    test('should apply custom color styling properties', () => {
        const tree = renderer
            .create(<Box styling="row" border="1px solid" color="blue" />)
            .toJSON();
        expect(tree).toHaveStyleRule('color', 'blue');
        expect(tree).toHaveStyleRule('border', '1px solid');
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('flex-direction', 'row');
        expect(tree).toHaveStyleRule('justify-content', 'center');
        expect(tree).toHaveStyleRule('align-items', 'center');
        expect(tree).toHaveStyleRule('outline', 'none', {
            modifier: '&:focus',
        });
    });

    test('should apply custom layout styling properties', () => {
        const tree = renderer
            .create(<Box styling="row" border="1px solid" width={1 / 2} />)
            .toJSON();
        expect(tree).toHaveStyleRule('width', '50%');
        expect(tree).toHaveStyleRule('border', '1px solid');
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('flex-direction', 'row');
        expect(tree).toHaveStyleRule('justify-content', 'center');
        expect(tree).toHaveStyleRule('align-items', 'center');
        expect(tree).toHaveStyleRule('outline', 'none', {
            modifier: '&:focus',
        });
    });

    test('should apply custom position styling properties', () => {
        const tree = renderer
            .create(<Box styling="row" position="absolute" />)
            .toJSON();
        expect(tree).toHaveStyleRule('position', 'absolute');
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('flex-direction', 'row');
        expect(tree).toHaveStyleRule('justify-content', 'center');
        expect(tree).toHaveStyleRule('align-items', 'center');
        expect(tree).toHaveStyleRule('outline', 'none', {
            modifier: '&:focus',
        });
    });

    test('should apply custom position styling properties', () => {
        const tree = renderer.create(<Box styling="row" m={2} />).toJSON();
        expect(tree).toHaveStyleRule('margin', '8px');
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('flex-direction', 'row');
        expect(tree).toHaveStyleRule('justify-content', 'center');
        expect(tree).toHaveStyleRule('align-items', 'center');
        expect(tree).toHaveStyleRule('outline', 'none', {
            modifier: '&:focus',
        });
    });

    test('should apply custom typography styling properties', () => {
        const tree = renderer
            .create(<Box styling="base" fontSize={8} />)
            .toJSON();
        expect(tree).toHaveStyleRule('font-size', '72px');
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('flex-direction', 'column');
        expect(tree).toHaveStyleRule('justify-content', 'center');
        expect(tree).toHaveStyleRule('align-items', 'center');
        expect(tree).toHaveStyleRule('outline', 'none', {
            modifier: '&:focus',
        });
    });
});
