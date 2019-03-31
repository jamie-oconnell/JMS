import React, { Component } from "react";
import { Tab, Form, TextArea } from "semantic-ui-react";
import Customer from "../customers/Customer";
import Notes from "./Notes";

export default class JobsTabs extends Component {
  render() {
    const panes = [
      { menuItem: "Device", render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
      {
        menuItem: this.props.customerName,
        render: () => (
          <Tab.Pane>
            <Customer id={this.props.customerId} />
          </Tab.Pane>
        )
      },
      {
        menuItem: "Notes",
        render: () => (
          <Tab.Pane>
            <Form>
              <TextArea autoHeight placeholder="Try adding multiple lines" />
            </Form>
            <Notes />
          </Tab.Pane>
        )
      },
      {
        menuItem: "Part Orders",
        render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>
      }
    ];
    return (
      <div>
        <Tab panes={panes} />
      </div>
    );
  }
}
