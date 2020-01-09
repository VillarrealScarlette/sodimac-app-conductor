import React, { useState } from "react";
import {
  Segment,
  Container,
  Header,
  Image,
  Button,
  Icon,
  Input
} from "semantic-ui-react";
import { NavLink, Linnk, withRouter } from "react-router-dom";

function HomePage({ history }) {

  const [userRUT, setUserRUT] = useState(null);

  const [userPatent, setUserPatent] = useState(null);

  function sentToLocalStorage(userRUT, userPatent) {
    localStorage.setItem('RUT', JSON.stringify(userRUT));
    localStorage.setItem('Patent', JSON.stringify(userPatent));
    history.push("/order");
  }

  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Container as="h3" inverted>
          <Image
            size="massive"
            src="/assets/logo.svg"
            alt="logo"
            id="img-logo"
            style={{ marginBottom: 20 }}
          />
          Ingrese sus datos
        </Container>
        <Container text className="container login" />
        <Input
          type="text"
          className="margin element"
          placeholder="RUT 11111111-1"
          onChange={(event) => setUserRUT(event.target.value)}
          min="0"
          max="10"
        ></Input>
        {/* <select className="margin element" class="ui search dropdown">
            <option value="">Empresa</option>
            <option value="AL">Sodimac</option>
            <option value="AK">CIC</option>
            <option value="AZ">Rosen</option>
          </select> */}
        <Input
          type="text"
          placeholder="Patente Camión"
          className="margin element"
          onChange={(event) => setUserPatent(event.target.value)}
        ></Input>
        <Button onClick={() => sentToLocalStorage(userRUT, userPatent)} size="huge" inverted>
          INGRESAR
          <Icon name="right arrow" inverted />
        </Button>
      </Container>
    </Segment>
  );
}

export default withRouter(HomePage);
