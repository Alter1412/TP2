import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Header.modules.css";
import {ROUTES} from "../../const/routes";
import logo from "./images.jpg";

const Header = () => {
  const navigate = useNavigate();
  const src = "https://static.vecteezy.com/system/resources/previews/002/443/300/non_2x/games-logo-with-gamepad-vector.jpg";
  const onClickHomeHandler = () => {
      navigate(ROUTES.home);
    };

    return (
        <nav className="flex-nowrap w-4/6 bg-[#000940] mb-8 ">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
           <img  onClick={onClickHomeHandler} className="h-24 w-auto cursor-pointer" src={logo} alt="" />
            <span className="font-semibold text-2xl tracking-tight">Game Zone</span>
          </div>
          
        </nav>
    );
}

export default Header;
