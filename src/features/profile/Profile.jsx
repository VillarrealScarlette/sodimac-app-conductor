import React, { Fragment } from "react";
import {
  Segment,
  Container,
  Header,
  Button,
  Icon,
  Image
} from "semantic-ui-react";
import { withRouter } from "react-router-dom";

function Profile({ history }) {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <div text className="details">
        <Image
          size="massive"
          src="/assets/profile.svg"
          alt="profile"
          className="header-profile"
          style={{ marginBottom: 20 }}
        />
        <Image
          size="massive"
          src="/assets/photo-profile.png"
          alt="profile"
          className="photo-profile"
          style={{ marginBottom: 20 }}
        />
        <Container text className="container-profile">
          <p className="p-profile">Conductor: Juan Perez Perez</p>
          <p className="p-profile">Patente Camión: XX1234</p>
          <p className="p-profile">Empresa: Sodimac</p>
          <p className="p-profile">Cantidad de Guías de Despacho: 6</p>
        </Container>
      </div>
    </Segment>
  );
}

export default withRouter(Profile);
