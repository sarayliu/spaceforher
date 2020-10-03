import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import './App.css';
import mainstuff from './App'

const SidebarExampleVisible = () => (
  <Sidebar.Pushable as={Segment}>
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible
      width='thin'
    >
      <Menu.Item as='a' href="#top">
        <Icon name='home' />
        Home
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='book' />
        Club Reviews and Ratings
      </Menu.Item>
    </Sidebar>

    <Sidebar.Pusher>
      <Segment basic>
        {mainstuff()};
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
)

export default SidebarExampleVisible;