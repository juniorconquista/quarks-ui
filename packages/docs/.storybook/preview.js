import React from 'react';
import ThemeProvider from './themeProvider'

export const decorators = [
    (Story) => (
        <ThemeProvider>
            <Story />
        </ThemeProvider>
    )
];

export const parameters = {
    options: {
        storySort: {
            order: ['Intro', 'Layout', 'Typography', 'Components'],
        },
    },
};