import React, { Component, Fragment } from "react";
import "semantic-ui-css/semantic.min.css";
import { Segment } from "semantic-ui-react";
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

  updateFilter = (e) => {
    this.setState({search: e.target.value})
  }

  filterBySearch = (arrayOfItems) => {
    return arrayOfItems.filter(item => item.name.toLowerCase().includes(this.state.search.toLocaleLowerCase()))
  }

  itemToRender = () => {
    const items = this.filterBySearch(this.state.items)
    return items
  }

  render() {
    return (
      <Fragment>
        <Segment basic padded="very">
          <Menu updateFilter={this.updateFilter}/>
        </Segment>
        <Container items={this.itemToRender()} />
      </Fragment>
    );
  }
}
