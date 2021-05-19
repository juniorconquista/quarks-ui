import React from 'react';
import { addReadme } from 'storybook-readme';
import ThemeProvider from './themeProvider'

export const decorators = [
    (Story) => (
        <ThemeProvider>
            <Story />
        </ThemeProvider>
    ),
    addReadme
];
