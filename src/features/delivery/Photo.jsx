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

function Photo({ history }) {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <div text className="details">
        <Header as="h3" inverted className="header text">
          Pedido 18257568466495938556
        </Header>
        <Container className="container-font-photo">
          <Container className="title-foto">
            <h1 id="fontPhoto"> Foto del Pedido</h1>
            Foto del Pedido
            <Button
              size="small"
              className="btn detailsroute"
              primary
              onClick={() => history.push("/photoempty")}
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
            onClick={() => history.push("/signempty")}
            size="huge"
            className="btn detailsroute"
            inverted
          >
            OK
            <Icon name="right arrow" inverted />
          </Button>
        </Container>
      </div>
    </Segment>
  );
}
export default withRouter(Photo);
