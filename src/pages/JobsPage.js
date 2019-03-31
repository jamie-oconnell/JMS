import React, { Component } from "react";
import PageTemplate from "../components/global/PageTemplate";
import Jobs from "../components/jobs/Jobs";
import JobsFilter from "../components/jobs/JobsFilter";
import JobsHeader from "../components/jobs/JobsHeader";

export default class JobsPage extends Component {
  render() {
    return <PageTemplate extra={JobsHeader} title="Jobs" page={Jobs} sidebar={JobsFilter} />;
  }
}
