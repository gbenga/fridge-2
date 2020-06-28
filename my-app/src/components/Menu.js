import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";
export default class MenuExampleSecondary extends Component {

  render() {

    return (
      <Menu secondary>
        <Menu.Item name="home" />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input onChange={this.props.updateFilter} icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item name="logout" />
        </Menu.Menu>
      </Menu>
    );
  }
}
