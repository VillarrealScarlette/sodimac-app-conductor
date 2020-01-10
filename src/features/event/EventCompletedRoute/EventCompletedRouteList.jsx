import React, { Component, Fragment } from "react";
import AlertDone from "../../../modal/AlertDone";
import EventCompletedRouteListItem from "./EventCompletedRouteListItem";
import { Segment, Container, Header, Button, Icon } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

class EventCompletedRouteList extends Component {
  render() {
    const route = JSON.parse(localStorage.getItem("Route"));
    const { events, selectEvent, deleteEvent, history } = this.props;

    return (
      <Segment inverted textAlign="center" vertical className="masthead">
        <Header as="h3" inverted className="header text">
          Ruta Nº {route} - 10/01/2020
        </Header>
        <Container>
          {events.map(event => (
            <EventCompletedRouteListItem
              key={event.id}
              event={event}
              selectEvent={selectEvent}
              deleteEvent={deleteEvent}
            />
          ))}
          <Container text className="container login">
          <AlertDone />
          </Container>
        </Container>
      </Segment>
    );
  }
}

export default withRouter(EventCompletedRouteList);
