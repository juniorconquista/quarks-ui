import React, { ReactElement, ReactNode } from 'react'
import { addParameters, Meta } from '@storybook/react'
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
        options: ['medium', 'small', 'large']
      },
      table: {
        type: { summary: 'medium | small | large' },
        defaultValue: { summary: 'medium' }
      }
    }
  }
}

const Template = ({ children, ...args }: { children: ReactNode }): ReactElement<any, any> => <Button {...args}>{children}</Button>

export const Basic = (args): ReactElement => <Button {...args} />
Basic.args = { styling: 'primary', children: 'Button' }

// export const Basic = Template.bind({});
// Basic.args = {
//   styling: 'primary',
//   children: 'Button',
// };

addParameters({ docs: { previewSource: 'open' } })
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
    // source: {
    //   hidden: true,

    //   type: 'string',
    //   Template: <div>a</div>

    // }
  }
  // control: false
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
