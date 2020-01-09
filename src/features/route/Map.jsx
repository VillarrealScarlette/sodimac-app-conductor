import React from "react";
import { Segment, Container, Button, Icon, Image } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

function Map({ history }) {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Image
          size="massive"
          src="/assets/mapa-02.svg"
          alt="map"
          id="img-map"
          style={{ marginBottom: 20 }}
        />
        <Container text className="container login">
          <Button
            className="btn-go-map"
            onClick={() => history.push("/ordercheck")}
            size="huge"
            inverted
          >
            IR!
            <Icon name="right arrow" inverted />
          </Button>
        </Container>
      </Container>
    </Segment>
  );
}

export default withRouter(Map);
