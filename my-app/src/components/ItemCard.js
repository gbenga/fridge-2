import React, { Component } from "react";
import { Header } from "semantic-ui-react";

export default class ItemCard extends React.Component {
  render() {
    const i = this.props.item;
    const foodAddress = i.name.toLowerCase().split(" ").join("-");
    let itemImage = require(`../item-imgs/${foodAddress}.jpg`);

    return (
      <div>
        <Header as="h3">{i.name}</Header>
        <img src={itemImage} width="200px" />
      </div>
    );
  }
}

// itemImage={`../item-imgs/${item.name
//   .toLowerCase()
//   .replace(" ", "-")}.jpg`}

// id: 1,
// name: "Yoghurt",
// image: "",
// expires: "",
// user_id: 2,
