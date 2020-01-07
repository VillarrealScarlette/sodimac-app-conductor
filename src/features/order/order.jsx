import React from "react";
import { withRouter } from "react-router-dom";

function Order(history){
    return(
        <div className="order">
          
                <h1 id="fontOrder">Por favor ingresa el número de hoja de ruta.</h1>
                <input  className="inputorder" placeholder="Ingresa Número"/>
                <button  className="btnOrder"><a href="/events"></a>Hoja de Ruta</button>

        </div>
    )
}
export default  withRouter(Order);