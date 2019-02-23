import React, { Component } from "react";
import { Input, List, Button, Icon } from "semantic-ui-react";
import { productRequests } from "./DB";

export default class ProductRequests extends Component {
  constructor(props) {
    super(props);
    this.viewAll = this.viewAll.bind(this);
    this.state = {
      products: productRequests,
      itemsToShow: 3,
      drawer: "closed"
    };
  }

  viewAll() {
    if (this.state.itemsToShow === productRequests.length) {
      this.setState({
        itemsToShow: 3,
        drawer: "closed"
      });
    } else {
      this.setState({
        itemsToShow: productRequests.length,
        drawer: "open"
      });
    }
  }

  render() {
    return (
      <div>
        <Input
          fluid
          action={{ content: "Add", color: "pink" }}
          placeholder="Type product request..."
        />
        <List divided>
          {productRequests.slice(0, this.state.itemsToShow).map(request => {
            return (
              <List.Item style={{ display: "flex", alignItems: "center" }}>
                <List.Content style={{ flex: 1 }}>{request.name}</List.Content>
                <List.Content>
                  <Button.Group icon>
                    <Button>
                      <Icon name="minus" />
                    </Button>
                    <Button>{request.quantity}</Button>
                    <Button>
                      <Icon name="plus" />
                    </Button>
                  </Button.Group>
                </List.Content>
              </List.Item>
            );
          })}
        </List>
        <div style={{textAlign: 'center'}}>
          <Button onClick={this.viewAll}>
            {this.state.drawer === "open" ? "Close" : "View All"}
          </Button>
        </div>
      </div>
    );
  }
}
