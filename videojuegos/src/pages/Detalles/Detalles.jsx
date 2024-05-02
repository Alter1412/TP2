import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";
import  Button from "../../components/Boton/Boton";

const Detalles = () => {
    const navigate = useNavigate();



const onClickHomeHandler = () => {
    navigate(ROUTES.home);
  };

    return( 
        <><p className="text-red-700 font-bold text-3xl">detalles...</p><Button text="Home" onClick={onClickHomeHandler} /></>
        );
  };
  
  export default Detalles;