import React, { Component } from "react";
import _ from "lodash";
import { distanceInWordsToNow, format } from "date-fns";
import { Table, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Axios from "axios";

const settings = {
  repairStatusColours: {
    "Booked In": "pink",
    "On Bench": "orange",
    "Awaiting Parts": "blue",
    "Awaiting Device": "teal",
    "To Be Ordered": "purple",
    "Ready To Go": "red"
  }
};

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

export default class Jobs extends Component {
  state = {
    column: null,
    direction: null,
    jobs: []
  };

  componentDidMount() {
    Axios.get("http://localhost:5000/api/jobs/current").then(res => {
      this.setState({
        jobs: res.data
      });
      console.log(res)
    });
  }

  handleSort = clickedColumn => () => {
    const { column, jobs, direction } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        jobs: _.sortBy(jobs, [clickedColumn]),
        direction: "ascending"
      });

      return;
    }

    this.setState({
      jobs: this.props.jobs.reverse(),
      direction: direction === "ascending" ? "descending" : "ascending"
    });
  };

  repairColor(status) {
    return settings.repairStatusColours[status];
  }

  render() {
    const { column, direction, jobs } = this.state;
    return (
      <Table style={{margin: '0'}} celled sortable>
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
        {jobs && (
          <Table.Body>
            {jobs.map(job => {
              return (
                <Table.Row key={job.id}>
                  <Table.Cell collapsing>{job.id}</Table.Cell>
                  <Table.Cell>
                    <Link to={`/customers/${job.customer_id}`}>
                      {job.customer_name}
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <Link to={`/jobs/${job._id}`}>{job.issue}</Link>
                  </Table.Cell>
                  <Table.Cell>{job.device_name}</Table.Cell>
                  <Table.Cell>
                    <Label
                      className="fluid"
                      style={{ textAlign: "center" }}
                      as="a"
                      color={this.repairColor(job.status)}
                    >
                      {job.status}
                    </Label>
                  </Table.Cell>
                  <Table.Cell>{`${format(
                    job.dueDate,
                    "DD/MM/YYYY"
                  )}`}</Table.Cell>
                  <Table.Cell>{`${distanceInWordsToNow(
                    job.created
                  )} ago`}</Table.Cell>
                  <Table.Cell>{`${distanceInWordsToNow(
                    job.last_update
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
