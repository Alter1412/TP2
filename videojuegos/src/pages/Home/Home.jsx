
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";
import  Button from "../../components/Boton/Boton";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

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

const onClickDetallesHandler = () => {
    navigate(ROUTES.detalles);
  };

  useEffect(() => {

    fetchJuegos();
    
  }, []);


  return (
    
  <div className="flex flex-wrap">
    
    <Header></Header>

{/*     {juegosState.map((juegos) => {
      return <p key={juegos.name}> {juegos.name}</p>;
    })} */}
    <Card juegos={juegosState}></Card>

 

    </div>
    
  


    </div>

  )


}
export default Home;