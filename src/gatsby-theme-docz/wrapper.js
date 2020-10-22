import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import favicon from './favicon.png';
import theme from './styledTheme';

export default ({ children }) => (
    <ThemeProvider theme={theme}>
        <Helmet>
            <link rel="icon" type="image/png" href={favicon} />
        </Helmet>
        {children}
    </ThemeProvider>
);
