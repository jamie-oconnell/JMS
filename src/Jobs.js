import React, { Component } from "react";
import { Table, Container, Label, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { jobs, settings } from "./DB";
import { distanceInWordsToNow } from "date-fns";
import { Pie } from "react-chartjs-2";
import _ from "lodash";

const chartData = {
  datasets: [
    {
      data: [4, 5, 10, 12],
      backgroundColor: [
        "rgba(255, 99, 132)",
        "#cf590c",
        "rgba(255, 206, 86)",
        "rgba(75, 192, 192)",
        "rgba(153, 102, 255)",
        "rgba(255, 159, 64)"
      ]
    }
  ],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ["Booked In", "On Bench", "Waiting Parts", "Awaiting Pickup"]
};

const headers = [
  "Job #",
  "Customer",
  "Issue",
  "Device",
  "Status",
  "Due Date",
  "Created",
  "Last Update"
];

export default class Customers extends Component {
  state = {
    column: null,
    data: jobs,
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
      data: data.reverse(),
      direction: direction === "ascending" ? "descending" : "ascending"
    });
  };

  repairColor(status) {
    return settings.repairStatusColours[status];
  }

  render() {
    const { column, direction, data } = this.state;
    return (
      <Container style={{ display: "flex" }}>
        <Card>
          <Pie
            data={chartData}
            width={100}
            height={200}
            options={{
              maintainAspectRatio: false
            }}
          />
        </Card>

        <Card fluid>
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
            <Table.Body>
              {data.map(job => {
                return (
                  <Table.Row key={job.id}>
                    <Table.Cell>{job.id}</Table.Cell>
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
                      <Label as="a" color={this.repairColor(job.status)} ribbon>
                        {job.status}
                      </Label>
                    </Table.Cell>
                    <Table.Cell>{job.dueDate}</Table.Cell>
                    <Table.Cell>{`${distanceInWordsToNow(
                      job.created
                    )} ago`}</Table.Cell>
                    <Table.Cell>{`${distanceInWordsToNow(
                      job.lastUpdate
                    )} ago`}</Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </Card>
      </Container>
    );
  }
}
