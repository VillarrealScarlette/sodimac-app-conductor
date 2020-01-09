import React, { Component, Fragment } from "react";
//import { Grid, Button, Segment } from "semantic-ui-react";
//import EventList from "../EventList/EventList";
import Group  from '../../../app/img/Group.png';
//import EventForm from "../EventForm/EventForm";
import cuid from "cuid";
//import EventListItem from "../EventList/EventListItem";
import { withRouter } from "react-router-dom";
import { Segment, Grid, Container, Header, Button, Icon } from "semantic-ui-react";



const InRoute = [
    {
    id: "1",
    title: "18257568466495938556",
    city: "Santiago",
    venue: "Juanito Perez 10547, La florida",
    hostedBy: "Dharma Herrera"
    //hostPhotourl: "../../app/Group.png",
    },
    {
    id: "2",
    title: "739448260264854063",
    city: "Santiago",
    venue: "Hernando de Aguirre 2153",
    hostedBy: "Carolina Ribeiro"
    //hostPhotoURL: "https://randomuser.me/api/portraits/lego/2.jpg",
    }
];

class InRoute extends Component {
constructor(props) {
    super(props);
    this.state = {
        events: InRoute,
        isOpen: false
    };
    // this.handleIsOpenToggle = this.handleIsOpenToggle.bind(this);
    // this.cancelFormOpen = this.cancelFormOpen.bind(this);
}


render() {
    const { events, isOpen, selectedEvent } = this.state;
    return (
        <Grid>
            <Grid.Column width={14}>
                {/* <EventList
                events={events}
                //selectEvent={this.handleSelectEvent}
                //deleteEvent={this.handleDeleteEvent}
                /> */}
                 <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header>{event.title}</Item.Header>
                <Item.Description> {event.hostedBy}</Item.Description>
              </Item.Content>
              <span>
                {/* <Icon name="clock" /> {event.date} */}
                <Icon name="marker" /> {event.venue}, {event.city}
              </span>
            </Item>
            </Item.Group>
        </Segment>
      </Segment.Group>
            </Grid.Column>
        </Grid>
    );
    }
}

export default  withRouter(InRoute);





// import EventListAttendee from "../EventList/EventListAttendee";






