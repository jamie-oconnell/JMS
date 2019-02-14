import React, { Component } from "react";
import { Card, Header, Container, Label } from "semantic-ui-react"
import { jobs } from './DB'
import JobsTabs from './JobsTabs'

export default class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job: null
    };
  }

  componentDidMount() {
    let jobId = Number(this.props.match.params.job);
    const job = jobs.find(job => {
      return job.id === jobId;
    });
    this.setState({ job: job });
  }
  render() {
    const { job } = this.state;
    return (
      <Container>
      <Card className="fluid">
        {job && (
          <>
            <Header as="h3">{job.title}</Header>
            <span>{job.id}</span>   
            <Label>{job.status}</Label>
          <JobsTabs customerId={job.customerId} customerName={job.customer}/>
          </>
        )}
      </Card>
      </Container>
    )
  }
}
