import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <NavLink to="/" className="menu-link" exact>
          <Icon name="home" />
        </NavLink>
        <NavLink to="/jobs" className="menu-link">
          <Icon name="briefcase" />
        </NavLink>
        <NavLink to="/customers" className="menu-link">
          <Icon name="users" />
        </NavLink>
      </div>
    );
  }
}
