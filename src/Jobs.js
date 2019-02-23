import React, { Component } from "react";
import { Container, Card } from "semantic-ui-react";
import { settings } from "./DB";
import { Pie } from "react-chartjs-2";
import JobsTable from "./JobsTable";
import {jobs} from './DB'

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

  repairColor(status) {
    return settings.repairStatusColours[status];
  }

  render() {
    return (
      // <Container style={{ display: "flex" }}>
      <>
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
            <JobsTable data={jobs}></JobsTable>
        </Card>
      {/* </Container> */}
      </>
    );
  }
}
