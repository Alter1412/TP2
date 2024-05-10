import React from "react";


const Mensaje = ({arregloJuegos }) => {
    let textoMensaje ="";
    if(arregloJuegos.length === 0){
       
        textoMensaje ="No se encontraron elementos para su búsqueda.";
    }
    
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
  <div className="text-center">
    {textoMensaje}
  </div>
</div>
      );
}
export default Mensaje;  