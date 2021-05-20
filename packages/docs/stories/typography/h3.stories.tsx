import React, { ReactElement, ReactNode } from 'react'
import { Meta } from '@storybook/react'
import { H3 } from '../../../quarks/typography'

const storie: Meta = {
  component: H3,
  title: 'Typography/H3',
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
        defaultValue: { summary: '18.72px / 1.17rem' }
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

const Template = ({ children, ...args }: { children: ReactNode }): ReactElement<any, any> => <H3 {...args}>{children}</H3>

export const Base = Template.bind({})
Base.args = { children: 'title', styling: 'base', color: 'text.default', fontSize: '18.72px', textAlign: 'left', letterSpacing: '0' }

export const light = Template.bind({})
light.args = { children: 'title', styling: 'light', color: 'text.default', fontSize: '18.72px', textAlign: 'left', letterSpacing: '0' }

export default storie
