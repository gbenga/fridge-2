import React, { Component } from "react";
import ItemCard from "./ItemCard";

export default class ItemsContainer extends React.Component {
  renderEachItemCard = () =>
    this.props.items.map((item) => <ItemCard item={item} />);

  render() {
    return <div id="items-container">{this.renderEachItemCard()}</div>;
  }
}
