import React, { ReactElement, ReactNode } from 'react'
import { Meta } from '@storybook/react'
import { P } from '../../../quarks/typography'

const storie: Meta = {
  component: P,
  title: 'Typography/P',
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

const Template = ({ children, ...args }: { children: ReactNode }): ReactElement => <P {...args}>{children}</P>

export const Playground = Template.bind({})
Playground.args = { children: 'title', styling: 'base', color: 'text.default', fontSize: 'base', textAlign: 'left', letterSpacing: '0' }

export const Base = Template.bind({})
Base.args = { children: 'title', styling: 'base' }

export default storie
