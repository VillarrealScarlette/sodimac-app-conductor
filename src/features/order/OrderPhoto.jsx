import React, { Fragment } from "react";
import { Segment, Container, Header, Button, Icon, Image } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

function OrderPhoto({ history }) {
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
          Foto del Pedido</h3>
          <Button
            onClick={() => history.push("/ordercheck")}
            size="huge"
            className="btn detailsroute"
            style={{
              backgroundColor: "#0072ce"
            }}
            inverted
          >
            BORRAR
          </Button>
          <Image
            size="massive"
            src="/assets/user.png"
            alt="map"
            id="img-order"
            style={{ marginBottom: 20 }}
          />
          <Button
            onClick={() => history.push("/events")}
            size="huge"
            className="btn detailsroute"
            inverted
          >
            OK
          </Button>
        </Container>
      </div>
    </Segment>
  );
}

export default withRouter(OrderPhoto);
