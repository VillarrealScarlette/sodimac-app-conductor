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

function FirmEmpty({ history }) {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <div text className="details">
        <Header as="h3" inverted className="header text">
          Pedido 18257568466495938556
        </Header>
        <Container className="container-font-photo">
          <Container className="title-foto">
            <h1 id="fontPhoto">Formulário Firma</h1>

            <Button size="small" className="btn detailsroute" primary>
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
            onClick={() => history.push("/sign")}
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
export default withRouter(FirmEmpty);
