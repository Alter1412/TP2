
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";
import  Button from "../../components/Boton/Boton";

const Home = () => {
  const navigate = useNavigate();



const onClickDetallesHandler = () => {
    navigate(ROUTES.detalles);
  };

  return ( 
    <Button text="detalles" onClick={onClickDetallesHandler} />
);

}
export default Home;