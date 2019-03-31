import React, { Component } from "react";
import { Table, Loader } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { distanceInWordsToNow } from "date-fns";
import {getAllCustomers} from '../../store/actions/customerActions'
import {connect} from 'react-redux'

const headers = ["Name", "Phone Number", "Email", "Created"];

class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    this.props.getAllCustomers();
  }

  render() {

    const { customers } = this.props;

    return (
      <>
        <Table celled compact>
          <Table.Header>
            <Table.Row>
              {headers.map((header, index) => {
                return (
                  <Table.HeaderCell key={index}>{header}</Table.HeaderCell>
                );
              })}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {customers.length !== 0 ? (
              customers.map(customer => {
                return (
                  <Table.Row key={customer._id}>
                    <Table.Cell>
                      <Link to={`/customers/${customer._id}`}>
                        {`${customer.first_name} ${customer.last_name}`}
                      </Link>
                    </Table.Cell>
                    <Table.Cell>{customer.phone}</Table.Cell>
                    <Table.Cell>
                      <a href={`mailto:${customer.email}`}>{customer.email}</a>
                    </Table.Cell>
                    <Table.Cell>
                      {`${distanceInWordsToNow(
                        new Date(customer.created)
                      )} ago`}
                    </Table.Cell>
                  </Table.Row>
                );
              })
            ) : (
              <Table.Row>
                <Table.Cell
                  style={{ textAlign: 'center'}}
                  colSpan = {4}
                >
                  <Loader inline active>
                    Loading
                  </Loader>
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
        </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    customers: state.customer.customers
  }
}

export default connect(mapStateToProps, {getAllCustomers})(Customers);
