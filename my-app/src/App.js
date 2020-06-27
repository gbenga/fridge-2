import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Segment } from "semantic-ui-react";
import Menu from "./components/Menu";
import Container from "./components/ItemsContainer";
// import data from "./db";
import API from "./API"

export default class App extends Component {
  state = {
    items: [],
    search: ""
  };

  componentDidMount() {
    API.getItems().then(array => this.setState({items: array}))
  }

  updateState(string) {
    console.log(string);
    
    this.setState({search: string})
    // debugger  
  }

  render() {
    return (
      <>
        <Segment basic padded="very">
          <Menu updateState={this.updateState} />
        </Segment>
        <Container items={this.state.items} />
      </>
    );
  }
}
