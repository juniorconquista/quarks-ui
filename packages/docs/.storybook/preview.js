import React from 'react';

import ThemeProvider from './themeProvider'

export const decorators = [
    (Story) => (
        <ThemeProvider>
            <Story />
        </ThemeProvider>
    ),
];