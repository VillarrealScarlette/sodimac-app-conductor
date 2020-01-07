import React from "react";
import {
  Segment,
  Container,
  Header,
  Image,
  Button,
  Icon,
  Input,
  Select
} from "semantic-ui-react";

function HomePage({ history }) {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/assets/logo.png"
            alt="logo"
            style={{ marginBottom: 12 }}
          />
          Sodimac Conductor
        </Header>
        <Input type="text" placeholder="RUT 11111111-1" min="0" max="10">
        </Input>
        <select class="ui search dropdown">
          <option value="">Empresa</option>
          <option value="AL">Sodimac</option>
          <option value="AK">CIC</option>
          <option value="AZ">Rosen</option>
        </select>
        <Input type="text" placeholder="Patente Camión">
        </Input>
        <Button onClick={() => history.push("/events")} size="huge" inverted>
          Ingresar
          <Icon name="right arrow" inverted />
        </Button>
      </Container>
    </Segment>
  );
}
