import React from 'react'
import ThemeProvider from '../../../.storybook/themeProvider'
import { Box } from '../../../../quarks'
import Color from './color'

const Pallete: React.FC = () => (
    <ThemeProvider>
        <Box
            styling="grid"
            gridTemplateColumns={{
              mobile: 'repeat(1, 4fr)',
              tablet: 'repeat(2, 4fr)',
              desktop: 'repeat(3, 4fr)'
            }}
            gridGap="30px"
        >
            <Color styling="primary" />
            <Color styling="secondary" />
            <Color styling="success" />
            <Color styling="warning" />
            <Color styling="danger" />
            <Color styling="info" />
            <Color styling="background" colorDark="#333b3f" />
            <Color styling="text" colorDark="#333b3f" />
        </Box>
    </ThemeProvider>
)

export default Pallete
