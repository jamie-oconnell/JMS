import React, { Component } from "react";
import { Table, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { distanceInWordsToNow } from "date-fns";
import {customers} from './DB.js'

const headers = ['Name', 'Phone Number', 'Email', 'Created']

export default class Customers extends Component {
  render() {
    return (
      <Container>
        <Table celled>
          <Table.Header>
            <Table.Row>
              {headers.map((header, index) => {
                return <Table.HeaderCell key={index}>{header}</Table.HeaderCell>
              })}
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
