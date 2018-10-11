import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import {Menu, Icon, Dropdown, Image, Grid, List, Input, Button } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <div className='top'>
          <Menu white relaxed borderless secondary>
            <Menu.Item><Image src='http://www.luckybelly.com/img/lucky-logo-light.png' right inline /></Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item>Menus</Menu.Item>
              <Menu.Item>Info</Menu.Item>
              <Menu.Item>Breaking Bread Hospitality</Menu.Item>
            </Menu.Menu>
          </Menu>
        </div>
    )
  }
}



class FullWidthImage extends React.Component {
  render() {
    return (
        <Image src = 'http://luckybelly.com/img/bellybowl.jpg' fluid/>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className='g'>
          <Grid>
            <Grid.Row container columns={3} >
              <Grid.Column>
                <Image src ='http://www.luckybelly.com/img/lucky-logo-light.png'/>
              </Grid.Column>
              <Grid.Column>Links<hr/><List>
                <List.Item>Hours</List.Item>
                <List.Item>Menus</List.Item>
                <List.Item>Reservations</List.Item>
                <List.Item>Corkage</List.Item>
                <List.Item>Contact</List.Item>
              </List></Grid.Column>
              <Grid.Column>Contact<hr/><List>
                <List.Item>808-531-1888</List.Item>
                <List.Item>eat@luckybelly.com</List.Item>
                <List.Item>50 N. Hotel St. Honolulu, HI 96817</List.Item>
              </List></Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>


          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));
