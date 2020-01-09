import React from "react";
import {
  Segment,
  Container,
  Image,
  Button,
} from "semantic-ui-react";
import Progress from "../../modal/Progress";
import { withRouter } from "react-router-dom";

function RouteTime({ history }) {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text className="charging route">
          <Button
          onClick={() => history.push("/map")} 
          style={{ background: "none", display: "contents" }}
          ><Image
            size="medium"
            src="/favicon.png"
            alt="logo"
            className="click house"
            style={{ marginBottom: 20 }}
          /></Button>
          <p className="charging">Calculando ruta ...</p>
          <Progress />
        <Container text className="container login">
        </Container>
      </Container>
    </Segment>
  );
}

export default withRouter(RouteTime);