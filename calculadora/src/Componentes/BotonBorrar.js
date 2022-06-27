import React from "react";
import '../Hojas-de-estilo/BotonBorrar.css'

const BotonBorrar= (props) => (
    <div className="Boton-Borrar" onClick={props.manejarBorrar}>

        {props.children}

    </div>

)

export default BotonBorrar