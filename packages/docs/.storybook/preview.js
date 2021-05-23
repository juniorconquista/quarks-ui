import React from 'react';

import ThemeProvider from './themeProvider'

export const decorators = [
    renderStory => {
        return <ThemeProvider>{renderStory()}</ThemeProvider>
    },
];

export const parameters = {
    options: {
        storySort: {
            order: ['Intro', 'Layout', 'Typography', 'Components'],
        },
    },
};



