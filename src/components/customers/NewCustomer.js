import React, { Component } from "react";
import { Form , Header, Button} from "semantic-ui-react";

export default class NewCustomer extends Component {
  render() {
    return (
        <>
        <Header size='large'>Create Customer</Header>
      <Form>
        <Form.Group widths="equal">
          <Form.Input fluid label="First name" placeholder="First name" />
          <Form.Input fluid label="Last name" placeholder="Last name" />
          <Form.Input fluid label="Business name" placeholder="Business Name" />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input type="email" fluid label="Email" placeholder="Email" />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input fluid label="Phone" placeholder="Phone" />
          <Form.Input fluid label="Alt Phone" placeholder="Alt Phone #" />
        </Form.Group>
        <Button color="green" type="submit">Create New Customer</Button>
      </Form>
      </>
    );
  }
}
