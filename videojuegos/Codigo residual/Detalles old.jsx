import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";
import  Button from "../../components/Boton/Boton";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Detalles = () => {
  //se ingresa el id del juego por parametro haciendo uso de useParams();
  const { id } = useParams();
  const [juegosDetalle, setJuegosDetalles] = useState([]);
  const navigate = useNavigate();
  
  const onClickHomeHandler = () => {
      navigate(ROUTES.home);
    };

  useEffect(() => {
    const fetchJuegos = async () => {
     
        const response = await fetch(`../../mocks/juego_${id}.json`); //la ruta de mocks mas el id que ingresa como parametro muestra el archivo json correspondiente a ese juego
      
        const resultado = await response.json();

        setJuegosDetalles(resultado);
    
    };
    fetchJuegos();
  }, []);

  return (
    <div>
      <Header /> 
                 
      <div className="max-w-7xl mx-auto w-full shadow-xl">
      <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
        <div className="grid grid-cols-1 bg-white md:grid-cols-2 gap-8 ">
          <section className="flex flex-col justify-center items-center">
            <img className="shadow-md rounded-2xl w-60 h-70 " src={`/img/imagen_${id}.jpg`}   alt="Game Cover" />
            <div className="ml-2 text-black">
            <p className="text-sm text-gray-500">metacritic | usuarios </p>
              {juegosDetalle.calificacion?.metacritic}  {juegosDetalle.calificacion?.usuarios}
            </div>
         
          </section>
          <section className=" text-left text-black">
            <h1 class="font-bold  border-b pb-1 mb-3">{juegosDetalle.name}</h1>
           
            <p className="mb-10">{juegosDetalle.precio}</p> 
            <p className="mb-3 text-sm text-left ">Disponible: {juegosDetalle.lanzamiento}</p> 
    
             
             
              
              <a href={juegosDetalle.enlace} className=" bg-[#F205CB] hover:bg-blue-700 text-white font-bold py-2 px-10 rounded inline-flex ">
              obtener juego
            </a> 
              
          </section>
        </div>
      </div>
      </div>
     
      <div className="grid  grid-cols-2  items-center m-7 p-15">
      <div className="p-6  items-center">
        <p className="text-gray-600 mb-3">{juegosDetalle.desc}</p>
      </div>
        <div className="p-6 text-gray-600 ">
        <p className="mb-3 text-sm text-left border-b pb-1">PLATAFORMAS: {juegosDetalle.plataformas}</p> 
        <p className="mb-3 text-sm text-left border-b pb-1">GÉNERO: {juegosDetalle.type}</p> 
        <p className="mb-3  text-sm text-left border-b pb-1">DESARROLLADOR: {juegosDetalle.desarrollador}</p> 
        <p className="mb-3 text-sm text-left border-b pb-1">CLASIFICACIÓN: {juegosDetalle.clasificacion}</p>
           
        </div>
      </div>


       
    
            <Footer />
    </div>
     
  );
};

export default Detalles;
