import React, { Component } from "react";
import {Header, Label } from "semantic-ui-react";
import JobsTabs from "./JobsTabs";

export default class Job extends Component {
  render() {
    const { job } = this.props;
    return (
      <div>
        {job && (
          <>
            <Header as="h3">{job.issue}</Header>
            <span>{job.id}</span>
            <Label>{job.status}</Label>
            <JobsTabs customerId={job.customerId} customerName={job.customer} />
          </>
        )}
      </div>
    );
  }
}
