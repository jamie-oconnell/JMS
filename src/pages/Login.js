import React, { Component } from "react";
import { Form, Button, Container , Input} from "semantic-ui-react";

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Form>
          <Form.Field>
            <label>Username</label>
            <Input type="text" icon="user" iconPosition='left' placeholder="Username" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Input icon="lock" iconPosition="left" type="Password" placeholder="Password" />
          </Form.Field>
          <Button color="blue" type="submit">Log In</Button>
        </Form>
      </Container>
    );
  }
}
