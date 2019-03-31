import React, { Component } from 'react'

export default class PageSidebar extends Component {
  render() {
    const Content = this.props.content;

    return (
      <div className="page-sidebar">
        <Content />
      </div>
    )
  }
}
