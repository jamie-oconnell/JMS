import React, { Component } from "react";
import { Tab} from "semantic-ui-react";
import Axios from 'axios'
import JobsTable from "../jobs/Jobs";

export default class CustomerTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panes: [],
      jobs: []
    };
  }

  componentDidMount() {
    this.setState({
      panes: [
        {
          menuItem: { key: "jobs", icon: "briefcase", content: "Jobs" },
          render: () => (
            <Tab.Pane>
              {this.state.jobs ? <JobsTable data={this.state.jobs} /> : ""}
            </Tab.Pane>
          )
        },
        {
          menuItem: { key: "devices", icon: "laptop", content: "Devices" },
          render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>
        },
        {
          menuItem: { key: "invoices", icon: "file alternate outline", content: "Invoices" },
          render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>
        },
        {
          menuItem: { key: "sms", icon: "comment alternate outline", content: "SMS" },
          render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>
        },
      ]
    });
  }

  findJobs() {
    Axios.get("http://localhost:5000/api/jobs").then(res => {
      this.setState({
        jobs: res.data
      });
    });
  }

  componentDidUpdate(prevProps){
    if (prevProps.customerId !== this.props.customerId){
      this.findJobs();
    };

  }

  render() {
    return (
      <div>
        <Tab menu={{ secondary: true, pointing: true}} panes={this.state.panes} />
      </div>
    );
  }
}
