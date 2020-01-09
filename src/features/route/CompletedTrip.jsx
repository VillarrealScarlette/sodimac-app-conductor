import React from "react";
import {
  Segment,
  Container,
  Button,
  Icon,
  Image
} from "semantic-ui-react";
import AlertDialog from "../../modal/AlertDialog";
import { withRouter } from "react-router-dom";

function CompletedTrip({ history }) {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
          <Image
            size="massive"
            src="/assets/background-map.png"
            alt="map"
            id="img-map"
            style={{ marginBottom: 20 }}
          />
          <AlertDialog />
        <Container text className="container login">
            <Button onClick={() => history.push("/")} size="huge" inverted>
            OK
            <Icon name="right arrow" inverted />
          </Button>
        </Container>
      </Container>
    </Segment>
  );
}

export default withRouter(CompletedTrip);

