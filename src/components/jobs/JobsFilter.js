import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";

const DateFilter = () => (
  <Form>
    <Form.Group grouped>
      <Form.Field>
        <label>From</label>
        <DateInput
          name="date"
          placeholder="Date"
          iconPosition="left"
          popupPosition="bottom left"
        />
      </Form.Field>
      <Form.Field>
        <label>To</label>
        <DateInput
          name="date"
          placeholder="Date"
          iconPosition="left"
          popupPosition="bottom left"
        />
      </Form.Field>
    </Form.Group>
  </Form>
);

export default class JobsFilter extends Component {
  render() {
    return <DateFilter />;
  }
}
