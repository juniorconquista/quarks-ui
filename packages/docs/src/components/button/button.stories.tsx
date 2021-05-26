import React, { ReactElement } from 'react'
import { Meta } from '@storybook/react'
import { Button, Box } from '@packages/quarks'

const storie: Meta = {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    children: {
      table: {
        type: { summary: 'node' }
      }
    },
    styling: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'link', 'base']
      },
      table: {
        type: { summary: '"primary" | "secondary" | "success" | "danger" | "warning" | "info" | "link" | "base"' }
      }
    },
    outline: {
      defaultValue: false,
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    size: {
      defaultValue: 'medium',
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large']
      },
      table: {
        type: { summary: 'small | medium | large' },
        defaultValue: { summary: 'medium' }
      }
    }
  }
}

export const Playground = (args): ReactElement => <Button {...args} />
Playground.args = { styling: 'primary', children: 'Button' }

export const Buttons = (): ReactElement => (
  <Box styling="row" justifyContent="space-evenly">
    <Button styling="primary">Primary</Button>
    <Button styling="secondary">Secondary</Button>
    <Button styling="success">Success</Button>
    <Button styling="danger">Danger</Button>
    <Button styling="warning">Warning</Button>
    <Button styling="info">Info</Button>
    <Button styling="link">Link</Button>
    <Button styling="base">Base</Button>
  </Box>
)

export const Outline = (): ReactElement => (
  <Box styling="row" justifyContent="space-evenly">
    <Button styling="primary" outline>Primary</Button>
    <Button styling="secondary" outline>Secondary</Button>
    <Button styling="success" outline>Success</Button>
    <Button styling="danger" outline>Danger</Button>
    <Button styling="warning" outline>Warning</Button>
    <Button styling="info" outline>Info</Button>
  </Box>
)

export const Disabled = (): ReactElement => (
  <Box styling="row" justifyContent="space-evenly">
    <Button styling="primary" disabled>Primary</Button>
    <Button styling="secondary" disabled>Secondary</Button>
    <Button styling="success" disabled>Success</Button>
    <Button styling="danger" disabled>Danger</Button>
    <Button styling="warning" disabled>Warning</Button>
    <Button styling="info" disabled>Info</Button>
  </Box>
)

export const Text = (): ReactElement => (
  <Box styling="row" justifyContent="space-evenly">
    <Button styling="primary" text>Primary</Button>
    <Button styling="secondary" text>Secondary</Button>
    <Button styling="success" text>Success</Button>
    <Button styling="danger" text>Danger</Button>
    <Button styling="warning" text>Warning</Button>
    <Button styling="info" text>Info</Button>
  </Box>
)

export const Block = (): ReactElement => (
  <Box styling="column" justifyContent="space-evenly">
    <Button styling="primary" block>Primary</Button>
    <Button styling="secondary" block>Secondary</Button>
  </Box>
)

export const LargeSize = (): ReactElement => (
  <Box styling="row" justifyContent="space-evenly">
    <Button styling="primary" size="large">Large Button</Button>
    <Button styling="secondary" size="large">Large Button</Button>
  </Box>
)

export const SmallSize = (): ReactElement => (
  <Box styling="row" justifyContent="space-evenly">
    <Button styling="primary" size="small">Small Button</Button>
    <Button styling="secondary" size="small">Small Button</Button>
  </Box>
)

export default storie
