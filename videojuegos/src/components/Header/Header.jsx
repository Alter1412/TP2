import React from "react";
import { useNavigate } from "react-router-dom";
import {ROUTES} from "../../const/routes";
import logo from "./images.jpg";
import SearchBar from "../SearchBar/SearchBar";

const Header = ({filtro, onFiltroChange, SearchBarState}) => {
  const navigate = useNavigate();
  const src = "https://static.vecteezy.com/system/resources/previews/002/443/300/non_2x/games-logo-with-gamepad-vector.jpg";
  const onClickHomeHandler = () => {
      navigate(ROUTES.home);
    };

    return (
        <nav className="bg-[#000940] mb-8 w-full shadow-xl">
          <div className="flex items-center text-white grid-cols-2">
           <img  onClick={onClickHomeHandler} className="h-24 w-auto cursor-pointer" src={logo} alt="" />
            <span className="font-semibold text-2xl tracking-tight">Game Zone</span>
            <div className="ml-[250px] ">
            <SearchBar filtro={filtro} onFiltroChange={onFiltroChange} visible={SearchBarState}></SearchBar>
            </div>
          </div>
          
        </nav>
    );
}

export default Header;
