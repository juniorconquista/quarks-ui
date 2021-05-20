import React, { ReactElement, ReactNode } from 'react'
import { Meta } from '@storybook/react'
import { Button } from '../../../quarks'

const storie: Meta = {
  component: Button,
  title: 'Components/Button',
  // parameters: {
  //   docs: {
  //     description: {
  //       component: readme,
  //     },
  //   },
  // },

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
        type: { summary: 'medium | small | large' },
        defaultValue: { summary: 'medium' }
      }
    }
  }
}

const Template = ({ children, ...args }: { children: ReactNode }): ReactElement => <Button {...args}>{children}</Button>

export const Playground = (args): ReactElement => <Button {...args} />
Playground.args = { styling: 'primary', children: 'Button' }

export const Primary = Template.bind({})
Primary.args = {
  styling: 'primary',
  children: 'Primary'
}
Primary.parameters = {
  withSource: 'none',
  previewTabs: {
    withSource: 'none',

    docs: { hidden: true }
  },
  docs: {
    withSource: 'none',
    hidden: true
  }
}

export const Secondary = Template.bind({})
Secondary.args = {
  styling: 'secondary',
  children: 'Secondary'
}

export const Success = Template.bind({})
Success.args = {
  styling: 'success',
  children: 'Success'
}

export const Danger = Template.bind({})
Danger.args = {
  styling: 'danger',
  children: 'Danger'
}

export const All = (): ReactElement => (
  <>
    <Button styling="primary">Primary</Button>
    <Button styling="success">Success</Button>
  </>
)

export default storie
