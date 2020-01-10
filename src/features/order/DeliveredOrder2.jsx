import React, { Fragment } from "react";
import { Segment, Container, Header, Button, Icon } from "semantic-ui-react";
import AlertDelivered2 from "../../modal/AlertDelivered2";
import { withRouter } from "react-router-dom";

function DeliveredOrder2({ history }) {

  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <div text className="details">
        <Header as="h3" inverted className="header text">
          Pedido Nº 73944826 - 10/01/2020
        </Header>
        <Container text className="container-order">
        <h4
          style={{
            color: "#152935",
            fontSize: "1.5em"
          }}
        >
          Isidora Gonzalez Quiroz
        </h4>
        <p>Hernando de Aguirre 2153, Ñuñoa, Región Metropolitana</p>
        <h4
          style={{
            color: "#152935",
            fontSize: "1em"
          }}
        >
          Cantidad de Productos: 1
        </h4>
        <p>Cama Americana Beat 1.5 plazas, Rosen</p>
        <p>MODELO: BEAT</p>
        <p>SKU: 287960-3</p>
        <AlertDelivered2/>
        </Container>

      </div>
    </Segment>
  );
}

export default withRouter(DeliveredOrder2);
