import React from "react";
import { Segment, Container, Button, Icon, Image } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

function Waze({ history }) {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Container text className="container login">
          <Button
            className="btn-close-map"
            onClick={() => history.push("/eventinroute2")}
            size="small"
            inverted
          >
            CERRAR MAPA
            {/* <Icon name="right arrow" inverted /> */}
          </Button>
        </Container>
        <Image
          size="massive"
          src="/assets/Waze.png"
          alt="map"
          id="img-map"
          style={{ marginBottom: 20 }}
        />
      </Container>
    </Segment>
  );
}

export default withRouter(Waze);
