import React, { Component } from "react";

import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from "semantic-ui-react";

const options = [
  {
    value: "1",
    text: "Gbenga",
    image: "",
  },
  {
    value: "2",
    text: "Adao",
    image: "",
  },
];

class FormExampleFieldControl extends Component {

  // convertUsers = () => {
  //   users.map(user => {
  //     array.push({
  //       text: user.name,
  //       value: user.id,
  //     });
  //     return array;
  //   });
  // };

  // options = convertUsers(); 
  
  state = {
    name: "",
    category: "",
    price: "",
    quantity: "",
    expires: "",
    purchased: "",
    userId: ""
  };

//   componentDidMount = () => {
// // debugger    
// this.textInput.current.focus()
//   }

  handleName = (e) => this.setState( {name: e.target.value} ) 
  handleCategory = (e) => this.setState( {category: e.target.value} ) 
  handlePrice = (e) => this.setState( {price: e.target.value} ) 
  handleQuantity = (e) => this.setState( {quantity: e.target.value} ) 
  handleExpires = (e) => this.setState( {expires: e.target.value} ) 
  handlePurchased = (e) => this.setState( {purchased: e.target.value} ) 
  // handleUserId = (e) => this.setState( {userId: e.target.value} ) 

  handleSubmit = (e) => {
    e.preventDefault();
    const item = {
        "name": this.state.name,
        "category": this.state.category,
        "price": this.state.price,
        "quantity": this.state.quantity,
        "purchased": this.state.purchased,
        "expires": this.state.expires,
        "userId": 2
      }
    this.props.createNewItem(item)
    this.setState({
      name: "",
      category: "",
      price: "",
      quantity: "",
      expires: "",
      purchased: "",
      userId: ""
    })
  }

  render() {
 
    return (
      <Form onSubmit={this.handleSubmit} size="tiny">
        <Form.Group widths="equal">
          <Form.Field onChange={this.handleName}
            value={this.state.name}
            control={Input}
            label="Item name"
            placeholder="Item name"
            // ref={this.textInput}
          />
          <Form.Field onChange={this.handleCategory}
            value={this.state.category}
            control={Input}
            label="Category"
            placeholder="Category"
          />
          <Form.Field value={this.state.purchased} onChange={this.handlePurchased} type="date" control={Input} label="Purchased on:" />
          <Form.Field value={this.state.expires} onChange={this.handleExpires} type="date" control={Input} label="Expires on:" />
          <Form.Field value={this.state.quantity} onChange={this.handleQuantity} control={Input} type="number" label="Quantity" placeholder="Quantity" />
          <Form.Field value={this.state.price} onChange={this.handlePrice} control={Input} type="number" label="Price" placeholder="Price" />
          {/* <label className="field">User</label>
          <select className="ui selection dropdown" value={this.state.userId}>
            <option value="1">Gbenga</option>
            <option value="2">Adao</option>
          </select> */}
            
        </Form.Group>
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    );
  }
}

export default FormExampleFieldControl;
