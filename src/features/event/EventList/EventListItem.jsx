import React, { Component } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from "../EventList/EventListAttendee";
export default class EventListItem extends Component {
  render() {
    const { event, selectEvent, deleteEvent } = this.props;
    return (
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
        {/* <Segment> */}
         
        {/* </Segment> */}
        {/* <Segment secondary>
          <List horizontal>
            {event.attendees &&
              event.attendees.map(attendee => (
                <EventListAttendee key={attendee.id} attendee={attendee} />
              ))}
          </List>
        </Segment> */}
        {/*<Segment clearing>
          //<span>{event.description}</span>
          {/* <Button
            onClick={() => deleteEvent(event.id)}
            as="a"
            color="red"
            floated="right"
            content="Delete"
          />
          <Button
            onClick={() => selectEvent(event)}
            as="a"
            color="teal"
            floated="right"
            content="View"
          /> */}
       {/*} </Segment>*/}
      </Segment.Group>
    );
  }
}
