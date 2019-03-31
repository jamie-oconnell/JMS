import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "./pages/DashboardPage";
import Customers from "./pages/CustomersPage";
import Sidebar from "./components/global/Sidebar";
import Jobs from "./pages/JobsPage";
import Job from "./pages/JobPage";
import Customer from "./pages/CustomerPage";
import Login from './pages/Login'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Sidebar />
          <main className="main">
            <Switch>
              <Route path="/" component={Dashboard} exact />
              <Route path="/customers" component={Customers} exact />
              <Route path="/customers/:customer" component={Customer} />
              <Route path="/jobs" component={Jobs} exact />
              <Route path="/jobs/:job" component={Job} />
              <Route path="/login" component={Login} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
