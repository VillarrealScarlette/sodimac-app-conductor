import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from "semantic-ui-react";

function Order({history}){
    return(
        <div className="order">
                <h1 id="fontOrder">Por favor ingresa el número de hoja de ruta.</h1>
                <input  className="inputorder" placeholder="Ingresa Número"/>
                {/* <button  className="btnOrder"><a href="/events"></a>Hoja de Ruta</button> */}
                <Button onClick={() => history.push("/detailsroute")} size="huge" className="btnOrder" inverted> 
                Hoja de Ruta
                </Button>
        </div>
    )
}
export default  withRouter(Order);