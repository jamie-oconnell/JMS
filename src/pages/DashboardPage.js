import React, { Component } from "react";
import PageTemplate from "../components/global/PageTemplate";
import Dashboard from "../components/dashboard/Dashboard";

export default class DashboardPage extends Component {
  render() {
    return <PageTemplate title="Dashboard" page={Dashboard} />;
  }
}
