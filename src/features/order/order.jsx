import React from "react";
import { withRouter } from "react-router-dom";
import { Button, 
Icon,
Container,
Segment } from "semantic-ui-react";

function Order({history}){
    return(
        <Segment inverted textAlign="center" vertical className="masthead">
            <div className="order">
                <h1 id="fontOrder">Ingresa el número de la hoja de ruta</h1>
                <input  className="inputorder" placeholder="Número"/>
                <Container text className="container login">
                    <Button onClick={() => history.push("/detailsroute")} size="huge" inverted> 
                    ACEPTAR
                        <Icon name="right arrow" inverted />
                    </Button>
                </Container>
            </div>
        </Segment>
    )
}
export default  withRouter(Order);