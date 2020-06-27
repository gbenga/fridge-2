import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Button } from "semantic-ui-react";
import Menu from "./components/Menu";
import { Segment } from "semantic-ui-react";
import Container from "./components/ItemsContainer";
import data from "./db";

export default class App extends Component {
  state = {
    items: data.items,
  };

  render() {
    return (
      <>
        <Segment basic padded="very">
          <Menu />
        </Segment>
        <Container items={this.state.items} />
      </>
    );
  }
}
