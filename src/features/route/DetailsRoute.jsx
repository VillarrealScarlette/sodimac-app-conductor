import React, { Fragment } from "react";
import { Segment, Container, Header, Button, Icon } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

function DetailsRoute({ history }) {

    const patent = JSON.parse(localStorage.getItem('Patent'));
    const route = JSON.parse(localStorage.getItem('Route'));
    const rut = JSON.parse(localStorage.getItem('RUT'));

  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <div text className="details">
        <Header as="h3" inverted className="header text">
          Ruta Nº {route} - 10/01/2020
        </Header>
        <Container text className="container-order">
          <p>Conductor: Juan Perez Perez</p>
          <p>RUT: {rut}</p>
          <p>Patente Camión: {patent}</p>
          <p>Empresa: Sodimac</p>
          <p>Cantidad de Guías de Despacho: 6</p>
          <Button
            onClick={() => history.push("/events")}
            size="huge"
            className="btn detailsroute"
            inverted
          >
            DETALLE RUTA
            <Icon name="right arrow" inverted />
          </Button>
        </Container>
      </div>
    </Segment>
  );
}

export default withRouter(DetailsRoute);
