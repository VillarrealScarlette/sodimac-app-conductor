import React, { Component, Fragment } from "react";
import { Grid, Button, Segment } from "semantic-ui-react";
import EventList from "./EventInRouteList";
const eventsFromDashboard = [
  {
    id: "1",
    title: "18257568466495938556",
    status: "https://i.ibb.co/DzMJq0G/icono-en-ruta.png",
    city: "Región Metropolitana",
    venue: "Av. Libertad 987, Santiago Centro",
    hostedBy: "Mariana Muñoz Lara"
  },
  {
    id: "2",
    title: "739448260264854063",
    status: "https://i.ibb.co/nktGQjk/cancelar.png",
    city: "Región Metropolitana",
    venue: "Hernando de Aguirre 2153, Ñuñoa",
    hostedBy: "Isidora Gonzalez Quiroz"
  }
];

class EventInRouteDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: eventsFromDashboard,
      isOpen: false
    };
  }

  render() {
    const { events, isOpen, selectedEvent } = this.state;
    return (
      <Grid>
        <Grid.Column width={14}>
          <EventList events={events} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventInRouteDashboard;
