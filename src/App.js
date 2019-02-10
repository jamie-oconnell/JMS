import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Dashboard from "./Dashboard";
import Customers from "./Customers";
import Customer from "./Customer";
import Sidebar from "./Sidebar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Sidebar />
          <div className="main">
            <Switch>
              <Route path="/" component={Dashboard} exact />
              <Route path="/customers" component={Customers} exact />
              <Route path="/customers/:customer" component={Customer} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
