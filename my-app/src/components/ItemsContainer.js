import React, { Component } from "react";
import ItemCard from "./ItemCard";

export default class ItemsContainer extends React.Component {
  renderEachItemCard = () =>
    this.props.items.map((item, idx) => <ItemCard key={idx} item={item} deleteItem={this.props.deleteItem} />);

  render() {
    return <div id="items-container">{this.renderEachItemCard()}</div>;
  }
}


