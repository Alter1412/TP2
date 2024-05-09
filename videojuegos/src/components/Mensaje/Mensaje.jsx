import React from "react";
const Mensaje = ({arregloJuegos }) => {
    let textoMensaje ="";
    if(arregloJuegos.length === 0){
       
        textoMensaje ="No se encontraron elementos para su búsqueda.";
    }
    
    return <label >{textoMensaje}</label>
}
export default Mensaje;  