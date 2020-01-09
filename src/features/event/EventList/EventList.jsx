import React, { Component, Fragment } from "react";
import EventListItem from "./EventListItem";
import {
  Segment,
  Container,
  Header,
  Button,
  Icon,
} from "semantic-ui-react";

class EventList extends Component {
  render() {
    const { events, selectEvent, deleteEvent } = this.props;
    return (
      <Fragment >
       <Container text className="details">
        <Header as="h3" inverted className="header text"> 
          Ruta Nº 2222 - 08/01/2020
        </Header>
        </Container>
        {events.map(event => (
          <EventListItem
            key={event.id}
            event={event}
            selectEvent={selectEvent}
            deleteEvent={deleteEvent}
          />
        ))}
        <container className="btnGo">
          <Button   inverted>COMENZAR</Button>
        </container>
      </Fragment>
    );
  }
}

export default EventList;
