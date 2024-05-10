import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Mensaje from "../../components/Mensaje/Mensaje";

const Home = () => {
  const [juegosState, setJuegosState] = useState([]);
  const [filtro, setFiltro] = useState('');//recibe lo que se busca por la barra de busqueda
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const fetchJuegos = async () => {
    console.log("Hola!");
    const response = await fetch("/mocks/juegos.json");
    const result = await response.json();
    setJuegosState(result);
  };

  const busqueda = (event) => {
    setFiltro(event.target.value);
    console.log(filtro);
  };

   //filtro de tareas
   let resultado = []
   if ( !filtro ) {
     //utiliza la constante textoFiltro que tiene un useState
     console.log(juegosState)
     resultado = juegosState
   }else{
     resultado = juegosState.filter((juego)=>juego.name.toLocaleLowerCase().startsWith(filtro.toLocaleLowerCase()))
     console.log(resultado)
   }
  
  useEffect(() => {

    fetchJuegos();
    
  }, []);

  useEffect(() => {
    setMostrarMensaje(resultado.length === 0);
  }, [resultado]);



  return (
    
  <div className=" mx-auto w-full  bg-indigo-950">

    <Header filtro={filtro} onFiltroChange={busqueda} SearchBarState={true}/>
      {mostrarMensaje && <Mensaje arregloJuegos={resultado} />}
      {!mostrarMensaje && <Card juegos={resultado} />}
    <Footer />
  </div>
  
  
);

}
export default Home;