
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";
import  Button from "../../components/Boton/Boton";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
  const navigate = useNavigate();
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
     resultado = juegosState.filter((juego)=>juego.name.toLocaleLowerCase().includes(filtro.toLocaleLowerCase()))
     console.log(resultado)
   }

  

const onClickDetallesHandler = () => {
    navigate(ROUTES.detalles);
  };

  useEffect(() => {

    fetchJuegos();
    
  }, []);


  return (
    
  <div class="flex flex-wrap">
    
    <Header></Header>
    <SearchBar filtro={filtro} onFiltroChange={busqueda}></SearchBar>

{/*     {juegosState.map((juegos) => {
      return <p key={juegos.name}> {juegos.name}</p>;
    })} */}
    <Card juegos={resultado}></Card>

    <Button text="detalles" onClick={onClickDetallesHandler} />

    <Footer></Footer>

    </div>

  )


}
export default Home;