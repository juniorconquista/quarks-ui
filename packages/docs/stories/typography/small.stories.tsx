import React, { ReactElement, ReactNode } from 'react'
import { Meta } from '@storybook/react'
import { Small } from '../../../quarks/typography'

const storie: Meta = {
  component: Small,
  title: 'Typography/Small',
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
        defaultValue: { summary: 'small' }
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

const Template = ({ children, ...args }: { children: ReactNode }): ReactElement => <Small {...args}>{children}</Small>

export const Base = Template.bind({})
Base.args = { children: 'title', styling: 'base', color: 'text.default', fontSize: 'small', textAlign: 'left', letterSpacing: '0' }

export default storie
