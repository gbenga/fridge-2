import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const CardExampleCard = (props) => (
  <Card>
    <Card.Content>
      <Card.Header>{props.i.category}</Card.Header>
      <Card.Meta>
        <span className="date">Price: {props.i.price}</span>
      </Card.Meta>
      <Card.Description>Quantity: {props.i.quantity}</Card.Description>
      <Card.Description>Purchased: {props.i.purchased}</Card.Description>
      <Card.Description>Expires: {props.i.expires}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        `Bought by user: {props.i.user_id}`
      </a>
    </Card.Content>
  </Card>
);

export default CardExampleCard;
