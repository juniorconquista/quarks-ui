import React from 'react'
import { Meta } from '@storybook/react'
import { Box } from '../../../quarks'

const storie: Meta = {
  component: Box,
  title: 'Layout/Box'
}

export default storie

export const row: React.FC = () => <Box styling="row" color="primary.default">{'Button'}</Box>
export const column: React.FC = () => <Box styling="column" color="primary.default">{'Button'}</Box>
export const grid: React.FC = () => <Box styling="grid" color="primary.default">{'Button'}</Box>
