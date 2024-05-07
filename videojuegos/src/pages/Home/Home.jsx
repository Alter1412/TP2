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
    
  <div class="flex flex-wrap bg-indigo-950">
    <Header />
 <div class="flex-nowarp bg-[#000940] flex-1 h-24  ">
    <SearchBar filtro={filtro} onFiltroChange={busqueda} ></SearchBar>
    </div>
{/*     {juegosState.map((juegos) => {
      return <p key={juegos.name}> {juegos.name}</p>;
    })} */}
    <Card juegos={resultado}></Card>

    
   <Footer />

    </div>

  )


}
export default Home;