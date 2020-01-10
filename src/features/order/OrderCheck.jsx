import React, { Fragment } from "react";
import { Segment, Container, Header, Button, Icon } from "semantic-ui-react";
import Checkboxes from "../../modal/CheckBox";
import { withRouter } from "react-router-dom";

function OrderCheck({ history }) {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <div text className="details">
        <Header as="h3" inverted className="header text">
          Pedido Nº 18255684 - 10/01/2020
        </Header>
        <Container text className="container-order">
          <p>Mariana Muñoz Lara</p>
          <p>Av. Libertad 987, Santiago Centro, Región Metropolitana</p>
          <h4 style={{
            color: "#152935",
            fontSize: "1.5em",
          }}>Cantidad de Productos: 2</h4>
          <Checkboxes/><p>Mini refrigerador 102 litros, Teka</p>
          <p>MODELO: TS1-138</p>
          <p>SKU: 540560-2</p>
          <Checkboxes/><p> Lámpara de mesa 45 cm 25 W, Just Home Collection</p>
          <p>SKU: 285900-9</p>
          <Button
            onClick={() => history.push("/photoempty")}
            size="huge"
            className="btn detailsroute"
            inverted
          >
            RECIBE
          </Button>
          <Button
            onClick={() => history.push("/eventinroute")}
            size="huge"
            className="btn detailsroute"
            inverted
          >
            NO RECIBE
          </Button>
        </Container>
      </div>
    </Segment>
  );
}

export default withRouter(OrderCheck);
