import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";
import  Button from "../../components/Boton/Boton";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Detalles = () => {
  const { id } = useParams();
  const [juegosDetalle, setJuegosDetalles] = useState([]);
  const navigate = useNavigate();
  
  const onClickHomeHandler = () => {
      navigate(ROUTES.home);
    };

  useEffect(() => {
    const fetchJuegos = async () => {
     
        const response = await fetch(`../../mocks/juego_${id}.json`);

        const resultado = await response.json();

        setJuegosDetalles(resultado);
    
    };
    fetchJuegos();
  }, []);

  return (
    <div>
      <Header />
      <h2>Detalles del juego</h2>
     
            <strong>Nombre:</strong> {juegosDetalle.name}<br />
            <strong>Género:</strong> {juegosDetalle.type}<br />
            <strong>Descripcion:</strong> {juegosDetalle.desc}<br />
            <strong>Desarrollador:</strong> {juegosDetalle.desarrollador}<br />
            <strong>lanzamiento:</strong> {juegosDetalle.lanzamiento}<br />
            <strong>plataformas:</strong> {juegosDetalle.plataformas}<br />
            <strong>clasificacion:</strong> {juegosDetalle.clasificacion}<br />
          
            <strong>enlace:</strong> {juegosDetalle.enlace}<br />
            <Button text="Home" onClick={onClickHomeHandler} />

            <Footer />
    </div>
     
  );
};

export default Detalles;
