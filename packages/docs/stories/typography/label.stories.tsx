import React, { ReactElement, ReactNode } from 'react'
import { Meta } from '@storybook/react'
import { Label } from '../../../quarks/typography'

const storie: Meta = {
  component: Label,
  title: 'Typography/Label',
  argTypes: {
    children: {
      table: {
        type: { summary: 'node' }
      }
    },
    styling: {
      table: {
        defaultValue: { summary: 'base' }
      }
    },
    color: {
      table: {
        defaultValue: { summary: 'text.default' }
      }
    },
    fontSize: {
      table: {
        defaultValue: { summary: 'base' }
      }
    },
    textAlign: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right']
      },
      table: {
        type: { summary: '"left" | "center" | "right"' },
        defaultValue: { summary: 'left' }
      }
    },
    letterSpacing: {
      table: {
        defaultValue: { summary: '0' }
      }
    }
  }
}

const Template = ({ children, ...args }: { children: ReactNode }): ReactElement => <Label {...args}>{children}</Label>

export const Playground = Template.bind({})
Playground.args = { children: 'title', styling: 'base', color: 'text.default', fontSize: 'base', textAlign: 'left', letterSpacing: '0' }

export const Base = Template.bind({})
Base.args = { children: 'title', styling: 'base' }

export default storie
