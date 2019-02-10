import React, { Component } from "react";
import { Table, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { jobs } from "./DB";
import { distanceInWordsToNow } from "date-fns";
import { Pie } from "react-chartjs-2";

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

export default class Customers extends Component {
  render() {
    return (
      <Container>
        <Pie data={chartData} />
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Job #</Table.HeaderCell>
              <Table.HeaderCell>Customer</Table.HeaderCell>
              <Table.HeaderCell>Issue</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Due Date</Table.HeaderCell>
              <Table.HeaderCell>Created</Table.HeaderCell>
              <Table.HeaderCell>Last Update</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {jobs.map(job => {
              return (
                <Table.Row key={job.id}>
                  <Table.Cell>{job.id}</Table.Cell>
                  <Table.Cell>
                    <Link to={`/customers/${job.customerId}`}>
                      {job.customer}
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <Link to={`/jobs/${job.id}`}>{job.title}</Link>
                  </Table.Cell>
                  <Table.Cell>{job.status}</Table.Cell>
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
      </Container>
    );
  }
}
