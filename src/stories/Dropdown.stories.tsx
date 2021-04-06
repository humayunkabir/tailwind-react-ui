import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Badge from '../Badge'
import Button from '../Button'
import Dropdown from '../Dropdown'
import { DropdownMenuProps } from '../DropdownMenu'

export default {
  title: 'Dropdown',
  component: Dropdown,
  subcomponents: {
    Dropdown,
    DropdownItem: Dropdown.Item,
    DropdownMenu: Dropdown.Menu,
    DropdownToggle: Dropdown.Toggle,
  },
  argTypes: {
    align: {
      control: 'inline-radio',
      options: ['left', 'right'],
    },
  },
} as Meta

const Template: Story<DropdownMenuProps> = ({ align }) => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle>
          {(toggleDropdown) => <Button onClick={toggleDropdown}>Open Dropdown</Button>}
        </Dropdown.Toggle>
        <Dropdown.Menu align={align}>
          <Dropdown.Item tag="a" href="#" className="justify-between">
            <span>Messages</span>
            <Badge type="danger">13</Badge>
          </Dropdown.Item>
          <Dropdown.Item onClick={() => {}}>
            <span>Alerts</span>
          </Dropdown.Item>
          <Dropdown.Item onClick={() => {}}>
            <span>Account</span>
          </Dropdown.Item>
          <Dropdown.Item onClick={() => {}}>
            <span>Support</span>
          </Dropdown.Item>
          <Dropdown.Item disabled onClick={() => {}}>
            <span>Sign Out</span>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  align: 'left',
}
