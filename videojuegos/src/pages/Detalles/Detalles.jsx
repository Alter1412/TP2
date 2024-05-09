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
    <div className=" ">
      <div className="">
          <div className="grid grid-flow-col   ">
            <div className="row-span-3 col-span-1 ml-64 text-black mb-9">
              <h1 className="font-bold  border-b pb-1 mb-3">{juegosDetalle.name}</h1>
                <img className="shadow-md rounded-2xl w-60 h-70 " src={`/img/imagen_${id}.jpg`}   alt="Game Cover" />
                <div className="ml-2 text-black">
                  <p className="text-sm text-gray-500">metacritic | usuarios </p>
                    {juegosDetalle.calificacion?.metacritic}  {juegosDetalle.calificacion?.usuarios}
                </div>
                <br />
                <p className="mb-3">Precio: {juegosDetalle.precio}</p> 
               <p className="mb-3 text-sm text-left ">Disponible: {juegosDetalle.lanzamiento}</p> 
    
              <a href={juegosDetalle.enlace} className=" bg-[#F205CB] hover:bg-blue-700 text-white font-bold py-2 px-10 rounded inline-flex ">
              obtener juego
            </a> 

            </div>
            <div  className="grid  grid-rows-2 items-center m-7 p-1">
                  <div className="row-span-2 col-span-1  w-9/12">
                  <div className="p-6  items-center">
                    <p className="text-gray-600 mb-3 text-left">{juegosDetalle.desc}</p>
                  </div>
                  </div>
                  <div className="col-span-2 row-span-1  w-9/12">
                    <div className="p-6 text-gray-600 ">
                      <p className="mb-3 text-sm text-left border-b pb-1">PLATAFORMAS: {juegosDetalle.plataformas}</p> 
                      <p className="mb-3 text-sm text-left border-b pb-1">GÉNERO: {juegosDetalle.type}</p> 
                      <p className="mb-3  text-sm text-left border-b pb-1">DESARROLLADOR: {juegosDetalle.desarrollador}</p> 
                      <p className="mb-3 text-sm text-left border-b pb-1">CLASIFICACIÓN: {juegosDetalle.clasificacion}</p>
                        
                      </div>
                      <div className=" bg-[#F205CB] hover:bg-blue-700 text-white font-bold py-2 px-10 rounded inline-flex mt-20">
                        <Button onClick={onClickHomeHandler} text={"Volver"}></Button>
                      </div>
                  </div>

            </div>
          </div>
      </div>
    </div>
                

      


       
    
            <Footer />
    </div>
     
  );
};

export default Detalles;
