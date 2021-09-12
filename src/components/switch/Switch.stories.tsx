import React from 'react'
import { ChangeEvent } from 'react'
import Switch, { SwitchProps } from './Switch'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  component: Switch,
  title: 'Component/Switch',
  // argTypes: {
  //   variant: { control: 'color' },
  // },
} as Meta

const Template: Story<SwitchProps> = (args) => <Switch {...args} />

export const Default = Template.bind({})
Default.args = {
  id: 'storybook-switch',
  children: 'Oops! Looks like you forgot something.',
  onChange: (e: ChangeEvent<HTMLInputElement>) => {},
}
