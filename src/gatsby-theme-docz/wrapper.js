import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import favicon from './favicon.png';
import theme from './styledTheme';
import colors from './styledTheme/colors';

export default ({ children }) => {
    const [themeMode, setThemeModColor] = useState('ligth');

    useEffect(() => {
        const themeUiMode = localStorage.getItem('theme-ui-color-mode');
        setThemeModColor(themeUiMode);
        const buttons = document.querySelectorAll(
            "[data-testid='header'] button",
        );
        const buttonDarkMode = buttons[1];
        handleDarkMode(buttonDarkMode);
    }, []);

    const handleDarkMode = (button) => {
        button.addEventListener('click', () => {
            const themeUiMode = localStorage.getItem('theme-ui-color-mode');
            setThemeModColor(themeUiMode === 'light' ? 'dark' : 'light');
        });
    };

    const colorsTheme = {
        ...theme.colors,
        ...colors(themeMode === 'dark'),
    };

    return (
        <ThemeProvider theme={{ ...theme, colors: colorsTheme }}>
            <Helmet>
                <link rel="icon" type="image/png" href={favicon} />
            </Helmet>
            {children}
        </ThemeProvider>
    );
};
