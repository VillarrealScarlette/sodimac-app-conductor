import React from "react";
import {
  Segment,
  Container,
  Header,
  Image,
  Button,
  Icon,
  Input
} from "semantic-ui-react";
import { withRouter } from "react-router-dom";

function DetailsRoute({ history }) {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h3" inverted className="header text"> 
          Ruta Nº 2222 - 08/01/2020
        </Header>
        <Container text className="container login">
            <p>Conductor: Juan Perez Perez</p>
            <p>Patente Camión: XX1234</p>
            <p>Empresa: Sodimac</p>
            <p>Cantidad de Guías de Despacho: 6</p>
            <Button onClick={() => history.push("/events")} size="huge" className="btn detailsroute" inverted>
            DETALLE RUTA
            <Icon name="right arrow" inverted />
          </Button>
        </Container>
      </Container>
    </Segment>
  );
}

export default withRouter(DetailsRoute);