import React, { Component } from "react";
import { Tab } from "semantic-ui-react";

const panes = [
  { menuItem: "Jobs", render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
  { menuItem: "SMS", render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: "Invoices", render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> }
];

export default class CustomerTabs extends Component {
  render() {
    return (
      <div>
        <Tab panes={panes} />
      </div>
    );
  }
}
