import React, { Component } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
// import EventListAttendee from "../EventList/EventListAttendee";
export default class EveninRoutetListItem extends Component {
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
      </Segment.Group>
    );
  }
}
