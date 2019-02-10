import React, { Component } from "react";
import {jobs} from './DB'

export default class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: null
    };
  }

  componentDidMount() {
    let jobId = Number(this.props.match.params.job);
    let job = jobs.find(job => {
      return job.id === jobId;
    });
    this.setState({ job: job });
  }
  render() {
    return <div />;
  }
}
