import React, { Component } from "react";
import PageTemplate from "../components/global/PageTemplate";
import CustomerComponent from "../components/customers/Customer";
import Axios from "axios";

export default class CustomerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: null
    };
  }

  componentDidMount() {
    let customerId = this.props.match.params.customer;

    Axios.get(`http://localhost:5000/api/customers/${customerId}`).then(res => {
      this.setState({
        customer: res.data
      });
    });
  }

  render() {
    const Customer = () => {
      return <CustomerComponent customer={this.state.customer} />;
    };
    return (
      this.state.customer && (
        <PageTemplate title={`${this.state.customer.first_name} ${this.state.customer.last_name}` } page={Customer} />
      )
    );
  }
}
