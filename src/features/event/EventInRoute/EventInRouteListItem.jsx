import React, { Component } from "react";
import { Segment, Item, Icon, List, Button, Image } from "semantic-ui-react";
// import EventListAttendee from "../EventList/EventListAttendee";
import { withRouter } from "react-router-dom";
class EventInRouteListItem extends Component {
  render() {
    const { event, history } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <button
                className="btn-item"
                onClick={() => history.push("/ordercheck")}
              >
                <Item.Image size="tiny" circular src={event.status} />
              </button>
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

export default withRouter(EventInRouteListItem);
