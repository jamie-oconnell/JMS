import React, { Component } from "react";
import PageTemplate from "../components/global/PageTemplate";
import JobComponent from "../components/jobs/Job";
import Axios from "axios";

export default class JobsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job: null
    };
  }

  componentDidMount() {
    let jobId = this.props.match.params.job;

    Axios.get(`http://localhost:5000/api/jobs/${jobId}`).then(res => {
      this.setState({
        job: res.data
      });
    });
  }

  render() {
    const Job = () => {
      return <JobComponent job={this.state.job} />;
    };
    return (
      this.state.job && <PageTemplate title={this.state.job._id} page={Job} />
    );
  }
}
