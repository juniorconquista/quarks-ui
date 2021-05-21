module.exports = {
    stories: ['../src/**/*.stories.tsx', '../src/**/*.stories.mdx'],
    addons: [
        '@storybook/addon-essentials', 
        '@storybook/addon-storysource', 
        '@storybook/addon-a11y',
        '@storybook/addon-postcss',
        'storybook-dark-mode', 
    ]
};