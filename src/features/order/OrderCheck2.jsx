import React, { Fragment } from "react";
import { Segment, Container, Header, Button, Icon } from "semantic-ui-react";
import Checkboxes from "../../modal/CheckBox";
import { withRouter } from "react-router-dom";

function OrderCheck2({ history }) {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <div text className="details">
        <Header as="h3" inverted className="header text">
          Pedido Nº 73944826 - 10/01/2020
        </Header>
        <Container text className="container-order">
          <p>Isidora Gonzalez Quiroz</p>
          <p>Hernando de Aguirre 2153, Ñuñoa, Región Metropolitana</p>
          <h4 style={{
            color: "#152935",
            fontSize: "1.5em",
          }}>Cantidad de Productos: 1</h4>
          <Checkboxes/><p>Cama Americana Beat 1.5 plazas, Rosen</p>
          <p>MODELO: BEAT</p>
          <p>SKU: 287960-3</p>
          <Button
            onClick={() => history.push("/photoempty2")}
            size="huge"
            className="btn detailsroute"
            inverted
          >
            RECIBE
          </Button>
          <Button
            onClick={() => history.push("/eventinroute2")}
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

export default withRouter(OrderCheck2);
