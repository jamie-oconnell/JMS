import React, { Component } from "react";
import PageTitle from "./PageTitle";
import PageSidebar from "./PageSidebar";

export default class PageTemplate extends Component {
  render() {
    const {extra ,title, sidebar} = this.props;
    const Page = this.props.page;
    return (
      <>
        <PageTitle title={title} extra={extra} />
        {sidebar && 
        <PageSidebar content={sidebar} />}
        <div style={{width:'100%', padding: '20px'}}>
          <Page />
        </div>
      </>
    );
  }
}
