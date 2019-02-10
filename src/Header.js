import React, { Component } from "react";
import { Menu, Dropdown } from "semantic-ui-react";
import logo from "./logo.png";

export default class Header extends Component {

  render() {
    return (
      <div className="topnav">
        <Menu style={{ border: 0 }}>
          <Menu.Item>
            <img
              className="ui"
              src={logo}
              alt="itshop logo"
              height="25px"
              width="80px"
            />
          </Menu.Item>

          <div className="right menu">
            <Dropdown icon="bell" className="link item white">
              <Dropdown.Menu>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown text="Jamie O'Connell" className="link item white">
              <Dropdown.Menu>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Menu>
      </div>
    );
  }
}
