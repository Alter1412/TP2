import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import SearchBar from "../../components/SearchBar/SearchBar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const [juegosState, setJuegosState] = useState([]);
  const [filtro, setFiltro] = useState('');//recibe lo que se busca por la barra de busqueda

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


  return (
    
  <div class=" bg-indigo-950">
    <Header filtro={filtro} onFiltroChange={busqueda} />
 

    <Card juegos={resultado}></Card>
    <Footer />
  </div>
  
  
);

}
export default Home;