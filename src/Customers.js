import React, { Component } from "react";
import { Table, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { distanceInWordsToNow } from "date-fns";
import {customers} from './DB.js'


export default class Customers extends Component {
  render() {
    return (
      <Container>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Phone Number</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Created</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {customers.map(customer => {
              return (
                <Table.Row key={customer.id}>
                  <Table.Cell>
                    <Link to={`/customers/${customer.id}`}>
                      {customer.name}
                    </Link>{" "}
                  </Table.Cell>
                  <Table.Cell>{customer.phone}</Table.Cell>
                  <Table.Cell>
                    <a href={`mailto:${customer.email}`}>{customer.email}</a>
                  </Table.Cell>
                  <Table.Cell>
                    {`${distanceInWordsToNow(new Date(customer.created))} ago`}
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </Container>
    );
  }
}
