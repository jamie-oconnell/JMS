import React, { Component } from "react";
import { Input, Card, List, Button, Icon } from "semantic-ui-react";

export default class Pos extends Component {
  constructor(props) {
    super(props);
    this.updateSelected = this.updateSelected.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.state = {
      items: [
        { product: "Iphone 6s LCD", price: 149, options: "White", quantity: 1 },
        { product: "Iphone 6s Screen Protector", price: 24.99, quantity: 2 }
      ],
      currentlyOpen: null
    };
  }

  updateSelected(index) {
    if (index === this.state.currentlyOpen) {
      this.setState({ currentlyOpen: null });
    } else {
      this.setState({ currentlyOpen: index });
    }
  }

  removeItem(index) {
    this.setState(prevState => {
      const prevItems = prevState.items;
      prevItems.splice(index, 1);
      return { items: prevItems };
    });
  }

  updateValue(e, index) {
    let newVal = Number(e.target.value);
    if (newVal === "") {
      newVal = 0;
    } else if (isNaN(newVal)) {
      newVal = 0;
    }
    this.setState(prevState => {
      const prevItems = prevState.items;
      prevItems[index].quantity = newVal;
      return { items: prevItems };
    });
  }

  render() {
    return (
      <>
        <div className="pos">
          <div className="pos-left">
            <Input fluid icon="search" placeholder="Start typing to search.." />
            <div className="pos-products">
              <Card>Product</Card>
              <Card>Product</Card>
              <Card>Product</Card>
              <Card>Product</Card>
              <Card>Product</Card>
              <Card>Product</Card>
              <Card>Product</Card>
              <Card>Product</Card>
              <Card>Product</Card>
              <Card>Product</Card>
              <Card>Product</Card>
              <Card>Product</Card>
            </div>
          </div>
          <div className="pos-right">
            <Input
              fluid
              icon="users"
              iconPosition="left"
              placeholder="Add a customer..."
            />
            <List celled selection verticalAlign="middle" style={{ flex: "1" }}>
              {this.state.items.map((item, index) => {
                return (
                  <List.Item
                    key={index}
                    className={`pos-item ${
                      index === this.state.currentlyOpen ? "expanded" : ""
                    }`}
                  >
                    <div
                      onClick={() => {
                        this.updateSelected(index);
                      }}
                      className="pos-item-content"
                    >
                      <div className="pos-item-quantity">{item.quantity}</div>
                      <div style={{ flex: "1" }}>
                        <List.Header>{item.product}</List.Header>
                        <List.Content>{item.options}</List.Content>
                      </div>
                      <div className="pos-item-price">{`$${item.price * item.quantity}`}</div>
                      <Button
                        onClick={() => {
                          this.removeItem(index);
                        }}
                        className="pos-item-delete"
                      >
                        <Icon name="trash alternate" />
                      </Button>
                    </div>
                    <div
                      className={`pos-item-actions ${
                        index !== this.state.currentlyOpen ? "hidden" : ""
                      }`}
                    >
                      <div className="pos-actions-top">
                        <div>
                          <label>Quantity</label>
                          <Input
                            onChange={e => {
                              this.updateValue(e, index);
                            }}
                            value={item.quantity}
                          />
                        </div>
                        <div>
                          <label>Price</label>
                          <Input value={item.price} />
                        </div>
                        <div>
                          <label>Discount (%)</label>
                          <Input />
                        </div>
                      </div>
                      <div className="pos-actions-bottom">
                        <div>
                          <label>Notes</label>
                          <Input placeholder="Type to add a note..." />
                        </div>
                      </div>
                    </div>
                  </List.Item>
                );
              })}
            </List>
            <Button color="green">Purchase</Button>
          </div>
        </div>
      </>
    );
  }
}
