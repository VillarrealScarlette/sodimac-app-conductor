import React, { Component, Fragment } from "react";
import EventListItem from "./EventListItem";
import AlertDialog from "../../../modal/AlertDialog";
import { Segment, Container, Header, Button, Icon } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

class EventList extends Component {
  render() {
    const route = JSON.parse(localStorage.getItem('Route'));
    const { events, selectEvent, deleteEvent, history } = this.props;

    return (
      <Segment inverted textAlign="center" vertical className="masthead">
        <Header as="h3" inverted className="header text">
          Ruta Nº {route} - 10/01/2020
        </Header>
        <Container>
          {events.map(event => (
            <EventListItem
              key={event.id}
              event={event}
              selectEvent={selectEvent}
              deleteEvent={deleteEvent}
            />
          ))}
          <Container text className="container login">
            <AlertDialog/>
          </Container>
          {/* <Button className="btnGo" inverted></Button> */}
        </Container>
      </Segment>
    );
  }
}

export default withRouter(EventList);
