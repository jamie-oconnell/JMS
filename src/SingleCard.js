import React from "react";
import { Card } from "semantic-ui-react";

export default function SingleCard(props) {
  return <Card fluid>{props.component}</Card>;
}
