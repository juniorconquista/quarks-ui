import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';

interface Props {
    children: ReactNode;
}

const ThemeTest: React.FC<Props> = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default ThemeTest;
