import React, { Component, Fragment } from "react";
import EventListItem from "./EventListItem";
import { Segment, Container, Header, Button, Icon } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

class EventList extends Component {
  render() {
    const { events, selectEvent, deleteEvent, history } = this.props;
    return (
      <Segment inverted textAlign="center" vertical className="masthead">
        <Header as="h3" inverted className="header text">
          Ruta Nº 2222 - 08/01/2020
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
            <Button
              onClick={() => history.push("/routetime")}
              className="btnAceptar"
              size="huge"
              inverted
            >
              COMENZAR
              <Icon name="right arrow" inverted />
            </Button>
          </Container>
          {/* <Button className="btnGo" inverted></Button> */}
        </Container>
      </Segment>
    );
  }
}

export default withRouter(EventList);
