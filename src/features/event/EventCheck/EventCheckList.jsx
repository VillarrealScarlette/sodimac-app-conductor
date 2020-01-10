import React, { Component, Fragment } from "react";
import EventCheckListItem from "./EventCheckListItem";
import { Segment, Container, Header, Button, Icon } from "semantic-ui-react";
import AlertDialog2 from "../../../modal/AlertDialog2";
import { withRouter } from "react-router-dom";

class EventCheckList extends Component {
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
            <EventCheckListItem
              key={event.id}
              event={event}
              selectEvent={selectEvent}
              deleteEvent={deleteEvent}
            />
          ))}
          <Container text className="container login">
          <AlertDialog2/>
          </Container>
        </Container>
      </Segment>
    );
  }
}

export default withRouter(EventCheckList);
