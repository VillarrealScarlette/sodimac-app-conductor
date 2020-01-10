import React, { Component, Fragment } from "react";
import { Grid, Button, Segment } from "semantic-ui-react";
import EventCheck2List from "./EventCheck2List";
const eventsFromDashboard = [
  {
    id: "1",
    title: "18255684",
    status: "https://i.ibb.co/w6Bnd7h/check.png",
    city: "Región Metropolitana",
    venue: "Av. Libertad 987, Santiago Centro",
    hostedBy: "Mariana Muñoz Lara"
  },
  {
    id: "2",
    title: "73944826",
    status: "https://i.ibb.co/nktGQjk/cancelar.png",
    city: "Región Metropolitana",
    venue: "Hernando de Aguirre 2153, Ñuñoa",
    hostedBy: "Isidora Gonzalez Quiroz"
  }
];

class EventCheck2Dashboard extends Component {
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
          <EventCheck2List events={events} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventCheck2Dashboard;
