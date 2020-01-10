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
        <Container text className="container-ordercheck">
          <h4
            style={{
              color: "#152935",
              fontSize: "1.5em"
            }}
          >
            Mariana Muñoz Lara
          </h4>
          <p className="p-profile">
            Av. Libertad 987, Santiago Centro, Región Metropolitana
          </p>
          <h4
            style={{
              color: "#152935",
              fontSize: "1em"
            }}
          >
            Cantidad de Productos: 2
          </h4>
          <Checkboxes className="check-box" />
          <p className="p-profile">
            Mini refrigerador 102 litros, Teka. MODELO: TS1-138. SKU: 540560-2
          </p>

          <Checkboxes />
          <p className="p-profile">
            Lámpara de mesa 45 cm 25 W, Just Home Collection. SKU: 285900-9
          </p>

          <Button
            onClick={() => history.push("/notification")}
            size="medium"
            className="btn-delivery-left"
            inverted
          >
            NO RECIBE
          </Button>
          <Button
            onClick={() => history.push("/photoempty")}
            size="medium"
            className="btn-delivery-right"
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
