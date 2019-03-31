import React, { Component } from "react";
import { Statistic, Icon, Card, Image, StatisticGroup } from "semantic-ui-react";
import CustomerTabs from "./CustomerTabs";

export default class Customer extends Component {
  render() {
    const { customer } = this.props;
    return (
      <>
        <div className="customer-header">
          {customer && (
            <Card fluid>
              <Card.Content>
                <Image
                  floated="right"
                  size="mini"
                  src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                />
                <Card.Header>{`${customer.first_name} ${
                  customer.last_name
                }`}</Card.Header>
                <Card.Meta>
                  <Icon name="phone" />
                  {customer.phone}
                </Card.Meta>
                <Card.Meta>
                  <Icon name="mail outline" />
                  {customer.email}
                </Card.Meta>
              </Card.Content>
            </Card>
          )}
          {customer && (
            <Card fluid>
              <Card.Content>
                <StatisticGroup size="small">
                <Statistic >
                  <Statistic.Value>2</Statistic.Value>
                  <Statistic.Label>Open Jobs</Statistic.Label>
                </Statistic>
                <Statistic>
                  <Statistic.Value>10</Statistic.Value>
                  <Statistic.Label>Closed Jobs</Statistic.Label>
                </Statistic>
                </StatisticGroup>
              </Card.Content>
            </Card>
          )}
          {customer && (
            <Card fluid>
              <Card.Content>
                <StatisticGroup size="small">
                <Statistic >
                  <Statistic.Value>2</Statistic.Value>
                  <Statistic.Label>Open Jobs</Statistic.Label>
                </Statistic>
                <Statistic>
                  <Statistic.Value>10</Statistic.Value>
                  <Statistic.Label>Closed Jobs</Statistic.Label>
                </Statistic>
                </StatisticGroup>
              </Card.Content>
            </Card>
          )}
          {/* <div className="customer-actions">
            <Button primary>Edit</Button>
            <Button primary>SMS</Button>
          </div> */}
        </div>
        <CustomerTabs customerId={this.props.customerId} />
      </>
    );
  }
}
