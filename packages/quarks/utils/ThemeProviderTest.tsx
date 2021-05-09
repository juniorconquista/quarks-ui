import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

interface Props {
  children: ReactNode
}

const ThemeProviderTest: React.FC<Props> = ({ children }: Props) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default ThemeProviderTest
