import React from "react";
import { Header, Image, Segment, Button, Grid } from "semantic-ui-react";
import Card from "./Card";

export default class ItemCard extends React.Component {
  state = {
    showDetails: false,
  };

  toggleDetailsForCard = () => {
    this.setState({
      showDetails: !this.state.showDetails,
    });
  };

  showDetailsForCard = (i) => <Card i={i} />;

  render() {
    const i = this.props.item;

    const foodAddress = i.name.toLowerCase().split(" ").join("-");
    let itemImage = require(`../item-imgs/${foodAddress}.jpg`);

    return (
      <Segment>
        <Header as="h2">{i.name}</Header>
        <Grid columns={2} >
          <Grid.Row>
            <Grid.Column>
          <Image
            circular
            src={itemImage}
            size="tiny"
          />
          </Grid.Column>
          <Grid.Column>
        {this.state.showDetails ? (
          <>
            {this.showDetailsForCard(i)}
            <button
              className="ui primary button"
              onClick={this.toggleDetailsForCard}
            >
              Hide Details
            </button>
          </>
        ) : (
          <button
            className="ui primary button"
            onClick={this.toggleDetailsForCard}
          >
            Details
          </button>
        )}
            <button className="ui google plus button"
              onClick={() => this.props.deleteItem(i.id)}
            >
              Delete
            </button>
        </Grid.Column>
        </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}
