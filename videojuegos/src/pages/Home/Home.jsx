
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
    
  <div class="flex flex-wrap">
    
    <Header></Header>

{/*     {juegosState.map((juegos) => {
      return <p key={juegos.name}> {juegos.name}</p>;
    })} */}
    <Card juegos={juegosState}></Card>

    <Button text="detalles" onClick={onClickDetallesHandler} />

    <Footer></Footer>

    </div>

  )


}
export default Home;