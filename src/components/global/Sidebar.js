import React, { Component } from "react";
import { Icon, Popup, Label } from "semantic-ui-react";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="logo-container">
          <img
            className="ui"
            src={logo}
            alt="itshop logo"
            height="40px"
            width="40px"
          />
        </div>
        <div className="top">
          <Popup
            size="small"
            position="right center"
            trigger={
              <NavLink to="/" className="menu-link" exact>
                {/* <Icon name="home" /> */}
                <i className="typcn typcn-home-outline" />
              </NavLink>
            }
            content="Dashboard"
          />
          <Popup
            size="small"
            position="right center"
            trigger={
              <NavLink to="/jobs" className="menu-link" exact>
                {/* <Icon name="briefcase" /> */}
                <i className="typcn typcn-briefcase" />
              </NavLink>
            }
            content="Jobs"
          />
          <Popup
            size="small"
            position="right center"
            trigger={
              <NavLink to="/customers" className="menu-link">
                {/* <Icon name="users" /> */}
                <i className="typcn typcn-user-outline" />
              </NavLink>
            }
            content="Customers"
          />
          <Popup
            size="small"
            position="right center"
            trigger={
              <NavLink to="/devices" className="menu-link">
                {/* <Icon name="users" /> */}
                <i className="typcn typcn-device-laptop" />
              </NavLink>
            }
            content="Devices"
          />
          <Popup
            size="small"
            position="right center"
            trigger={
              <NavLink to="/orders" className="menu-link">
                {/* <Icon name="shipping" /> */}
                <i className="typcn typcn-plane-outline" />
              </NavLink>
            }
            content="Orders"
          />
        </div>

        <div className="bottom">
          <Popup
            size="small"
            position="right center"
            trigger={
              <NavLink to="/settings" className="menu-link">
                <Icon name="setting" />
              </NavLink>
            }
            content="Settings"
          />

          <NavLink to="/" className="menu-link">
            <Label circular color="grey">
              JO
            </Label>
          </NavLink>
        </div>
      </div>
    );
  }
}
