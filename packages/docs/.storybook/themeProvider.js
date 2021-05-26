import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { useDarkMode } from 'storybook-dark-mode';
import { themes } from '@storybook/theming';

import theme from '@packages/quarks/theme'
import colors from '@packages/quarks/theme/colors'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.fontFamily};
  }
  .sbdocs-content > div[id^='anchor--'] .docs-story > div {
    background: ${(props) => props.theme.colors.dark ? themes.dark.appBg : themes.light.appContentBg}
  } 
`;

export default ({ children }) => {
  const isDark = useDarkMode()
  const colorsTheme = {
    ...theme.colors,
    ...colors(isDark),
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