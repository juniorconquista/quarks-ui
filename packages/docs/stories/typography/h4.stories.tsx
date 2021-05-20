import React, { ReactElement, ReactNode } from 'react'
import { Meta } from '@storybook/react'
import { H4 } from '../../../quarks/typography'

const storie: Meta = {
  component: H4,
  title: 'Typography/H4',
  argTypes: {
    children: {
      table: {
        type: { summary: 'node' }
      }
    },
    styling: {
      control: {
        type: 'select',
        options: ['base', 'light']
      },
      table: {
        type: { summary: '"base" | "light"' },
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
        defaultValue: { summary: 'h4' }
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

const Template = ({ children, ...args }: { children: ReactNode }): ReactElement => <H4 {...args}>{children}</H4>

export const Base = Template.bind({})
Base.args = { children: 'title', styling: 'base', color: 'text.default', fontSize: 'h4', textAlign: 'left', letterSpacing: '0' }

export const light = Template.bind({})
light.args = { children: 'title', styling: 'light', color: 'text.default', fontSize: 'h4', textAlign: 'left', letterSpacing: '0' }

export default storie
