import style from './Card.module.css'; 
import  Button from "../../components/Boton/Boton";
import { useNavigate } from 'react-router-dom';

const Card = ({juegos}) => {
  const navigate = useNavigate();
    return (
      <div className="flex flex-wrap justify-center " >
        {juegos.map((juego) => (
          
          //onClick={() => navigate(`/Detalles/${juego.id}`)} redirige a la pagina de detalles correspondiente al id 
          //para q funcione se modifica el routes.js 
            <div key={juego.id} className="max-w-xl w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 p-8 shadow-lg bg-indigo-800 m-1 rounded-lg">
                <img className="w-full h-64 object-cover cursor-pointer"  onClick={() => navigate(`/Detalles/${juego.id}`)} src={`/img/${juego.images}`}   alt="Game Cover" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{juego.name}</div>
                        <p className="text-gray-700 text-base text-slate-200">
                            {juego.desc}
                        </p>
                </div>
              
            </div>
 
        ))}
      </div>
    );
  };
  export default Card;