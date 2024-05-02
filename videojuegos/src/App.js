import logo from './logo.svg';
import './App.css';
import {ROUTES} from "./const/routes";
import Home from "./pages/Home/Home";
import Detalles from "./pages/Detalles/Detalles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Home />,
  },
  {
    path: ROUTES.detalles,
    element: <Detalles />,
  },

]);


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
