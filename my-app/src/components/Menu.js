import React, { Component } from "react";
import { Input, Menu, Button, Icon } from "semantic-ui-react";

export default class MenuExampleSecondary extends Component {

  render() {

    return (
      <Menu secondary>
        <Menu.Item name="home" />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input onChange={this.props.updateFilter} icon="search" placeholder="Search..." />
          </Menu.Item>
          {!this.props.toggleForm ?
            <Button onClick={this.props.showForm} animated="vertical">
                <Button.Content  visible>Add New Item</Button.Content>
                  <Button.Content hidden>
                  <Icon name='plus' />
                </Button.Content>
            </Button>
           :    <Button animated="fade" onClick={this.props.showForm} >
                  <Button.Content  visible>Close Form</Button.Content>
                  <Button.Content hidden>
                  <Icon name='minus' />
                </Button.Content>
              </Button>
          } 
          <Menu.Item name="logout" />
        </Menu.Menu>
      </Menu>
    );
  }
}
