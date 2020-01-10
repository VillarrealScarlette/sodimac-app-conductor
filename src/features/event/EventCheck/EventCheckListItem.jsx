import React, { Component } from "react";
import { Segment, Item, Icon, List, Button, Image } from "semantic-ui-react";
// import EventListAttendee from "../EventList/EventListAttendee";
export default class EventCheckListItem extends Component {
  render() {
    const { event, selectEvent, deleteEvent } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={event.status} />
              <Item.Content>
                {/* <span>
                  <Icon name="times circle outline" size="big" color="grey" />

                  <Item.Header>{event.title}</Item.Header>
                </span> */}
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
    );
  }
}
