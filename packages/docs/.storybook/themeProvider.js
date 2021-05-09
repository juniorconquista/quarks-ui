import React from 'react'
import { useDarkMode } from 'storybook-dark-mode';
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import theme from '../../quarks/theme'
import colors from '../../quarks/theme/colors'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.fontFamily};
  }
`;

export default ({ children }) => {

    const colorsTheme = {
        ...theme.colors,
        ...colors(useDarkMode()),
    };

    return (
        <ThemeProvider
            theme={{
                ...theme,
                colors: colorsTheme,
                fontFamily: 'Roboto Mono, monospace',
            }}
        >
            {children}
            <GlobalStyle />
        </ThemeProvider>
    )
}