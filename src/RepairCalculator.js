import React, { Component } from "react";
import { Header, Dropdown, List, Label } from "semantic-ui-react";
import devices from "./devices";

export default class RepairCalculator extends Component {
  constructor(props) {
    super(props);
    this.handleDeviceChange = this.handleDeviceChange.bind(this);
    this.handleRepairChange = this.handleRepairChange.bind(this);
    this.addRepair = this.addRepair.bind(this);
    this.state = {
      deviceSelected: null,
      currentValue: null,
      totalPrice: 0,
      repairsSelected: [],
      repairValue: [],
      repairDisabled: true
    };
  }

  handleDeviceChange(e, { value }) {
    this.setState({
      deviceSelected: value,
      repairValue: [],
      repairsSelected: [],
      repairDisabled: false
    });
  }

  findRepairPrice(val) {
    return devices
      .find(device => {
        return device.name === this.state.deviceSelected;
      })
      .repairs.find(repair => {
        return repair.name === val;
      });
  }

  handleRepairChange(e, { value }) {
    this.setState({ repairValue: value });
    if (value.length === 0) {
      this.setState({
        totalPrice: 0,
        repairsSelected: []
      });
    } else {
      this.addRepair(value);
    }
  }

  calculateTotal() {
    if (this.state.repairsSelected.length !== 0) {
      return this.state.repairsSelected
        .map(repair => {
          return repair.price;
        })
        .reduce((total, amount) => total + amount);
    } else {
      return 0;
    }
  }

  addRepair(value) {
    let array = [];
    const highestValue = Math.max(
      ...value.map(val => {
        return this.findRepairPrice(val)["price-primary"];
      })
    );
    value.forEach(val => {
      const repairPrice = this.findRepairPrice(val);
      let priceType;
      if (
        repairPrice["price-primary"] === highestValue &&
        array.filter(item => {
          return item.price === highestValue;
        }).length === 0
      ) {
        priceType = "price-primary";
      } else if (repairPrice["price-secondary"] === undefined) {
        priceType = "price-primary";
      } else {
        priceType = "price-secondary";
      }

      array.push({
        name: `${repairPrice["name"]}`,
        price: repairPrice[priceType],
        priceType: priceType === "price-primary" ? "Primary" : "Additional"
      });
      this.setState({
        repairsSelected: array.sort((a, b) => b.price - a.price)
      });
    });
  }

  filterDevice() {
    if (!this.state.deviceSelected) {
      return [];
    } else {
      return devices
        .find(device => {
          return device.name === this.state.deviceSelected;
        })
        .repairs.map(repair => {
          return { text: repair.name, value: repair.name };
        });
    }
  }

  render() {
    return (
      <div>
        <Header as="h3">Repair Calculator</Header>
        <label>Device</label>
        <div>
          <Dropdown
            className="selection"
            onChange={this.handleDeviceChange}
            placeholder="Select Device"
            value={this.state.deviceSelected}
            fluid
            search
            selection
            options={devices.map(device => {
              return { text: device.name, value: device.name };
            })}
            style={{ marginBottom: "10px" }}
          />
        </div>

        <label>Repairs Needed</label>
        <div>
          <Dropdown
            search
            selection
            clearable
            disabled={this.state.repairDisabled}
            fluid
            multiple
            value={this.state.repairValue}
            onChange={this.handleRepairChange}
            options={this.filterDevice()}
          />
        </div>

        <List divided>
          {this.state.repairsSelected.map((repair, index) => {
            return (
              <List.Item
                key={index}
                style={{ display: "flex", fontWeight: "bold" }}
              >
                <div style={{ flex: "1" }}>
                  {`${repair.name}`}

                  <Label
                    className="horizontal-right"
                    size="mini"
                    color={repair.priceType === "Primary" ? "blue" : "red"}
                  >
                    {repair.priceType}
                  </Label>
                </div>
                <div className="">{`$${repair.price}`}</div>
              </List.Item>
            );
          })}

          <List.Item style={{ display: "flex", fontWeight: "bold" }}>
            <div style={{ flex: "1" }}>Total</div>
            <div className="">{`$${this.calculateTotal()}`}</div>
          </List.Item>
        </List>
      </div>
    );
  }
}
