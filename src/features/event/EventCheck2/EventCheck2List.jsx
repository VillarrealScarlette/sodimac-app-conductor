import React, { Component, Fragment } from "react";
import EventCheck2ListItem from "./EventCheck2ListItem";
import { Segment, Container, Header, Button, Icon } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

class EventCheck2List extends Component {
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
            <EventCheck2ListItem
              key={event.id}
              event={event}
              selectEvent={selectEvent}
              deleteEvent={deleteEvent}
            />
          ))}
          <Container text className="container login">
          <Button
            onClick={() => history.push("/eventcompletedroutedashboard")}
            size="huge"
            className="btn detailsroute"
            inverted
          >
            SIGUIENTE DESTINO
            <Icon name="right arrow" inverted />
          </Button>
          </Container>
        </Container>
      </Segment>
    );
  }
}

export default withRouter(EventCheck2List);
