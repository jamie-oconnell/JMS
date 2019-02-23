import React, { Component } from "react";
import { Card, Header, Container, Button, Icon } from "semantic-ui-react";
import { customers } from "./DB";
import CustomerTabs from "./CustomerTabs";

export default class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: null,
      customerId: null
    };
  }

  componentDidMount() {
    let customerId;
    this.props.match
      ? customerId = Number(this.props.match.params.customer)
      : customerId = this.props.id

    this.setState({customerId : customerId})

    const customer = customers.find(customer => {
      return customer.id === customerId;
    });

    this.setState({ customer: customer });
  }

  render() {
    const { customer } = this.state;
    return (
      <Container>
          <div className="customer-header">
            <div className="customer-details">
              {customer && (
                <>
                  <Header as="h2">{customer.name}</Header>
                  <span onChange={this.handleChange}><Icon name="phone"></Icon>{customer.phone}</span>
                  <span><Icon name="mail outline"></Icon>{customer.email}</span>
                </>
              )}
            </div>
            <div className="customer-actions">
              <Button primary>Edit</Button>
              <Button primary>SMS</Button>
            </div>
          </div>
          <CustomerTabs customerId={this.state.customerId}/>
      </Container>
    );
  }
}
