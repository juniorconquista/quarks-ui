import React from 'react';

import { Meta } from '@storybook/react';
import { Box } from '../../../quarks'


export default {
    component: Box,
    title: 'Design System/Box',
 
} as Meta;

export const row = () => <Box styling="row" color="primary.default">{'Button'}</Box>;
export const column = () => <Box styling="column" color="primary.default">{'Button'}</Box>;
export const grid = () => <Box styling="grid" color="primary.default">{'Button'}</Box>;