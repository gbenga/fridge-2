import React, { Component } from "react";
import { Header } from "semantic-ui-react";

export default class ItemCard extends React.Component {
  render() {
    const i = this.props.item;
    return (
      <div>
        <Header as="h2">{i.name}</Header>
      </div>
    );
  }
}

// id: 1,
// name: "Yoghurt",
// image: "",
// expires: "",
// user_id: 2,
