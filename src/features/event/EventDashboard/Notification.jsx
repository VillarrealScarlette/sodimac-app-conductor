
import React from 'react';

import { withRouter } from "react-router-dom";
import {
  Button,
  Icon,
  Container,
  Segment,
  Input,
  Header,
  Image
} from "semantic-ui-react";

function Notification({ history }) {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <div text className="details">
        <Header as="h3" inverted className="header text">
         Notificación
        </Header>
        <Container className="btn-notification">
         
            <Button onClick={() => history.push("/photoempty")} className="btn-notification" interved> No se puede acceder a la ubicación </Button>
          </Container>
         
        <Container text className="btn-notification">
          <Button onClick={() => history.push("/photoempty")}  className="btn-notification" inverted> No hay nadie  para recibir</Button>
        </Container>
        <Container text className="btn-notification">
        <Button onClick={() => history.push("/photoempty")} className="btn-notification" inverted>No se vá a entregar  </Button>
        </Container>
      </div>
    </Segment>
  );
}
export default withRouter(Notification);




