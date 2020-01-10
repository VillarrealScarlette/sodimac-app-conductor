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

function Notification2({ history }) {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <div text className="details">
        <Header as="h3" inverted className="header text">
         Notificación de No Entrega
        </Header>
        <Container className="btn-notification">
        <Button
          onClick={() => history.push("/photoempty2")}
          size="huge"
          className="btn detailsroute"
          inverted
        >
          1. Incidencias en la ruta al destino
        </Button>
        <Button
          onClick={() => history.push("/photoempty2")}
          size="huge"
          className="btn detailsroute"
          inverted
        >
          2. No se encuentra el cliente en domicilio
        </Button>
        <Button
          onClick={() => history.push("/photoempty2")}
          size="huge"
          className="btn detailsroute"
          inverted
        >
          3. Pedido será reprogramado
        </Button>
        </Container>
      </div>
    </Segment>
  );
}
export default withRouter(Notification2);
