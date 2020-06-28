import React, { Component, Fragment } from "react";
import "semantic-ui-css/semantic.min.css";
import { Segment } from "semantic-ui-react";
import Menu from "./components/Menu";
import Container from "./components/ItemsContainer";
import Form from "./components/Form"
import API from "./API"


export default class App extends Component {
  state = {
    items: [],
    users: [],
    search: "",
    form: false
  };

  componentDidMount() {
    API.getItems().then(array => this.setState({items: array}))
    API.getUsers().then(array => this.setState({users: array}))
  }

  updateFilter = (e) => {
    this.setState({search: e.target.value})
  }

  filterBySearch = (arrayOfItems) => {
    return arrayOfItems.filter(item => item.name.toLowerCase().includes(this.state.search.toLocaleLowerCase()))
  }

  createNewItem = (item) => {
      API.postNewItem(item).then(resp => this.setState({items: [...this.state.items, resp]}))
      // then(API.getItems().then(array => this.setState({items: array})))
  }

  itemToRender = () => {
    const items = this.filterBySearch(this.state.items)
    return items
  }


  showForm = () => {
    // debugger
    this.setState({form: !this.state.form})
  }

  deleteItem = (id) => {
    API.destroyItem(id).then(this.setState({items: this.state.items.filter(item => item.id !== id)}))
  }

  render() {
    return (
      <Fragment>
        <Segment basic padded="very">
          <Menu updateFilter={this.updateFilter} showForm={this.showForm} toggleForm={this.state.form}/>
          {this.state.form 
          ?  <Form users={this.state.users} createNewItem={this.createNewItem}/>
          : null}
        </Segment>
        <Container items={this.itemToRender()}  deleteItem={this.deleteItem}/>
      </Fragment>
    );
  }
}
