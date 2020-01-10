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

function PhotoEmpty({ history }) {
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
              onClick={() => history.push("/photoempty")}
            >
              Borrar
            </Button>
          </Container>
          <Image
            size="massive"
            src="/assets/container-foto.png"
            alt="map"
            id="img-map"
            style={{ marginBottom: 20 }}
          />
        </Container>
        <Container text className="container-order">
          <Button
            onClick={() => history.push("/photo")}
            size="huge"
            className="btn detailsroute"
            inverted
          >
            SACAR FOTO
            <Icon name="right arrow" inverted />
          </Button>
        </Container>
      </div>
    </Segment>
  );
}
export default withRouter(PhotoEmpty);
