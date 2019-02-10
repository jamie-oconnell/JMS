import React, { Component } from "react";
import { Card, Header, Container, Button } from "semantic-ui-react";
import {customers} from "./DB";
import CustomerTabs from "./CustomerTabs";

export default class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: null
    };
  }

  componentDidMount() {
    let customerId = Number(this.props.match.params.customer);
    let customer = customers.find(customer => {
      return customer.id === customerId;
    });
    this.setState({ customer: customer });
  }

  render() {
    const { customer } = this.state;
    return (
      <Container>
        <Card style={{ width: "100%" }}>
          <div className="customer-header">
            <div className="customer-details">
              {customer ? (
                <>
                  <Header as="h2">{customer.name}</Header>
                  <span onChange={this.handleChange}>{customer.phone}</span>
                  <span>{customer.email}</span>
                </>
              ) : (
                ""
              )}
            </div>
            <div className="customer-actions">
              <Button primary>Primary</Button>
            </div>
          </div>
          <CustomerTabs />
        </Card>
      </Container>
    );
  }
}
