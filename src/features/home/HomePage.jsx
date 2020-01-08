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

function HomePage({ history }) {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h3" inverted>
          <Image
            size="massive"
            src="/assets/logo.svg"
            alt="logo"
            id="img-logo"
            style={{ marginBottom: 20 }}
          />
          Ingrese sus datos
        </Header>
        <Container text className="container login">
          <Input type="text" className="margin element" placeholder="RUT 11111111-1" min="0" max="10">
          </Input>
          <select className="margin element" class="ui search dropdown">
            <option value="">Empresa</option>
            <option value="AL">Sodimac</option>
            <option value="AK">CIC</option>
            <option value="AZ">Rosen</option>
          </select>
          <Input type="text" placeholder="Patente Camión" className="margin element">
          </Input>
          <Button onClick={() => history.push("/detailsroute")} size="huge" inverted>
            Ingresar
            <Icon name="right arrow" inverted />
          </Button>
        </Container>
      </Container>
    </Segment>
  );
}

export default withRouter(HomePage);