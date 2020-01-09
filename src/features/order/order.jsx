import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Icon, Container, Segment, Input } from "semantic-ui-react";

function Order({ history }) {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <div className="order">
        <h1 id="fontOrder">Ingresa el número de la hoja de ruta</h1>
        <br />
        <Input
          type="text"
          placeholder="Número"
          //   className="margin element"
        ></Input>
        {/* <input className="inputorder" placeholder="Número" /> */}
        <br />

        <Container text className="container login">
          <Button
            className="btnAceptar"
            onClick={() => history.push("/detailsroute")}
            size="huge"
            inverted
          >
            ACEPTAR
            <Icon name="right arrow" inverted />
          </Button>
        </Container>
      </div>
    </Segment>
  );
}
export default withRouter(Order);
