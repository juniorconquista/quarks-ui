import React, { ReactElement, ReactNode } from 'react'
import { Meta } from '@storybook/react'
import { Box } from '@packages/quarks'

const storie: Meta = {
  component: Box,
  title: 'Layout/Box',
  argTypes: {
    // children: {
    //   table: {
    //     type: { summary: 'node' }
    //   }
    // },
    styling: {
      control: {
        type: 'select',
        options: ['base', 'row', 'column', 'grid', 'overlay']
      },
      table: {
        type: { summary: '"base" | "row" | "column" | "grid" | "overlay"' },
        defaultValue: { summary: 'base' }
      }
    }
    // color: {
    //   table: {
    //     defaultValue: { summary: 'text.default' }
    //   }
    // },
    // fontSize: {
    //   table: {
    //     defaultValue: { summary: 'h1' }
    //   }
    // },
    // textAlign: {
    //   control: {
    //     type: 'select',
    //     options: ['left', 'center', 'right']
    //   },
    //   table: {
    //     type: { summary: '"left" | "center" | "right"' },
    //     defaultValue: { summary: 'left' }
    //   }
    // },
    // letterSpacing: {
    //   table: {
    //     defaultValue: { summary: '0' }
    //   }
    // }
  }
}

const Template = ({ children, ...args }: { children: ReactNode }): ReactElement => <Box {...args}>
  <Box styling="row" bg="#f5f5f5" border="1px solid #ccc" padding="10px">box</Box>
  <Box styling="row" bg="#f5f5f5" border="1px solid #ccc" padding="10px">box</Box>
  <Box styling="row" bg="#f5f5f5" border="1px solid #ccc" padding="10px">box</Box>
  <Box styling="row" bg="#f5f5f5" border="1px solid #ccc" padding="10px">box</Box>
</Box>

export const Playground = Template.bind({})
Playground.args = { styling: 'base' }

export const row: React.FC = () => <Box styling="row" justifyContent="space-between">
  <Box styling="base" bg="#f5f5f5" border="1px solid #ccc" padding="10px">box</Box>
  <Box styling="base" bg="#f5f5f5" border="1px solid #ccc" padding="10px">box</Box>
  <Box styling="base" bg="#f5f5f5" border="1px solid #ccc" padding="10px">box</Box>
  <Box styling="base" bg="#f5f5f5" border="1px solid #ccc" padding="10px">box</Box>
  <Box styling="base" bg="#f5f5f5" border="1px solid #ccc" padding="10px">box</Box>
  <Box styling="base" bg="#f5f5f5" border="1px solid #ccc" padding="10px">box</Box>
</Box>

export const column: React.FC = () => <Box styling="column">
  <Box styling="base" bg="#f5f5f5" border="1px solid #ccc" padding="10px">box</Box>
  <Box styling="base" bg="#f5f5f5" border="1px solid #ccc" padding="10px">box</Box>
  <Box styling="base" bg="#f5f5f5" border="1px solid #ccc" padding="10px">box</Box>
  <Box styling="base" bg="#f5f5f5" border="1px solid #ccc" padding="10px">box</Box>
</Box>

export const grid: React.FC = () => <Box styling="grid" gridGap="10px" gridTemplateColumns="repeat(4, 1fr)">
  <Box styling="base" bg="#f5f5f5" border="1px solid #ccc" padding="10px">box</Box>
  <Box styling="base" bg="#f5f5f5" border="1px solid #ccc" padding="10px">box</Box>
  <Box styling="base" bg="#f5f5f5" border="1px solid #ccc" padding="10px">box</Box>
  <Box styling="base" bg="#f5f5f5" border="1px solid #ccc" padding="10px">box</Box>
  <Box styling="base" bg="#f5f5f5" border="1px solid #ccc" padding="10px" gridColumn="1 /span 2">box</Box>
  <Box styling="base" bg="#f5f5f5" border="1px solid #ccc" padding="10px" gridColumn="3 /span 2">box</Box>
  <Box styling="base" bg="#f5f5f5" border="1px solid #ccc" padding="10px" gridColumn="1 /span 4">box</Box>
</Box>

export default storie
