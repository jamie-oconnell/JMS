import React, { Component } from "react";
import { Feed } from "semantic-ui-react";

export default class Notes extends Component {
  render() {
    return (
      <Feed>
        <Feed.Event>
          <Feed.Label>
            <img alt="dummy" src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary>
              <Feed.User>Elliot Fu</Feed.User> added and update
              <Feed.Date>1 Hour Ago</Feed.Date>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

      
      </Feed>
    );
  }
}
