import React, { Fragment } from "react";
import { Segment, Container, Header, Button, Icon } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

function OrderCheck({ history }) {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <div text className="details">
        <Header as="h3" inverted className="header text">
          Pedido Nº 1234556789
        </Header>
        <Container text className="container-order">
          <h3 style={{
            color: "#152935"
          }}>
          Maria Muñoz Lara</h3>
          <p>Av Libertad 978</p>
          <p>Cantidad de Productos: 2</p>
          <p>Lampara x 1</p>
          <p>Lampara x 1</p>
          <Button
            onClick={() => history.push("/")}
            size="huge"
            className="btn detailsroute"
            inverted
          >
            NO RECIBE
          </Button>
          <Button
            onClick={() => history.push("/orderphoto")}
            size="huge"
            className="btn detailsroute"
            inverted
          >
            RECIBE
          </Button>
        </Container>
      </div>
    </Segment>
  );
}

export default withRouter(OrderCheck);
