import React, { Component } from "react";
import { Input , Divider} from "semantic-ui-react";

export default class QuickMenu extends Component {
  render() {
    return (
      <div>
        <Input
          action={{ color: "blue", content: "Find" }}
          icon="search"
          iconPosition="left"
          placeholder="Job #"
          fluid
        />
         <Divider horizontal>Or</Divider>
         <Input
          action={{ color: "teal", content: "Search" }}
          icon="search"
          iconPosition="left"
          placeholder="Customer name or phone number"
          fluid
        />
      </div>
    );
  }
}
