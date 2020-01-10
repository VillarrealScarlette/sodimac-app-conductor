import React from "react";
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

function Photo2({ history }) {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <div text className="details">
        <Header as="h3" inverted className="header text">
          Pedido Nº 18255684 - 10/01/2020
        </Header>
        <Container className="container-font-photo">
          <Container className="title-foto">
            <h3 id="fontPhoto"> Foto del Pedido</h3>
            Foto del Pedido
            <Button
              size="small"
              className="btn-delete"
              primary
              onClick={() => history.push("/photoempty2")}
            >
              Borrar
            </Button>
          </Container>
          <Image
            size="massive"
            src="/assets/Box-photo.png"
            alt="map"
            id="img-map"
            style={{ marginBottom: 20 }}
          />
        </Container>
        <Container text className="container-order">
          <Button
            onClick={() => history.push("/signempty2")}
            size="huge"
            className="btn detailsroute"
            inverted
          >
            ACEPTAR
            <Icon name="right arrow" inverted />
          </Button>
        </Container>
      </div>
    </Segment>
  );
}
export default withRouter(Photo2);
