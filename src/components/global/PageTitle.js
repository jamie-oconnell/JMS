import React, { Component } from "react";

export default class PageTitle extends Component {
  render() {
    const Extra = this.props.extra;
    return (
      <div className="page-title">
        <h1>{this.props.title}</h1>
        {Extra && <Extra />}
      </div>
    );
  }
}
