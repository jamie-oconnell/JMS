import React, { Component } from "react";
import _ from "lodash";
import { distanceInWordsToNow, format } from "date-fns";
import { Table, Label,} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { settings } from "./DB";

const headers = [
  "#",
  "Customer",
  "Issue",
  "Device",
  "Status",
  "Due Date",
  "Created",
  "Last Updated"
];

export default class JobsTable extends Component {
  state = {
    column: null,
    direction: null
  };

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: "ascending"
      });

      return;
    }

    this.setState({
      data: this.props.data.reverse(),
      direction: direction === "ascending" ? "descending" : "ascending"
    });
  };

  repairColor(status) {
    return settings.repairStatusColours[status];
  }

  render() {
    const { column, direction } = this.state;
    const { data } = this.props;
    return (
      <Table celled sortable striped>
        <Table.Header>
          <Table.Row>
            {headers.map((header, index) => {
              return (
                <Table.HeaderCell 
                  key={index}
                  sorted={column === header ? direction : null}
                  onClick={this.handleSort(header)}
                >
                  {header}
                </Table.HeaderCell>
              );
            })}
          </Table.Row>
        </Table.Header>
        {data && (
          <Table.Body>
            {data.map(job => {
              return (
                <Table.Row key={job.id}>
                  <Table.Cell collapsing>{job.id}</Table.Cell>
                  <Table.Cell>
                    <Link to={`/customers/${job.customerId}`}>
                      {job.customer}
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <Link to={`/jobs/${job.id}`}>{job.issue}</Link>
                  </Table.Cell>
                  <Table.Cell>{job.device}</Table.Cell>
                  <Table.Cell>
                    <Label className="fluid" style={{textAlign: 'center'}} as="a" color={this.repairColor(job.status)}>
                      {job.status}
                    </Label>
                  </Table.Cell>
                  <Table.Cell >{`${format(job.dueDate, 'DD/MM/YYYY')}`}</Table.Cell>
                  <Table.Cell >{`${distanceInWordsToNow(
                    job.created
                  )} ago`}</Table.Cell>
                  <Table.Cell >{`${distanceInWordsToNow(
                    job.lastUpdate
                  )} ago`}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        )}
      </Table>
    );
  }
}
