import React from 'react';
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import logo from './logo.svg';
import './App.css';
import Example from './MenuBar'
import Scattergram from "./Scattergram.js";

function App() {
  const [reload, setReload] = useState(true);

  return (
    <div className="App">
      <div className = "App-header">
        <h1>Space for Her</h1>
      </div>
      <h6>The UVA Women-Welcome Index is a review website designed to cater to the women of the UVA community. 
      Too often, women who want to join clubs revolving around male-dominated activities are made uncomfortable 
      by the lack of diversity and frosty reception they receive from these environments, and are then discouraged 
      from pursuing their interests. Space for Me hopes to change that. By providing a space for women to share their 
      experiences with UVA clubs, Space for Me will not only allow women to connect to other women and find clubs that score 
      high on our Welcome Index, but will also hold UVA CIOs accountable for gender discrimination and inclusion. </h6>
      <Scattergram reload={true} />
    </div>
  );
}

/*const SidebarExampleVisible = () => (
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
      <Menu.Item as='a'>
        <Icon name='home' />
        Home
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='gamepad' />
        Games
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='camera' />
        Channels
      </Menu.Item>
    </Sidebar>

    <Sidebar.Pusher>
      <Segment basic>
        <Header as='h3'>Application Content</Header>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
)*/

export default App;
//export default SidebarExampleVisible;