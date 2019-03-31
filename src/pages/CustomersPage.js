import React, { Component } from "react";
import PageTemplate from "../components/global/PageTemplate";
import Customers from "../components/customers/Customers";
import CustomersHeader from "../components/customers/CustomersHeader"

export default class CustomersPage extends Component {
  render() {
    return <PageTemplate title="Customers" page={Customers} extra={CustomersHeader} />;
  }
}
