import React, { Component } from "react";
import { Input, Card, List, Button, Icon } from "semantic-ui-react";

export default class Pos extends Component {
  constructor(props) {
    super(props);
    this.updateSelected = this.updateSelected.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.state = {
      items: [
        {
          product: "Iphone 6s LCD",
          priceDefault: 149,
          price: 149,
          options: "White",
          quantity: 1,
          discount: 0,
          markup: 0
        },
        {
          product: "Iphone 6s Screen Protector",
          priceDefault: 24.99,
          price: 24.99,
          quantity: 2,
          discount: 0,
          markup: 0
        }
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

  updateQuantity(e, index) {
    let newVal = Number(e.target.value);
    if (newVal === "") {
      newVal = 0;
    } else if (isNaN(newVal)) {
      newVal = 0;
    }
    this.setState(prevState => {
      const prevItems = prevState.items;
      prevItems[index]["quantity"] = newVal;
      return { items: prevItems };
    });
  }

  updatePrice(e, index) {
    let newVal = e.target.value;
    this.setState(prevState => {
      const prevItems = prevState.items;
      prevItems[index]["price"] = newVal;
      const priceDefault = prevItems[index]["priceDefault"];
      if (newVal > priceDefault) {
        prevItems[index]["markup"] = Number(
          ((newVal - priceDefault) / priceDefault) * 100
        ).toFixed(2);
        prevItems[index]["discount"] = 0;
      } else {
        prevItems[index]["discount"] =
          ((priceDefault - newVal) / priceDefault) * 100;
        prevItems[index]["markup"] = 0;
      }

      return { items: prevItems };
    });
  }

  updateDiscount(e, index) {
    let newVal = e.target.value;
    this.setState(prevState => {
      const prevItems = prevState.items;
      prevItems[index]["discount"] = newVal;
      prevItems[index]["price"] =
        prevItems[index]["priceDefault"] * (1 - newVal / 100);
      return { items: prevItems };
    });
  }

  onBlur(index) {
    this.setState(prevState => {
      const prevItems = prevState.items;
      prevItems[index]["price"] = Number(prevItems[index]["price"]).toFixed(2);
      prevItems[index]["discount"] = Number(
        prevItems[index]["discount"]
      ).toFixed(2);
      prevItems[index]["quantity"] = Number(
        prevItems[index]["quantity"]
      ).toFixed(0);
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
                      <div className="pos-item-price">{`$${item.price *
                        item.quantity}`}</div>
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
                            type="number"
                            onBlur={() => {
                              this.onBlur(index);
                            }}
                            onChange={e => {
                              this.updateQuantity(e, index);
                            }}
                            value={item.quantity}
                          />
                        </div>
                        <div>
                          <label>Price</label>
                          <Input
                            type="number"
                            onBlur={() => {
                              this.onBlur(index);
                            }}
                            onChange={e => {
                              this.updatePrice(e, index);
                            }}
                            value={item.price}
                          />
                        </div>
                        <div>
                          <label>
                            {item.markup === 0 ? "Discount" : "Markup"} (%)
                          </label>
                          <Input
                            type="number"
                            onBlur={() => {
                              this.onBlur(index);
                            }}
                            value={
                              item.markup === 0 ? item.discount : item.markup
                            }
                            disabled={item.markup > 0}
                            onChange={e => {
                              this.updateDiscount(e, index);
                            }}
                          />
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
